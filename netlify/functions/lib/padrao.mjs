// Conteúdo inicial (vale até você salvar algo no painel /admin.html). As ofertas abaixo são EXEMPLOS: troque ou apague.
export const PADRAO = {
  loja: { nome: "MINHAS OFERTAS" },
  tema: "verde",
  faixa: ["Ofertas selecionadas|atualizadas todo dia", "Cupons|de várias lojas", "Grupo oficial|ofertas no seu WhatsApp"],
  avisos:
    "Este site contém links de afiliado: podemos receber comissão pelas compras feitas por eles, sem custo extra para você.\nPreços, cupons e estoque podem mudar a qualquer momento nas lojas. Confira o valor final antes de comprar.\nShopee, Mercado Livre, Magazine Luiza, AliExpress, TikTok Shop e Kwai Shop são marcas de seus respectivos proprietários. Este site é independente.",
  grupo: {
    link: "",
    titulo: "Entre no grupo oficial de ofertas",
    texto: "Receba as melhores ofertas e cupons direto no seu WhatsApp. É grátis e você pode sair quando quiser.",
    aviso: "Usamos seu nome e WhatsApp apenas para enviar ofertas. Você pode pedir a exclusão dos seus dados a qualquer momento.",
  },
  categorias: [
    { id: "casa", nome: "Casa e Cozinha", foto: "", cor: "#14683f" },
    { id: "eletronicos", nome: "Eletrônicos", foto: "", cor: "#3d6b8c" },
    { id: "celulares", nome: "Celulares", foto: "", cor: "#2f7d5b" },
    { id: "moda", nome: "Moda", foto: "", cor: "#a0446a" },
    { id: "beleza", nome: "Beleza", foto: "", cor: "#b5651d" },
    { id: "esportes", nome: "Esportes", foto: "", cor: "#6c8aa8" },
  ],
  carrossel: [
    { id: "c1", sub: "Ofertas do dia", titulo: "ACHADINHOS COM DESCONTO", texto: "Shopee, Mercado Livre, Magalu, AliExpress e mais", botao: "VER OFERTAS", link: "#conteudo", foto: "", shopeeUrl: "", ativo: true },
    { id: "c2", sub: "Cupons", titulo: "CUPONS ATUALIZADOS", texto: "Copie o cupom e economize na hora", botao: "CONFIRA", link: "#conteudo", foto: "", shopeeUrl: "", ativo: true },
    { id: "c3", sub: "Grupo VIP", titulo: "RECEBA NO WHATSAPP", texto: "As melhores ofertas antes de todo mundo", botao: "ENTRAR NO GRUPO", link: "#grupo", foto: "", shopeeUrl: "", ativo: true },
  ],
  promo: { ativa: false, nome: "Oferta relâmpago", texto: "Termina em:", inicio: "2026-10-23T03:00:00.000Z", fim: "2026-11-30T02:59:59.000Z" },
  secao1: { titulo: "Ofertas em destaque", ativa: true },
  secao2: { titulo: "Mais ofertas", ativa: true },
  ofertas: [
    { id: "o1", nome: "Exemplo: Organizador de cozinha", loja: "shopee", link: "", preco: 29.9, precoDe: 49.9, cupom: "EXEMPLO10", cat: "casa", secao: 1, foto: "", video: "", validade: "", auto: false, ativo: true },
    { id: "o2", nome: "Exemplo: Fone Bluetooth", loja: "mercadolivre", link: "", preco: 79.9, precoDe: 119.9, cupom: "", cat: "eletronicos", secao: 1, foto: "", video: "", validade: "", auto: false, ativo: true },
    { id: "o3", nome: "Exemplo: Air Fryer 4L", loja: "magalu", link: "", preco: 299, precoDe: 399, cupom: "", cat: "casa", secao: 1, foto: "", video: "", validade: "", auto: false, ativo: true },
    { id: "o4", nome: "Exemplo: Capa de celular", loja: "aliexpress", link: "", preco: 9.9, precoDe: 0, cupom: "", cat: "celulares", secao: 2, foto: "", video: "", validade: "", auto: false, ativo: true },
    { id: "o5", nome: "Exemplo: Tênis esportivo", loja: "tiktokshop", link: "", preco: 129.9, precoDe: 199.9, cupom: "", cat: "esportes", secao: 2, foto: "", video: "", validade: "", auto: false, ativo: true },
    { id: "o6", nome: "Exemplo: Kit de skincare", loja: "kwaishop", link: "", preco: 59.9, precoDe: 89.9, cupom: "", cat: "beleza", secao: 2, foto: "", video: "", validade: "", auto: false, ativo: true },
  ],
};
