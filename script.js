const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

const moodBars=document.getElementById('moodBars');
const moodButton=document.getElementById('moodButton');
const moods=[['80% chaotic',[80,55,90,65,72,95,50]],['65% sleepy',[45,70,35,60,50,40,68]],['100% iconic',[95,88,100,92,85,97,90]],['42% productive',[35,55,42,30,60,25,48]]];
let moodIndex=0;
function renderMood(){
  if(!moodBars)return;
  const m=moods[moodIndex]; moodBars.innerHTML='';
  m[1].forEach(h=>{const s=document.createElement('span');s.style.height=h+'%';moodBars.appendChild(s)});
  const p=document.querySelector('.mood-card p'); if(p)p.textContent=m[0];
}
renderMood();
if(moodButton)moodButton.addEventListener('click',()=>{moodIndex=(moodIndex+1)%moods.length;renderMood()});

const compliments=['you have elite main-character energy ♡','honestly? you are doing better than you think.','your vibe is dangerously good today.','10/10 would put you in my scrapbook.','you make chaos look cute.'];
const compliment=document.getElementById('compliment');
if(compliment)compliment.addEventListener('click',()=>{document.getElementById('chaosMessage').textContent=compliments[Math.floor(Math.random()*compliments.length)]});

function burst(){
  for(let i=0;i<42;i++){
    const c=document.createElement('span'); c.className='confetti';
    c.style.position='fixed';c.style.width='9px';c.style.height='13px';c.style.border='1px solid #24151d';c.style.left='50%';c.style.top='55%';c.style.background=['#d51f46','#ffd9e3','#fff0a8','#dff2f7','#e4f2df'][Math.floor(Math.random()*5)];
    document.body.appendChild(c);
    const a=Math.random()*Math.PI*2,v=80+Math.random()*260,dx=Math.cos(a)*v,dy=Math.sin(a)*v;
    const anim=c.animate([{transform:'translate(-50%,-50%) rotate(0)',opacity:1},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:900+Math.random()*700,easing:'cubic-bezier(.2,.8,.2,1)'});
    anim.onfinish=()=>c.remove();
  }
}
const confetti=document.getElementById('confetti');
if(confetti)confetti.addEventListener('click',()=>{burst();document.getElementById('chaosMessage').textContent='CHAOS DEPLOYED. no refunds.'});
const secret=document.getElementById('secretButton');
if(secret)secret.addEventListener('click',()=>{document.getElementById('chaosMessage').textContent='☆ suspicious button successfully pressed. you are now legally cool.';burst()});

document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.querySelectorAll('.nav nav a').forEach(x=>x.classList.remove('active'))));
<script>
/* ========================================
   ⭐ STAR CATCHER GAME
   ======================================== */

const starGameButton = document.getElementById("star-game-button");
const starGameModal = document.getElementById("star-game-modal");
const starGameClose = document.getElementById("star-game-close");

const startScreen = document.getElementById("star-game-start");
const playingScreen = document.getElementById("star-game-playing");
const endScreen = document.getElementById("star-game-end");

const startButton = document.getElementById("star-start-button");
const replayButton = document.getElementById("star-replay-button");

const gameArea = document.getElementById("star-game-area");

const scoreDisplay = document.getElementById("star-score");
const timeDisplay = document.getElementById("star-time");

const finalScore = document.getElementById("final-star-score");
const gameMessage = document.getElementById("star-game-message");


let score = 0;
let timeLeft = 15;
let timer;
let starTimeout;


/* OPEN GAME */

starGameButton.addEventListener("click", () => {

  starGameModal.classList.add("show");

  showStartScreen();

});


/* CLOSE GAME */

starGameClose.addEventListener("click", () => {

  starGameModal.classList.remove("show");

  stopGame();

});


/* CLICK OUTSIDE GAME */

starGameModal.addEventListener("click", (event) => {

  if (event.target === starGameModal) {

    starGameModal.classList.remove("show");

    stopGame();

  }

});


/* START */

startButton.addEventListener("click", startGame);

replayButton.addEventListener("click", startGame);


function startGame() {

  score = 0;
  timeLeft = 15;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  startScreen.style.display = "none";
  endScreen.style.display = "none";
  playingScreen.style.display = "block";

  gameArea.innerHTML = "";

  clearInterval(timer);
  clearTimeout(starTimeout);

  spawnStar();

  timer = setInterval(() => {

    timeLeft--;

    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {

      endGame();

    }

  }, 1000);

}


/* CREATE STAR */

function spawnStar() {

  if (timeLeft <= 0) return;


  const star = document.createElement("button");

  star.className = "catch-star";

  star.innerHTML = "☆";

  star.setAttribute("aria-label", "Catch the star");


  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;


  const x = Math.random() * (areaWidth - 45);
  const y = Math.random() * (areaHeight - 45);


  star.style.left = `${Math.max(5, x)}px`;
  star.style.top = `${Math.max(5, y)}px`;


  star.addEventListener("click", () => {

    score++;

    scoreDisplay.textContent = score;

    star.remove();

    spawnStar();

  });


  gameArea.appendChild(star);


  /* If you don't click it quickly,
     move it somewhere else. */

  starTimeout = setTimeout(() => {

    if (star.parentNode) {

      star.remove();

      spawnStar();

    }

  }, 900);

}


/* END GAME */

function endGame() {

  clearInterval(timer);
  clearTimeout(starTimeout);

  gameArea.innerHTML = "";

  playingScreen.style.display = "none";
  endScreen.style.display = "block";

  finalScore.textContent = score;


  if (score <= 5) {

    gameMessage.textContent =
      "okay... we might need to work on that. ♡";

  } else if (score <= 10) {

    gameMessage.textContent =
      "not bad. not bad at all. ☆";

  } else if (score <= 15) {

    gameMessage.textContent =
      "okayyy look at you go. ✦";

  } else {

    gameMessage.textContent =
      "EXCUSE ME??? professional star catcher. ⭐";

  }

}


/* STOP GAME */

function stopGame() {

  clearInterval(timer);
  clearTimeout(starTimeout);

  gameArea.innerHTML = "";

}


/* SHOW START SCREEN */

function showStartScreen() {

  startScreen.style.display = "block";

  playingScreen.style.display = "none";

  endScreen.style.display = "none";

}

</script>
