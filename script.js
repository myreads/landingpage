const envelope = document.getElementById("envelope");
const openingScreen = document.getElementById("openingScreen");
const invitationPage = document.getElementById("invitationPage");

let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;

  opened = true;
  envelope.classList.add("open");

  setTimeout(() => {
    openingScreen.classList.add("hide");
    invitationPage.classList.add("show");
  }, 1100);
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * 18;

  document.querySelectorAll(".floral-frame").forEach((flower, index) => {
    const depth = (index + 1) * 0.35;
    flower.style.transform += ` translate(${x * depth}px, ${y * depth}px)`;
  });
});
