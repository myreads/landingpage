// script.js

// INTRO TRANSITION

setTimeout(() => {

  const intro = document.getElementById('intro');

  intro.style.opacity = '0';

  setTimeout(() => {

    intro.style.display = 'none';

    document
      .getElementById('envelopeScene')
      .classList
      .remove('hidden');

  }, 1200);

}, 4500);


// ENVELOPE OPEN

const sealBtn = document.getElementById('sealBtn');

sealBtn.addEventListener('click', () => {

  sealBtn.classList.add('hide');

  document
    .getElementById('envelope')
    .classList
    .add('open');

});


// COUNTDOWN

const weddingDate = new Date(
  "June 5, 2026 20:00:00"
).getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

}, 1000);


// SCRATCH CARD

const canvas = document.getElementById('scratchCanvas');

const ctx = canvas.getContext('2d');

function resizeCanvas(){

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.fillStyle = "#b98b86";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "#fff";

  ctx.font = "28px Cormorant Garamond";

  ctx.textAlign = "center";

  ctx.fillText(
    "Scratch To Reveal",
    canvas.width / 2,
    canvas.height / 2
  );

}

resizeCanvas();

let isDrawing = false;

function scratch(x,y){

  ctx.globalCompositeOperation =
    "destination-out";

  ctx.beginPath();

  ctx.arc(x,y,28,0,Math.PI*2);

  ctx.fill();

}

// DESKTOP

canvas.addEventListener('mousedown', () => {
  isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mousemove', (e) => {

  if(!isDrawing) return;

  const rect = canvas.getBoundingClientRect();

  scratch(
    e.clientX - rect.left,
    e.clientY - rect.top
  );

});

// MOBILE

canvas.addEventListener('touchmove', (e) => {

  e.preventDefault();

  const rect = canvas.getBoundingClientRect();

  const touch = e.touches[0];

  scratch(
    touch.clientX - rect.left,
    touch.clientY - rect.top
  );

});

window.addEventListener('resize', resizeCanvas);
