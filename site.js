const TEMAS={
 verde:{prim:"#0f3d2e",pt:"#fff",dest:"#14683f",dest2:"#1a8a52",ouro:"#e6f4c8",bt:"#fff",faixa:"#eef6e8",btn:"#0f3d2e",btt:"#fff",cta:"#eef6e8",ctat:"#0f3d2e",pd:"#e6f4c8",
  b1:"radial-gradient(circle at 80% 50%,#2fb866,#0f5a37 70%)",b2:"radial-gradient(circle at 80% 50%,#2c4a3a,#0b1f17 70%)",b3:"radial-gradient(circle at 80% 50%,#6fcf97,#1b6b45 70%)",promo:"linear-gradient(100deg,#0b1f17,#14683f)"},
 preto:{prim:"#000",pt:"#fff",dest:"#111",dest2:"#d99a00",ouro:"#f5b800",bt:"#fff",faixa:"#f1efe9",btn:"#000",btt:"#fff",cta:"#f5b800",ctat:"#000",pd:"#f5b800",
  b1:"radial-gradient(circle at 80% 50%,#3a3a3a,#000 70%)",b2:"radial-gradient(circle at 80% 50%,#5a4600,#0a0a0a 70%)",b3:"radial-gradient(circle at 80% 50%,#444,#111 70%)",promo:"linear-gradient(100deg,#000,#3a2f00)"},
 vermelho:{prim:"#7a0c14",pt:"#fff",dest:"#b5121b",dest2:"#d01e27",ouro:"#f5d9a0",bt:"#fff",faixa:"#fbf5e9",btn:"#7a0c14",btt:"#fff",cta:"#fbf5e9",ctat:"#5a0c10",pd:"#f5d9a0",
  b1:"radial-gradient(circle at 80% 50%,#d92b30,#8f0c13 70%)",b2:"radial-gradient(circle at 80% 50%,#1f6f3f,#0b3a20 70%)",b3:"radial-gradient(circle at 80% 50%,#c43a55,#6e1228 70%)",promo:"linear-gradient(100deg,#2a0508,#8f0c13)"},
 amarelo:{prim:"#ffd400",pt:"#111",dest:"#111",dest2:"#e11d1d",ouro:"#111",bt:"#111",faixa:"#fff7c2",btn:"#111",btt:"#fff",cta:"#111",ctat:"#ffd400",pd:"#ffd400",
  b1:"radial-gradient(circle at 80% 50%,#ffe45c,#f5b800 70%)",b2:"radial-gradient(circle at 80% 50%,#ffd400,#e69500 70%)",b3:"radial-gradient(circle at 80% 50%,#fff176,#ffc400 70%)",promo:"linear-gradient(100deg,#111,#e11d1d)"}
};
const ZAP='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
const SHARE='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const bg=o=>o.foto?`background-image:url('${esc(o.foto)}')`:`background-color:${esc(o.cor||'#777')}`;
const linhas=t=>String(t||'').split('\n').map(x=>x.trim()).filter(Boolean);
const seguro=u=>/^(#|\/|https:\/\/)/.test(u||'')?u:'#conteudo';
const https=u=>/^https:\/\//i.test(u||'');
const brl=n=>Number(n).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const yt=u=>{const m=/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([\w-]{11})/.exec(u||'');return m?m[1]:''};
const LOJAS={shopee:{nome:'Shopee',cor:'#ee4d2d',txt:'#fff'},mercadolivre:{nome:'Mercado Livre',cor:'#ffe600',txt:'#222'},magalu:{nome:'Magazine Luiza',cor:'#0086ff',txt:'#fff'},aliexpress:{nome:'AliExpress',cor:'#e62e04',txt:'#fff'},tiktokshop:{nome:'TikTok Shop',cor:'#111',txt:'#fff'},kwaishop:{nome:'Kwai Shop',cor:'#ff6a00',txt:'#fff'},outra:{nome:'Outra loja',cor:'#555',txt:'#fff'}};
let CFG,t0,t1,estava=null,desenhar=()=>{},timer,atual=0,filtro='todos',lojaF='todas',busca='',nVivas=-1;
const lj=o=>LOJAS[o.loja]||LOJAS.outra;
const viva=o=>o.ativo!==false&&(!o.validade||Date.parse(o.validade)>Date.now());
const pa=()=>{const p=CFG.promo;return !!p&&p.ativa&&Date.now()>=t0&&Date.now()<t1};
const catDe=o=>CFG.categorias.find(c=>c.id===o.cat)||{};
const achar=id=>CFG&&CFG.ofertas.find(o=>String(o.id)===String(id));
const pct=o=>o.precoDe>o.preco&&o.preco>0?Math.round((1-o.preco/o.precoDe)*100):0;
const precoO=o=>!(o.preco>0)?'Ver preço na loja':o.precoDe>o.preco?`<span class="antigo">${brl(o.precoDe)}</span>${brl(o.preco)}`:brl(o.preco);
const urlO=o=>location.origin+'/o/'+encodeURIComponent(o.id);
const textoO=o=>'🔥 *'+o.nome+'*\n'+(o.preco>0?(o.precoDe>o.preco?'De ~'+brl(o.precoDe)+'~ por *'+brl(o.preco)+'*':'Por *'+brl(o.preco)+'*')+'\n':'')+(o.cupom?'🏷️ Cupom: *'+o.cupom+'*\n':'')+'\n👉 '+urlO(o);

function card(o){const f=o.foto?o:catDe(o),nm=esc(o.nome),id=esc(o.id),L=lj(o),p=pct(o);
  const botao=https(o.link)?`<a class="btn pegar" href="/o/${encodeURIComponent(o.id)}" target="_blank" rel="sponsored noopener">Pegar oferta</a>`
    :`<button class="btn pegar" onclick="alert('O link de afiliado desta oferta ainda não foi configurado.')">Pegar oferta</button>`;
  return `<div class="card" id="pd-${id}"><div class="foto" style="${bg(f)}">${f.foto?'':esc(o.nome[0])}<span class="selo" style="background:${L.cor};color:${L.txt}">${esc(L.nome)}</span>${p?`<span class="pct">-${p}%</span>`:''}${o.video?`<button class="play" onclick="abrirVideo('${id}')" aria-label="Ver vídeo de ${nm}">▶</button>`:''}</div>
 <div class="info"><div>${nm}</div><div class="preco">${precoO(o)}</div>
 ${o.cupom?`<button class="cupom" onclick="copiar(this)" data-c="${esc(o.cupom)}" title="Copiar cupom">🏷️ ${esc(o.cupom)}</button>`:''}
 ${o.validade?`<small class="aviso-s">Válida até ${new Date(o.validade).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}</small>`:''}
 <div class="acoes">${botao}<button class="ic" onclick="compartilhar('${id}')" aria-label="Compartilhar ${nm}" title="Compartilhar foto e preço">${SHARE}</button></div></div></div>`}

function copiar(b){const c=b.dataset.c;const ok=()=>{b.textContent='✓ Copiado';setTimeout(()=>b.textContent='🏷️ '+c,1500)};
  navigator.clipboard?navigator.clipboard.writeText(c).then(ok).catch(()=>prompt('Copie o cupom:',c)):prompt('Copie o cupom:',c)}
const arq={};
function aquecer(id){ // baixa a foto antes do toque, para o compartilhamento abrir na hora
  if(arq[id])return arq[id];const o=achar(id),u=o&&(o.foto||catDe(o).foto);
  return arq[id]=u?fetch(u).then(r=>r.ok?r.blob():Promise.reject()).then(b=>new File([b],'oferta.jpg',{type:b.type||'image/jpeg'})).catch(()=>false):Promise.resolve(false)}
const aquecerCard=e=>{const c=e.target.closest&&e.target.closest('.card');if(c)aquecer(c.id.slice(3))};
document.addEventListener('pointerover',aquecerCard);document.addEventListener('touchstart',aquecerCard,{passive:true});
async function compartilhar(id){
  const o=achar(id),texto=textoO(o),f=await aquecer(id);
  if(f&&navigator.canShare&&navigator.canShare({files:[f]})){try{await navigator.share({files:[f],text:texto,title:o.nome});return}catch(e){if(e.name==='AbortError')return}}
  const link='https://wa.me/?text='+encodeURIComponent(texto);window.open(link,'_blank','noopener')||(location.href=link);
}
function abrirVideo(id){const u=achar(id).video||'',y=yt(u);
  $('mconteudo').innerHTML=y?`<iframe src="https://www.youtube-nocookie.com/embed/${y}?autoplay=1" allow="autoplay;encrypted-media" allowfullscreen title="Vídeo"></iframe>`
    :https(u)&&/\.(mp4|webm)(\?|$)/i.test(u)?`<video src="${esc(u)}" controls autoplay playsinline></video>`:'';
  if(!$('mconteudo').innerHTML){if(https(u))window.open(u,'_blank','noopener');return}
  $('modal').hidden=false}

const z=n=>String(n).padStart(2,'0');
function tick(){
  const ativa=pa(),falta=Math.max(0,t1-Date.now());$('promo').classList.toggle('ativa',ativa);
  if(ativa){const s=Math.floor(falta/1000),P=CFG.promo;
    $('promoTitulo').innerHTML=esc(P.nome)+(P.texto?'<br>'+esc(P.texto):'');
    $('d').textContent=z(Math.floor(s/86400));$('h').textContent=z(Math.floor(s%86400/3600));$('m').textContent=z(Math.floor(s%3600/60));$('s').textContent=z(s%60);
    $('restante').textContent=s>=86400?Math.floor(s/86400)+' dias':z(Math.floor(s/3600))+':'+z(Math.floor(s%3600/60));
    $('anel').style.strokeDashoffset=2*Math.PI*44*(1-falta/(t1-t0));$('relogio').classList.toggle('urgente',s<3600)}
  const v=CFG.ofertas.filter(viva).length; // oferta que expirou some sozinha
  if(estava!==ativa||v!==nVivas){estava=ativa;nVivas=v;desenhar()}
}

document.addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(!b)return;
  if(location.pathname!=='/'){location.href='/?cat='+encodeURIComponent(b.dataset.f);return}
  filtro=b.dataset.f;busca='';(window.desenharConteudo||desenhar)();($('conteudo')||document.body).scrollIntoView({behavior:'smooth'})});
async function iniciarSite(render){
  try{CFG=await (await fetch('/api/loja',{cache:'no-store'})).json()}
  catch(e){document.body.innerHTML='<p style="padding:40px">Não foi possível carregar o site agora. Tente novamente em instantes.</p>';document.body.classList.add('ok');return}
  Object.entries(TEMAS[CFG.tema]||TEMAS.verde).forEach(([k,v])=>document.documentElement.style.setProperty('--'+k,v));
  t0=new Date(CFG.promo?.inicio).getTime();t1=new Date(CFG.promo?.fim).getTime();
  const S=CFG.loja||{},G=CFG.grupo||{},Q=new URLSearchParams(location.search);
  document.title=S.nome||'Ofertas';if(Q.get('cat'))filtro=Q.get('cat');if(Q.get('busca'))busca=Q.get('busca').toLowerCase();
  $('topo').innerHTML=`<div class="faixa">${(CFG.faixa||[]).filter(Boolean).map(f=>{const [a,b]=f.split('|');return `<span><b>${esc(a)}</b>${esc(b||'')}</span>`}).join('')}</div>
   <header><a class="logo" href="/">${esc(S.nome)}</a><form class="busca" id="busca" role="search"><input id="q" placeholder="Buscar ofertas" aria-label="Buscar"><button type="submit">Buscar</button></form><a class="carrinho" href="/#grupo">Grupo VIP</a></header>
   <nav>${[{id:'todos',nome:'Todas'},...CFG.categorias].map(c=>`<button data-f="${esc(c.id)}">${esc(c.nome)}</button>`).join('')}</nav>`;
  $('promoBox').innerHTML=`<section id="promo" aria-live="polite"><h3 id="promoTitulo"></h3>
   <div class="relogio" id="relogio"><svg viewBox="0 0 100 100"><circle class="trilho" cx="50" cy="50" r="44"/><circle class="anel" id="anel" cx="50" cy="50" r="44"/></svg><div class="centro"><span id="restante"></span><small>restantes</small></div></div>
   <div class="blocos"><div class="bloco"><b id="d">00</b><span>dias</span></div><div class="bloco"><b id="h">00</b><span>horas</span></div><div class="bloco"><b id="m">00</b><span>min</span></div><div class="bloco"><b id="s">00</b><span>seg</span></div></div></section>`;
  $('anel').style.strokeDasharray=2*Math.PI*44;
  $('rodape').innerHTML=linhas(CFG.avisos).map(a=>`<p>${esc(a)}</p>`).join('')+`<p>© ${new Date().getFullYear()} ${esc(S.nome)}</p>`;
  document.body.insertAdjacentHTML('beforeend',`<div id="modal" hidden><div class="mbox"><button id="mfechar" aria-label="Fechar vídeo">✕</button><div id="mconteudo"></div></div></div>
   <a class="zapfix" href="${https(G.link)?esc(G.link):'/#grupo'}" ${https(G.link)?'target="_blank" rel="noopener"':''} aria-label="Entrar no grupo de ofertas">${ZAP}</a>`);
  const fv=()=>{$('modal').hidden=true;$('mconteudo').innerHTML=''};$('mfechar').onclick=fv;$('modal').onclick=e=>{if(e.target.id==='modal')fv()};
  $('busca').onsubmit=e=>{e.preventDefault();const v=$('q').value.trim();if(location.pathname!=='/'){location.href='/?busca='+encodeURIComponent(v);return}busca=v.toLowerCase();filtro='todos';lojaF='todas';(window.desenharConteudo||desenhar)()};
  desenhar=render;render();document.body.classList.add('ok');
  estava=pa();nVivas=CFG.ofertas.filter(viva).length;tick();setInterval(tick,1000);
}
