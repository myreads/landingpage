const seal = document.getElementById("seal");
const openingScreen = document.getElementById("openingScreen");
const mainSite = document.getElementById("mainSite");

seal.addEventListener("click", () => {
  document.body.classList.add("open");

  setTimeout(() => {
    openingScreen.style.opacity = "0";
  }, 2700);

  setTimeout(() => {
    openingScreen.style.display = "none";
    mainSite.classList.add("main-visible");
    revealOnScroll();
  }, 4300);
});

/* COUNTDOWN */

const targetDate = new Date("June 5, 2026 20:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

/* REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight - 90){
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/* SUBTLE PARALLAX */

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  document.querySelector(".floral-arch").style.transform =
    `translateX(-50%) translateY(${y * 0.035}px)`;

  document.querySelector(".floral-top").style.transform =
    `translateY(${y * 0.025}px)`;

  document.querySelector(".floral-bottom").style.transform =
    `translateY(${-y * 0.018}px)`;
});
