// Cadastro de quem quer receber ofertas (público) + lista de contatos e cliques (só painel).
import { getStore } from "@netlify/blobs";
import { PADRAO } from "./lib/padrao.mjs";

const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const admin = (req) => !!process.env.ADMIN_PASSWORD && req.headers.get("x-admin-senha") === process.env.ADMIN_PASSWORD;

export default async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/api/cliques") {
    if (!admin(req)) return J({ erro: "Senha incorreta" }, 401);
    const st = getStore("cliques"), { blobs } = await st.list(), out = {};
    await Promise.all(blobs.map(async (b) => { out[b.key] = (await st.get(b.key, { type: "json" }))?.total || 0; }));
    return J(out);
  }
  const st = getStore("contatos");
  if (req.method === "POST") {
    const b = await req.json().catch(() => ({}));
    if (b.site) return J({ ok: true }); // campo-isca: robôs preenchem, pessoas não
    const nome = String(b.nome || "").trim().slice(0, 80);
    let tel = String(b.tel || "").replace(/\D/g, "").slice(0, 13);
    if (nome.length < 2 || tel.length < 10) return J({ erro: "Informe seu nome e seu WhatsApp com DDD." }, 400);
    if (b.consent !== true) return J({ erro: "Marque a caixa de autorização para receber as ofertas." }, 400);
    if (tel.length <= 11) tel = "55" + tel;
    const interesses = (Array.isArray(b.interesses) ? b.interesses : []).slice(0, 12).map((x) => String(x).slice(0, 40));
    await st.setJSON(tel, { nome, tel, interesses, consent: true, criado: new Date().toISOString() });
    const cfg = (await getStore("loja").get("config", { type: "json" })) ?? PADRAO;
    const g = cfg.grupo?.link || "";
    return J({ ok: true, grupo: /^https:\/\//i.test(g) ? g : "" });
  }
  if (!admin(req)) return J({ erro: "Senha incorreta" }, 401);
  if (req.method === "GET") {
    const { blobs } = await st.list();
    const todos = await Promise.all(blobs.slice(0, 1000).map((b) => st.get(b.key, { type: "json" })));
    return J(todos.filter(Boolean).sort((a, b) => b.criado.localeCompare(a.criado)));
  }
  if (req.method === "DELETE") {
    const tel = url.searchParams.get("tel") || "";
    if (/^\d+$/.test(tel)) await st.delete(tel);
    return J({ ok: true });
  }
  return J({ erro: "Método não permitido" }, 405);
};

export const config = { path: ["/api/contato", "/api/cliques"] };
