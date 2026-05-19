const sealBtn = document.getElementById('sealBtn');
const mainSite = document.getElementById('mainSite');

sealBtn.addEventListener('click', () => {

  sealBtn.classList.add('hide');

  setTimeout(() => {
    envelope.classList.add('open');
  }, 500);

  setTimeout(() => {
    openingScreen.classList.add('hide');
    mainSite.classList.add('show');
  }, 2400);

});

// REVEAL

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

  reveals.forEach((el) => {

    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 120){
      el.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// COUNTDOWN

const weddingDate = new Date('June 5, 2026 20:00:00').getTime();

function updateCountdown(){

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

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;

}

setInterval(updateCountdown,1000);
updateCountdown();
