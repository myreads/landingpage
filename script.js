const sealBtn = document.getElementById('sealBtn');

const openingScreen = document.getElementById('openingScreen');

const mainSite = document.getElementById('mainSite');

const flap = document.querySelector('.flap');

/* CLICK ENVELOPE */

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