const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const envelopeWrap = document.getElementById("envelopeWrap");
const invitationCard = document.getElementById("invitationCard");
const particles = document.getElementById("particles");

function createParticles() {
  for (let i = 0; i < 70; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = 8 + Math.random() * 10 + "s";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.opacity = Math.random();

    particles.appendChild(particle);
  }
}

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeWrap.classList.add("hide");
  }, 1200);

  setTimeout(() => {
    invitationCard.classList.add("show");
  }, 1800);
});

createParticles();
