const openBtn = document.getElementById("openInvitation");
const openingScreen = document.getElementById("openingScreen");
const mainSite = document.getElementById("mainSite");
const envelope = document.querySelector(".envelope");

openBtn.addEventListener("click", () => {

  envelope.classList.add("open");

  setTimeout(() => {
    openingScreen.classList.add("hide");
    mainSite.classList.add("active");
    document.body.style.overflowY = "auto";
  }, 1800);

});

/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((el) => {

    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* COUNTDOWN */

const targetDate = new Date("June 5, 2026 20:00:00").getTime();

const countdown = () => {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

};

setInterval(countdown, 1000);
countdown();

/* RSVP */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you for your RSVP!");

  form.reset();

});
