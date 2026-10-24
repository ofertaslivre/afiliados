// API do site: lê/salva a configuração e as imagens (Netlify Blobs, gratuito).
import { getStore } from "@netlify/blobs";
import { PADRAO } from "./lib/padrao.mjs";

const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const admin = (req) => !!process.env.ADMIN_PASSWORD && req.headers.get("x-admin-senha") === process.env.ADMIN_PASSWORD;

export default async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/api/imagem") return imagem(req, url);
  if (req.method === "GET") {
    if (url.searchParams.get("check")) return admin(req) ? J({ ok: true }) : J({ erro: "Senha incorreta" }, 401);
    return J((await getStore("loja").get("config", { type: "json" })) ?? PADRAO);
  }
  if (req.method === "PUT") {
    if (!admin(req)) return J({ erro: "Senha incorreta" }, 401);
    const txt = await req.text();
    if (txt.length > 1500000) return J({ erro: "Dados grandes demais" }, 413);
    const c = JSON.parse(txt);
    if (![c.ofertas, c.categorias, c.carrossel].every(Array.isArray)) return J({ erro: "Dados inválidos" }, 400);
    await getStore("loja").setJSON("config", c);
    return J({ ok: true });
  }
  return J({ erro: "Método não permitido" }, 405);
};

async function imagem(req, url) {
  const st = getStore("imagens");
  if (req.method === "GET") {
    const id = url.searchParams.get("id") || "";
    const b = /^[a-z0-9]+$/.test(id) ? await st.getWithMetadata(id, { type: "arrayBuffer" }) : null;
    if (!b) return new Response("Não encontrada", { status: 404 });
    return new Response(b.data, { headers: { "content-type": b.metadata?.tipo || "image/jpeg", "cache-control": "public, max-age=31536000, immutable" } });
  }
  if (req.method === "POST") {
    if (!admin(req)) return J({ erro: "Senha incorreta" }, 401);
    const { dataUrl } = await req.json();
    const m = /^data:image\/jpeg;base64,(.+)$/.exec(dataUrl || "");
    if (!m || m[1].length > 800000) return J({ erro: "Imagem inválida ou grande demais" }, 400);
    const buf = Buffer.from(m[1], "base64");
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    await st.set(id, buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), { metadata: { tipo: "image/jpeg" } });
    return J({ url: "/api/imagem?id=" + id });
  }
  return J({ erro: "Método não permitido" }, 405);
}

export const config = { path: ["/api/loja", "/api/imagem"] };
