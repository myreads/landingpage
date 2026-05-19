// script.js

// Intro Transition

setTimeout(() => {

  document.getElementById('intro').style.opacity = '0';

  setTimeout(() => {

    document.getElementById('intro').style.display = 'none';

    document.getElementById('envelopeScene').classList.remove('hidden');

  }, 1200);

}, 5000);


// Envelope Open

setTimeout(() => {

  document.getElementById('envelope').classList.add('open');

}, 7000);


// Countdown

const weddingDate = new Date("June 5, 2026 20:00:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

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


// Scratch Card

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.fillStyle = "#d8c3ae";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "30px Cormorant Garamond";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(
    "Scratch To Reveal",
    canvas.width / 2,
    canvas.height / 2
  );
}

resizeCanvas();

let isDrawing = false;

function scratch(x, y) {

  ctx.globalCompositeOperation = "destination-out";

  ctx.beginPath();

  ctx.arc(x, y, 25, 0, Math.PI * 2);

  ctx.fill();
}

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mousemove", (e) => {

  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();

  scratch(
    e.clientX - rect.left,
    e.clientY - rect.top
  );
});

// Mobile Support

canvas.addEventListener("touchmove", (e) => {

  e.preventDefault();

  const rect = canvas.getBoundingClientRect();

  const touch = e.touches[0];

  scratch(
    touch.clientX - rect.left,
    touch.clientY - rect.top
  );

});

window.addEventListener("resize", resizeCanvas);
