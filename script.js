const openBtn = document.getElementById('openBtn');

const openingScreen = document.getElementById('openingScreen');

const mainSite = document.getElementById('mainSite');

const flap = document.querySelector('.flap');

openBtn.addEventListener('click',()=>{

openBtn.style.opacity = "0";

setTimeout(()=>{

flap.style.transform = "rotateX(180deg)";

},400);

setTimeout(()=>{

openingScreen.style.opacity = "0";

mainSite.classList.add('show');

},2200);

});
