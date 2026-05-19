const seal = document.getElementById("seal");
const envelopeWrapper = document.getElementById("envelopeWrapper");
const openingScreen = document.getElementById("openingScreen");
const mainSite = document.getElementById("mainSite");

seal.addEventListener("click", () => {

  seal.classList.add("hide");

  envelopeWrapper.querySelector(".envelope").classList.add("open");

  setTimeout(() => {

    openingScreen.classList.add("hide");

    mainSite.classList.add("show");

    document.body.style.overflowY = "auto";

  }, 2500);

});


/* COUNTDOWN */

const targetDate = new Date("June 5, 2026 20:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

}, 1000);


/* PARALLAX */

document.addEventListener("mousemove", e => {

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelectorAll(".big-floral").forEach((el, i) => {

    const depth = (i + 1) * 0.2;

    el.style.transform =
      `translate(${x * depth}px, ${y * depth}px)`;

  });

});
