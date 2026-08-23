const cursor=document.querySelector('.cursor-dot');
if(cursor){document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'})}
document.getElementById('year').textContent=new Date().getFullYear();
const moodBars=document.getElementById('moodBars');
const moodButton=document.getElementById('moodButton');
const moods=[['80% chaotic',[80,55,90,65,72,95,50]],['65% sleepy',[45,70,35,60,50,40,68]],['100% iconic',[95,88,100,92,85,97,90]],['42% productive',[35,55,42,30,60,25,48]]];
let moodIndex=0;
function renderMood(){const m=moods[moodIndex];moodBars.innerHTML='';m[1].forEach(h=>{const s=document.createElement('span');s.style.height=h+'%';moodBars.appendChild(s)});document.querySelector('.mood-card p').textContent=m[0]}
renderMood();moodButton.addEventListener('click',()=>{moodIndex=(moodIndex+1)%moods.length;renderMood()});
const compliments=['you have elite main-character energy ♡','honestly? you are doing better than you think.','your vibe is dangerously good today.','10/10 would put you in my scrapbook.','you make chaos look cute.'];
document.getElementById('compliment').addEventListener('click',()=>{document.getElementById('chaosMessage').textContent=compliments[Math.floor(Math.random()*compliments.length)]});
function burst(){for(let i=0;i<45;i++){const c=document.createElement('span');c.className='confetti confetti-piece';c.style.left='50%';c.style.top='55%';c.style.background=['#e7193f','#ffb6cf','#ffe45e','#cfeef4','#d9f2df'][Math.floor(Math.random()*5)];document.body.appendChild(c);const a=Math.random()*Math.PI*2,v=80+Math.random()*260,dx=Math.cos(a)*v,dy=Math.sin(a)*v;const anim=c.animate([{transform:'translate(-50%,-50%) rotate(0)',opacity:1},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:900+Math.random()*700,easing:'cubic-bezier(.2,.8,.2,1)'});anim.onfinish=()=>c.remove()}}
document.getElementById('confetti').addEventListener('click',()=>{burst();document.getElementById('chaosMessage').textContent='CHAOS DEPLOYED. no refunds.'});
document.getElementById('secretButton').addEventListener('click',()=>{document.getElementById('chaosMessage').textContent='🚨 suspicious button successfully pressed. you are now legally cool.';burst()});
document.getElementById('exploreBtn').addEventListener('click',()=>{document.getElementById('chaosMessage').textContent='you found the chaos. congratulations. ♡';document.getElementById('mayhem').scrollIntoView({behavior:'smooth'})});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.querySelectorAll('.nav nav a').forEach(x=>x.classList.remove('active'))));
