(()=>{const $=s=>document.querySelector(s),root=document.documentElement;
let saved;try{saved=localStorage.getItem('as-theme')}catch(e){};root.dataset.theme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
$('#theme').onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('as-theme',root.dataset.theme)}catch(e){}};
const h=$('#heroword');let hi=0;['Arjun','Sans.'].forEach(w=>{const W=document.createElement('span');W.className='w';W.setAttribute('aria-hidden','true');w.split('').forEach(c=>{const s=document.createElement('span');s.className='l'+(c==='.'?' dot':'');s.textContent=c;s.style.animationDelay=(hi++*70)+'ms';W.appendChild(s)});h.appendChild(W);h.append(' ')});
const tt=$('#tt'),wr=$('#wr'),sr=$('#sr'),btns=[...document.querySelectorAll('#wbtns button')];
const snap=v=>v<350?300:v<550?400:700;
function setW(v){wr.value=v;$('#wo').textContent=v;const s=snap(+v);tt.style.fontWeight=s;btns.forEach(b=>b.classList.toggle('on',+b.dataset.w===s))}
wr.oninput=()=>setW(wr.value);btns.forEach(b=>b.onclick=()=>setW(b.dataset.w));
sr.oninput=()=>{tt.style.fontSize=sr.value+'px';$('#so').textContent=sr.value+'px'};
if(innerWidth<760){sr.value=48;sr.oninput()}
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#%&\'()*+,-./:;=?@';
const names={'!':'Exclamation','"':'Quote','#':'Number sign','%':'Percent','&':'Ampersand',"'":'Apostrophe','(':'Left paren',')':'Right paren','*':'Asterisk','+':'Plus',',':'Comma','-':'Hyphen','.':'Period','/':'Slash',':':'Colon',';':'Semicolon','=':'Equals','?':'Question','@':'At sign'};
const nm=c=>names[c]||(/[A-Z]/.test(c)?'Uppercase '+c:/[a-z]/.test(c)?'Lowercase '+c:'Digit '+c);
const g=$('#ggrid');let cur;
function show(c,el){$('#gbig').textContent=c;$('#gch').textContent=c;$('#guni').textContent='U+'+c.charCodeAt(0).toString(16).toUpperCase().padStart(4,'0');$('#gname').textContent=nm(c);cur&&cur.classList.remove('on');cur=el;el.classList.add('on')}
[...chars].forEach((c,i)=>{const d=document.createElement('div');d.textContent=c;d.onmouseenter=d.onclick=()=>show(c,d);g.appendChild(d);if(!i)show(c,d)});
let wi=0;setInterval(()=>{wi=(wi+1)%3;$('#gbig').style.fontWeight=[400,700,300][wi]},1800);
const k=$('#kin');'Shape moves meaning'.split(' ').forEach(w=>{const W=document.createElement('div');W.className='w';w.split('').forEach(c=>{const s=document.createElement('span');s.textContent=c;W.appendChild(s)});k.appendChild(W)});
const sp=[...k.querySelectorAll('span')];let mx=-9999,my=-9999,raf;
function frame(){sp.forEach(s=>{const r=s.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=cx-mx,dy=cy-my,d=Math.hypot(dx,dy),f=Math.max(0,1-d/260);
s.style.transform=`translate(${dx/(d||1)*f*28}px,${dy/(d||1)*f*28}px) rotate(${dx/(d||1)*f*14}deg) scale(${1+f*.35})`;s.style.fontWeight=f>.55?700:f>.2?400:300;s.style.color=f>.55?'var(--acc)':''});raf=0}
const mv=e=>{const p=e.touches?e.touches[0]:e;mx=p.clientX;my=p.clientY;raf||(raf=requestAnimationFrame(frame))};
k.addEventListener('pointermove',mv);k.addEventListener('touchmove',mv,{passive:true});k.addEventListener('pointerleave',()=>{mx=my=-9999;frame()});
})();
