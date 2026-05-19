// script.js

const waxSeal = document.getElementById("waxSeal");
const envelope = document.getElementById("envelope");
const invitation = document.getElementById("invitation");

waxSeal.addEventListener("click", () => {
  waxSeal.classList.add("hide");

  setTimeout(() => {
    envelope.classList.add("open");
  }, 350);

  setTimeout(() => {
    invitation.classList.add("show");

    window.scrollTo({
      top: window.innerHeight * 0.68,
      behavior: "smooth"
    });
  }, 1800);
});

// Countdown
const weddingDate = new Date("June 5, 2026 20:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.18
});

reveals.forEach(section => observer.observe(section));
