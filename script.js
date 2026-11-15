/* ---------- Dados ---------- */
/* COLOQUE SEUS LINKS DE IMAGEM: preencha img:'' nas obras, o 4º item de cada linha do tempo e o 3º item de cada carta da memória. */
const foto=(u,alt)=>u?<img class="foto" src="${u}" alt="${alt}" loading="lazy">:<div class="foto ph">sua imagem aqui</div>;
const OBRAS = [
 {img:'',nome:'Girl with Balloon',ano:2002,local:'Londres, Reino Unido',t:'famosa',d:'Menina soltando um balão vermelho em forma de coração. Em 2018, uma versão emoldurada se autodestruiu em leilão.'},
 {img:'',nome:'Flower Thrower',ano:2003,local:'Jerusalém e Belém',t:'famosa',d:'Manifestante lança um buquê em vez de uma bomba. Virou símbolo de paz.'},
 {img:'',nome:'Kissing Coppers',ano:2004,local:'Brighton, Reino Unido',t:'famosa',d:'Dois policiais se beijando, na parede de um pub. Uma provocação sobre autoridade e afeto.'},
 {img:'',nome:'Crude Oils (ratos)',ano:2005,local:'Londres, Reino Unido',t:'rara',d:'Releituras de quadros clássicos tomadas por ratos, exibidas em exposição.'},
 {img:'',nome:'Show Me the Monet',ano:2005,local:'Londres, Reino Unido',t:'rara',d:'Uma ponte de Monet com carrinhos de supermercado e cones de trânsito afundados.'},
 {img:'',nome:'Barely Legal',ano:2006,local:'Los Angeles, EUA',t:'rara',d:'Exposição com um elefante pintado em uma sala, para falar do problema que todos fingem não ver.'},
 {img:'',nome:'Devolved Parliament',ano:2009,local:'Londres, Reino Unido',t:'rara',d:'Parlamento britânico ocupado por chimpanzés. Foi vendida em 2019 por cerca de 9,9 milhões de libras.'},
 {img:'',nome:'Slave Labour',ano:2012,local:'Londres, Reino Unido',t:'rara',d:'Criança costurando bandeirinhas, ligada ao jubileu da rainha. Foi retirada da parede e levada a leilão.'},
 {img:'',nome:'Mobile Lovers',ano:2014,local:'Bristol, Reino Unido',t:'rara',d:'Casal abraçado, mas cada um olhando o próprio celular.'},
 {img:'',nome:'Love is in the Bin',ano:2018,local:'Sotheby’s, Londres',t:'famosa',d:'A moldura triturou a tela logo após a venda. Revendida em 2021 por cerca de 18,6 milhões de libras.'},
 {img:'',nome:'Game Changer',ano:2020,local:'Southampton, Reino Unido',t:'rara',d:'Criança brincando com um super-herói enfermeiro, doada a um hospital durante a pandemia.'},
 {img:'',nome:'Murais de Borodianka',ano:2022,local:'Ucrânia',t:'rara',d:'Obras pintadas em prédios destruídos pela guerra, como uma criança derrubando um adulto no judô.'}
];
const LINHA = [
 ['Anos 1990','Bristol: o começo','Ele aparece na cena de grafite de Bristol, cidade conhecida pela cultura de rua e pela música. Começa pintando à mão livre.',''],
 ['Fim dos 1990','A virada do stencil','O molde recortado deixa o trabalho mais rápido e anônimo, útil para quem pinta na ilegalidade.',''],
 ['Início dos 2000','Londres vira palco','Ratos, macacos e policiais surgem pelas ruas. A menina com o balão aparece em 2002.',''],
 ['2005','Muro na Cisjordânia','Pinta obras no muro de separação em Belém e Jerusalém e chama atenção global.',''],
 ['2005','Invade os museus','Pendura obras próprias, sem permissão, em museus de Londres e Nova York.',''],
 ['2010','Exit Through the Gift Shop','Seu filme é indicado ao Oscar de melhor documentário.',''],
 ['2013','Nova York, um mês','A residência “Better Out Than In” cria uma obra nova por dia pela cidade.',''],
 ['2015','Dismaland','Um parque de diversões sombrio em Weston-super-Mare, na Inglaterra, recebe milhares de visitantes.',''],
 ['2017','Walled Off Hotel','Abre um hotel em Belém, de frente para o muro, com quartos e obras suas.',''],
 ['2018','A tela se tritura','Girl with Balloon se destrói após ser vendida na Sotheby’s e ganha outro nome e outro valor.',''],
 ['2022','Ucrânia','Obras surgem em Kiev e arredores, e a guerra vira tema direto.','']
];
const CURIOS = [
 ['Ninguém sabe quem ele é','Teorias existem, mas nunca houve confirmação oficial dele.','O anonimato protege contra processos e aumenta o mistério.'],
 ['Ele já vendeu notas falsas','Notas de libra com o rosto de Diana, chamadas Di-Faced Tenner, foram distribuídas em um carnaval.','Era sátira, mas o formato imitava dinheiro de verdade.'],
 ['Quadros de graça nas ruas','Em 2013, uma banca em Nova York vendeu obras autênticas por 60 dólares.','Quase ninguém comprou. Três horas depois, só uma pessoa havia levado.'],
 ['Pest Control','Só um órgão de autenticação, criado por ele, certifica obras como verdadeiras.','Quem compra um “Banksy” precisa passar por ele.'],
 ['O caso da trituradora','Dizem que ele escondeu o mecanismo na moldura anos antes.','Depois da venda, a obra valeu ainda mais.'],
 ['Parque de diversões do mal','Dismaland tinha atrações como um castelo em ruínas e um carrossel de cavalos.','Foi desmontado, e a madeira virou abrigo para refugiados em Calais.']
];
const MEM = [['🎈','Girl with Balloon',''],['🐀','Rato',''],['💐','Flower Thrower',''],['👮','Kissing Coppers',''],['🐒','Macacos',''],['📱','Mobile Lovers',''],['🏨','Walled Off',''],['✂️','Love is in the Bin','']];
const QUIZ = [
 ['Banksy é de Bristol, na Inglaterra.',true,'Segundo a maioria dos relatos, sim, mas ele nunca confirmou.'],
 ['A identidade de Banksy foi oficialmente revelada.',false,'Nunca foi confirmada. Há apenas teorias.'],
 ['Girl with Balloon se destruiu após um leilão.',true,'Foi em 2018, na Sotheby’s.'],
 ['Banksy abriu um hotel em frente a um muro de separação.',true,'O Walled Off Hotel fica em Belém.'],
 ['Dismaland ficava em Paris.',false,'Ficava em Weston-super-Mare, na Inglaterra.']
];

/* ---------- Abas ---------- */
const tabs=[...document.querySelectorAll('.tab')], btns=[...document.querySelectorAll('[data-tab]')];
function go(id){
  if(!document.getElementById(id)) id='inicio';
  tabs.forEach(t=>t.classList.toggle('on',t.id===id));
  document.querySelectorAll('.side button').forEach(b=>b.classList.toggle('on',b.dataset.tab===id));
  history.replaceState(null,'','#'+id); scrollTo(0,0);
  if(id==='tempo') updTimeline();
  if(id==='jogos') fitWall();
}
btns.forEach(b=>b.addEventListener('click',e=>{e.preventDefault();go(b.dataset.tab)}));
addEventListener('hashchange',()=>go(location.hash.slice(1)));

/* ---------- Quadro que se tritura ---------- */
const SVG=<svg viewBox="0 0 200 260" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="260" fill="#ece9e1"/><path d="M135 85C100 62 100 30 122 30c8 0 13 6 13 12 0-6 5-12 13-12 22 0 22 32-13 55z" fill="#e4262f"/><path d="M135 85Q120 115 100 150" stroke="#111" stroke-width="2" fill="none"/><circle cx="80" cy="150" r="14" fill="#111"/><path d="M70 140q-8 10 0 22M92 142q8 6 4 18" stroke="#111" stroke-width="5" fill="none"/><path d="M85 172L100 150" stroke="#111" stroke-width="7" stroke-linecap="round"/><path d="M80 164L52 236h56z" fill="#111"/><path d="M68 236v14M92 236v14" stroke="#111" stroke-width="6"/><path d="M20 252h160" stroke="#111" stroke-width="3"/></svg>;
const frame=document.getElementById('frame');
for(let i=0;i<10;i++){
  const s=document.createElement('div'); s.className='strip'; s.style.left=i*10+'%';
  s.style.setProperty('--d',(38+Math.random()*22)+'%'); s.style.setProperty('--r',(Math.random()*8-4)+'deg');
  s.style.transitionDelay=(i*.07)+'s'; s.innerHTML=SVG;
  s.firstChild.style.left=-i*100+'%'; frame.appendChild(s);
}
let shredTimer;
function shred(){frame.classList.toggle('shred');clearTimeout(shredTimer);
  if(frame.classList.contains('shred')) shredTimer=setTimeout(()=>frame.classList.remove('shred'),5000);}
frame.addEventListener('click',shred);
frame.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();shred()}});

/* ---------- Spray no herói ---------- */
const cv=document.getElementById('spray'), cx=cv.getContext('2d');
function fit(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight}
fit(); addEventListener('resize',fit);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
  document.querySelector('.hero').addEventListener('mousemove',e=>{
    const r=cv.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    for(let i=0;i<10;i++){const a=Math.random()*6.28,d=Math.random()*18;
      cx.fillStyle=Math.random()<.8?'#e4262f':'#f1eee6';
      cx.fillRect(x+Math.cos(a)*d,y+Math.sin(a)*d,1+Math.random()*2.5,1+Math.random()*2.5)}
  });
  (function fade(){cx.globalCompositeOperation='destination-out';cx.fillStyle='rgba(0,0,0,.025)';
    cx.fillRect(0,0,cv.width,cv.height);cx.globalCompositeOperation='source-over';requestAnimationFrame(fade)})();
}

/* ---------- Cursor ---------- */
const cur=document.querySelector('.cursor');
addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
  cur.classList.toggle('big',!!e.target.closest('button,a,input,.frame,.opt'))});

/* ---------- Tabela ---------- */
let filtro='todas',ord={k:'ano',asc:true};
const tb=document.querySelector('#tabela tbody'),busca=document.getElementById('busca');
function tabela(){
  const q=busca.value.toLowerCase();
  const l=OBRAS.filter(o=>(filtro==='todas'||o.t===filtro)&&(o.nome+o.local+o.ano+o.d).toLowerCase().includes(q))
    .sort((a,b)=>(a[ord.k]>b[ord.k]?1:-1)*(ord.asc?1:-1));
  tb.innerHTML=l.map(o=><tr><td>${foto(o.img,o.nome)}</td><td>${o.nome}<span class="tag">${o.t==='famosa'?'famosa':'rara'}</span></td><td>${o.ano}</td><td>${o.local}</td><td>${o.d}</td></tr>).join('')||'<tr><td colspan="5">Nada encontrado. Tente outra palavra.</td></tr>';
}
busca.addEventListener('input',tabela);
document.querySelectorAll('[data-f]').forEach(c=>c.addEventListener('click',()=>{
  filtro=c.dataset.f;document.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('on',x===c));tabela()}));
document.querySelectorAll('th[data-k]').forEach(h=>h.addEventListener('click',()=>{
  ord={k:h.dataset.k,asc:ord.k===h.dataset.k?!ord.asc:true};tabela()}));
tabela();

/* ---------- Linha do tempo ---------- */
const tl=document.getElementById('timeline');
tl.innerHTML='<span class="fill"></span>'+LINHA.map(l=><li><div class="yr">${l[0]}</div><h3>${l[1]}</h3><p>${l[2]}</p>${foto(l[3],l[1])}</li>).join('');
function updTimeline(){
  const items=[...tl.querySelectorAll('li')],h=innerHeight*.75;let last=0;
  items.forEach(li=>{const seen=li.getBoundingClientRect().top<h;li.classList.toggle('seen',seen);if(seen)last=li.offsetTop+12});
  tl.querySelector('.fill').style.height=last+'px';
}
addEventListener('scroll',updTimeline);

/* ---------- Curiosidades ---------- */
document.getElementById('flips').innerHTML=CURIOS.map(c=><button class="flip"><div><span class="a">${c[0]}<small>toque para virar</small></span><span class="z">${c[1]}<br><br><b>${c[2]}</b></span></div></button>).join('');
document.querySelectorAll('.flip').forEach(f=>f.addEventListener('click',()=>f.classList.toggle('on')));

/* ---------- Jogo da memória ---------- */
const board=document.getElementById('board'),movesEl=document.getElementById('moves'),bestEl=document.getElementById('best'),winEl=document.getElementById('win');
let moves,open,matched;
const getBest=()=>{try{return localStorage.getItem('bk-best')}catch(e){return null}};
function showBest(){bestEl.textContent=getBest()||'–'}
function memoria(){
  moves=0;open=[];matched=0;movesEl.textContent=0;winEl.hidden=true;showBest();
  const deck=[...MEM,...MEM].map(v=>({v,r:Math.random()})).sort((a,b)=>a.r-b.r).map(o=>o.v);
  board.innerHTML=deck.map((c,i)=><button class="mc" data-n="${c[1]}" aria-label="Carta ${i+1}"><i><span class="b">?</span><span class="f">${c[2]?foto(c[2],c[1]):<b>${c[0]}</b>}${c[1]}</span></i></button>).join('');
  board.querySelectorAll('.mc').forEach(c=>c.addEventListener('click',()=>virar(c)));
}
function virar(c){
  if(open.length===2||c.classList.contains('flip'))return;
  c.classList.add('flip');open.push(c);
  if(open.length<2)return;
  movesEl.textContent=++moves;
  const [a,b]=open;
  if(a.dataset.n===b.dataset.n){
    a.classList.add('done');b.classList.add('done');open=[];
    if(++matched===MEM.length){winEl.hidden=false;const best=getBest();
      if(!best||moves<+best){try{localStorage.setItem('bk-best',moves)}catch(e){}showBest()}}
  }else setTimeout(()=>{a.classList.remove('flip');b.classList.remove('flip');open=[]},900);
}
document.getElementById('reset').addEventListener('click',memoria);
memoria();

/* ---------- Quiz ---------- */
const qz=document.getElementById('quiz');let qi=0,pts=0;
function pergunta(){
  if(qi>=QUIZ.length){qz.innerHTML=<p class="hand win">Você acertou ${pts} de ${QUIZ.length}.</p><button class="chip" id="again">Jogar de novo</button>;
    document.getElementById('again').onclick=()=>{qi=0;pts=0;pergunta()};return}
  const q=QUIZ[qi];
  qz.innerHTML=<p class="meta">Pergunta ${qi+1} de ${QUIZ.length}</p><p><b>${q[0]}</b></p><button class="opt" data-v="true">Verdade</button><button class="opt" data-v="false">Mito</button><p class="exp"></p>;
  qz.querySelectorAll('.opt').forEach(o=>o.addEventListener('click',()=>{
    const ok=(o.dataset.v==='true')===q[1];if(ok)pts++;
    qz.querySelectorAll('.opt').forEach(x=>{x.disabled=true;x.classList.add((x.dataset.v==='true')===q[1]?'ok':'no')});
    qz.querySelector('.exp').innerHTML=(ok?'Certo. ':'Errou. ')+q[2]+' <button class="chip" id="nx">Próxima</button>';
    document.getElementById('nx').onclick=()=>{qi++;pergunta()};
  }));
}
pergunta();

go(location.hash.slice(1)||'inicio');

/* ---------- Estrelas que se mexem ---------- */
const sc=document.getElementById('stars'),sx=sc.getContext('2d');let S=[];
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function initStars(){sc.width=innerWidth;sc.height=innerHeight;
  S=Array.from({length:Math.round(innerWidth*innerHeight/9000)},()=>({x:Math.random()sc.width,y:Math.random()*sc.height,r:Math.random()*1.6+.4,v:Math.random().25+.05,p:Math.random()*6.28,s:Math.random()*2+.8,red:Math.random()<.12}))}
let shoot=null;
function drawStars(t){
  sx.clearRect(0,0,sc.width,sc.height);
  S.forEach(s=>{
    if(!calm){s.y-=s.v;s.x-=s.v*.4;if(s.y<-5){s.y=sc.height+5;s.x=Math.random()*sc.width}if(s.x<-5)s.x=sc.width+5}
    const a=.35+.65*Math.abs(Math.sin(t/1000*s.s+s.p));
    sx.globalAlpha=a;sx.fillStyle=s.red?'#e4262f':'#f1eee6';
    sx.beginPath();sx.arc(s.x,s.y,s.r,0,6.28);sx.fill();
    if(s.r>1.6){sx.fillRect(s.x-s.r*3,s.y-.4,s.r*6,.8);sx.fillRect(s.x-.4,s.y-s.r*3,.8,s.r*6)}
  });
  if(!calm){
    if(!shoot&&Math.random()<.004)shoot={x:Math.random()*sc.width,y:0,l:0};
    if(shoot){const g=sx.createLinearGradient(shoot.x,shoot.y,shoot.x-90,shoot.y-45);
      g.addColorStop(0,'#fff');g.addColorStop(1,'transparent');sx.globalAlpha=1;sx.strokeStyle=g;sx.lineWidth=2;
      sx.beginPath();sx.moveTo(shoot.x,shoot.y);sx.lineTo(shoot.x-90,shoot.y-45);sx.stroke();
      shoot.x+=14;shoot.y+=7;if(shoot.y>sc.height)shoot=null}
    requestAnimationFrame(drawStars)}
}
initStars();addEventListener('resize',initStars);requestAnimationFrame(drawStars);

/* ---------- Muro de spray ---------- */
const wall=document.getElementById('wall'),wx=wall.getContext('2d');let cor='#e4262f',pintando=false;
function fitWall(){}
function pos(e){const r=wall.getBoundingClientRect();return[(e.clientX-r.left)*wall.width/r.width,(e.clientY-r.top)*wall.height/r.height]}
function spray(x,y){wx.fillStyle=cor;for(let i=0;i<22;i++){const a=Math.random()*6.28,d=Math.random()*Math.random()*22;wx.fillRect(x+Math.cos(a)*d,y+Math.sin(a)*d,2,2)}}
wall.addEventListener('pointerdown',e=>{pintando=true;wall.setPointerCapture(e.pointerId);spray(...pos(e))});
wall.addEventListener('pointermove',e=>{if(pintando)spray(...pos(e))});
['pointerup','pointercancel'].forEach(n=>wall.addEventListener(n,()=>pintando=false));
document.querySelectorAll('[data-c]').forEach(b=>b.addEventListener('click',()=>{cor=b.dataset.c;document.querySelectorAll('[data-c]').forEach(x=>x.classList.toggle('on',x===b))}));
document.getElementById('clear').addEventListener('click',()=>wx.clearRect(0,0,wall.width,wall.height));
document.getElementById('stamp').addEventListener('click',()=>{
  const x=80+Math.random()(wall.width-160),y=60+Math.random()(wall.height-160);
  wx.fillStyle='#e4262f';wx.beginPath();wx.moveTo(x,y+50);wx.bezierCurveTo(x-60,y,x-30,y-50,x,y-15);wx.bezierCurveTo(x+30,y-50,x+60,y,x,y+50);wx.fill();
  wx.strokeStyle='#f1eee6';wx.lineWidth=2;wx.beginPath();wx.moveTo(x,y+50);wx.quadraticCurveTo(x+14,y+90,x-6,y+120);wx.stroke()});
