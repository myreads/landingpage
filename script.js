const seal = document.getElementById("seal");
const opening = document.getElementById("opening");
const cinema = document.getElementById("cinema");

seal.addEventListener("click", () => {
  document.body.classList.add("opened");

  setTimeout(() => {
    opening.style.opacity = "0";
  }, 2800);

  setTimeout(() => {
    opening.style.display = "none";
    cinema.classList.add("show");
    reveal();
  }, 4400);
});

function createPetals(containerSelector, count) {
  const container = document.querySelector(containerSelector);

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 9 + Math.random() * 10 + "s";
    petal.style.animationDelay = Math.random() * 8 + "s";
    petal.style.transform = `scale(${0.65 + Math.random() * 0.7})`;
    container.appendChild(petal);
  }
}

createPetals(".opening-petals", 18);
createPetals(".main-petals", 34);

const targetDate = new Date("June 5, 2026 20:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  document.getElementById("days").innerText =
    Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));

  document.getElementById("hours").innerText =
    Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  document.getElementById("minutes").innerText =
    Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

  document.getElementById("seconds").innerText =
    Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));
}, 1000);

const revealItems = document.querySelectorAll(".reveal");

function reveal() {
  revealItems.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 90) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  reveal();

  const y = window.scrollY;

  document.querySelector(".stage-arch").style.transform =
    `translateX(-50%) translateY(${y * 0.035}px)`;

  document.querySelector(".top-garland").style.transform =
    `translateY(${y * 0.025}px)`;

  document.querySelector(".bottom-florals").style.transform =
    `translateY(${-y * 0.018}px)`;
});
