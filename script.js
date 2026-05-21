const sealBtn = document.getElementById('sealBtn');

const openingScreen =
document.getElementById('openingScreen');

const mainSite =
document.getElementById('mainSite');

const flap =
document.querySelector('.flap');

/* ENVELOPE OPEN */

sealBtn.addEventListener('click', () => {

    /* HIDE SEAL */

    sealBtn.style.opacity = "0";

    sealBtn.style.transform =
    "translate(-50%,-50%) scale(.2)";

    /* OPEN FLAP */

    setTimeout(() => {

        flap.style.transform =
        "rotateX(180deg)";

    }, 400);

    /* SHOW WEBSITE */

    setTimeout(() => {

        openingScreen.style.opacity = "0";

        openingScreen.style.visibility = "hidden";

        mainSite.classList.add('show');

    }, 2300);

});

/* COUNTDOWN */

const weddingDate =
new Date("June 05, 2026 20:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const gap = weddingDate - now;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const d = Math.floor(gap / day);

const h = Math.floor(
(gap % day) / hour
);

const m = Math.floor(
(gap % hour) / minute
);

const s = Math.floor(
(gap % minute) / second
);

document.getElementById("days").innerText = d;
document.getElementById("hours").innerText = h;
document.getElementById("minutes").innerText = m;
document.getElementById("seconds").innerText = s;

}

setInterval(updateCountdown,1000);

updateCountdown();

/* RSVP */

const rsvpForm =
document.querySelector('.rsvp-form');

rsvpForm.addEventListener('submit',(e)=>{

e.preventDefault();

alert(
'Thank you for your response. We look forward to celebrating with you.'
);

rsvpForm.reset();

});
