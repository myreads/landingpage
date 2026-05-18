const envelope = document.getElementById("envelope");
const openInvite = document.getElementById("openInvite");
const introScreen = document.getElementById("introScreen");
const siteContent = document.getElementById("siteContent");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const particles = document.getElementById("particles");

openInvite.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    introScreen.classList.add("hide");
  }, 1500);

  setTimeout(() => {
    introScreen.style.display = "none";
    siteContent.classList.add("show");
    window.scrollTo(0, 0);
    revealSections();
  }, 2300);
});

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.classList.add("playing");
    musicBtn.innerHTML = "♫";
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
    musicBtn.innerHTML = "♪";
  }
});

function createParticles() {
  for (let i = 0; i < 85; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = 8 + Math.random() * 12 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.opacity = Math.random();
    document.body.appendChild(p);
  }

  for (let i = 0; i < 24; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.innerHTML = "❦";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = 10 + Math.random() * 14 + "s";
    petal.style.animationDelay = Math.random() * 10 + "s";
    document.body.appendChild(petal);
  }
}

function countdownTimer() {
  const weddingDate = new Date("June 5, 2026 20:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    document.getElementById("days").innerText = Math.max(0, Math.floor(gap / day));
    document.getElementById("hours").innerText = Math.max(0, Math.floor((gap % day) / hour));
    document.getElementById("minutes").innerText = Math.max(0, Math.floor((gap % hour) / minute));
    document.getElementById("seconds").innerText = Math.max(0, Math.floor((gap % minute) / second));
  }, 1000);
}

function revealSections() {
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
}

document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you. Your RSVP has been received.");
  this.reset();
});

createParticles();
countdownTimer();
revealSections();
