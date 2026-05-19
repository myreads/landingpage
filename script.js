// script.js

const sealBtn =
document.getElementById('sealBtn');

const envelope =
document.getElementById('envelope');

const invitationPage =
document.getElementById('invitationPage');


// OPEN ENVELOPE

sealBtn.addEventListener('click', () => {

  // HIDE STAMP

  sealBtn.classList.add('hide');

  // OPEN ENVELOPE

  setTimeout(() => {

    envelope.classList.add('open');

  }, 300);

  // SHOW FULL PAGE

  setTimeout(() => {

    invitationPage.classList.add('show');

    // SCROLL DOWN SMOOTHLY

    window.scrollTo({

      top:window.innerHeight * 0.65,

      behavior:'smooth'

    });

  }, 1800);

});


// COUNTDOWN TIMER

const weddingDate =
new Date(
"June 5, 2026 20:00:00"
).getTime();

setInterval(() => {

  const now =
  new Date().getTime();

  const distance =
  weddingDate - now;

  const days =
  Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
  );

  const hours =
  Math.floor(
    (distance %
    (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes =
  Math.floor(
    (distance %
    (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds =
  Math.floor(
    (distance %
    (1000 * 60)) /
    1000
  );

  document.getElementById('days')
    .innerHTML = days;

  document.getElementById('hours')
    .innerHTML = hours;

  document.getElementById('minutes')
    .innerHTML = minutes;

  document.getElementById('seconds')
    .innerHTML = seconds;

},1000);
