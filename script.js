const seal = document.getElementById("seal");
const openingScreen = document.getElementById("openingScreen");
const mainSite = document.getElementById("mainSite");

seal.addEventListener("click", () => {

  document.body.classList.add("open");

  setTimeout(() => {
    openingScreen.style.opacity = "0";
  }, 2500);

  setTimeout(() => {
    openingScreen.style.display = "none";
    mainSite.classList.add("main-visible");
  }, 4000);

});

/* COUNTDOWN */

const targetDate = new Date("June 5, 2026 20:00:00").getTime();

const countdown = setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);

/* REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add("active");
    }

  });

});
