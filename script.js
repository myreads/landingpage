const sealBtn = document.getElementById("sealBtn");
const envelope = document.getElementById("envelope");
const openingScreen = document.getElementById("openingScreen");
const mainSite = document.getElementById("mainSite");

sealBtn.addEventListener("click", () => {

  sealBtn.classList.add("hide");

  setTimeout(() => {
    envelope.classList.add("open");
  }, 500);

  setTimeout(() => {
    openingScreen.classList.add("hidden");
    mainSite.classList.add("show");

    document.body.style.overflowY = "auto";
  }, 2500);

});

/* =========================== */
/* SCROLL REVEAL */
/* =========================== */

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  reveals.forEach((el) => {

    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      el.classList.add("active");
    }

  });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================== */
/* COUNTDOWN */
/* =========================== */

const weddingDate = new Date("June 5, 2026 20:00:00").getTime();

const countdown = () => {

  const now = new Date().getTime();
  const gap = weddingDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;

};

setInterval(countdown, 1000);
countdown();

/* =========================== */
/* RSVP */
/* =========================== */

const form = document.querySelector(".rsvp-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you for your RSVP! ✨");

  form.reset();
});
