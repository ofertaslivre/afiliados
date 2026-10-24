// /o/<id>: robôs (WhatsApp, Telegram...) veem foto, título e preço; pessoas são levadas ao seu link de afiliado (e o clique é contado).
import { getStore } from "@netlify/blobs";
import { PADRAO } from "./lib/padrao.mjs";

const BOT = /bot|crawl|spider|whatsapp|facebookexternalhit|telegram|slack|discord|preview|embed|curl/i;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const brl = (n) => Number(n).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const NOMES = { shopee: "Shopee", mercadolivre: "Mercado Livre", magalu: "Magazine Luiza", aliexpress: "AliExpress", tiktokshop: "TikTok Shop", kwaishop: "Kwai Shop" };

export default async (req) => {
  const u = new URL(req.url);
  const id = decodeURIComponent(u.pathname.replace(/^\/o\//, "").split("/")[0]);
  const cfg = (await getStore("loja").get("config", { type: "json" })) ?? PADRAO;
  const o = (cfg.ofertas || []).find((x) => String(x.id) === id);
  const viva = o && o.ativo !== false && (!o.validade || Date.parse(o.validade) > Date.now());
  const destino = /^https:\/\//i.test(o?.link || "") ? o.link : "";
  if (!viva || !destino) return Response.redirect(u.origin + "/", 302);

  if (!BOT.test(req.headers.get("user-agent") || "")) {
    try {
      const st = getStore("cliques"), n = (await st.get(id, { type: "json" })) || { total: 0 };
      n.total++; n.ultimo = new Date().toISOString();
      await st.setJSON(id, n);
    } catch {}
    return Response.redirect(destino, 302);
  }
  const cat = (cfg.categorias || []).find((c) => c.id === o.cat) || {};
  let img = o.foto || cat.foto || "";
  if (img.startsWith("/")) img = u.origin + img;
  const titulo = o.preco > 0 ? `${o.nome} - ${brl(o.preco)}` : o.nome;
  const desc = [o.precoDe > o.preco ? `De ${brl(o.precoDe)} por ${brl(o.preco)}` : "", o.cupom ? `Cupom: ${o.cupom}` : "", NOMES[o.loja] || ""].filter(Boolean).join(" · ");
  return new Response(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(titulo)}</title>
<meta property="og:type" content="product"><meta property="og:site_name" content="${esc(cfg.loja?.nome || "Ofertas")}">
<meta property="og:title" content="${esc(titulo)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${esc(u.href)}">
${img ? `<meta property="og:image" content="${esc(img)}"><meta name="twitter:card" content="summary_large_image">` : ""}
</head><body><a href="${esc(destino)}">${esc(o.nome)}</a></body></html>`, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
};

export const config = { path: "/o/*" };
