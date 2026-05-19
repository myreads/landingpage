# index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Meerab & Mohsin</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&family=Montserrat:wght@300;400;500&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- OPENING SCREEN -->
  <section class="opening-screen" id="openingScreen">

    <div class="opening-bg"></div>

    <div class="top-botanical"></div>
    <div class="bottom-botanical"></div>

    <div class="envelope-wrapper">

      <div class="envelope-glow"></div>

      <div class="envelope" id="envelope">

        <div class="env-shadow"></div>

        <div class="envelope-top"></div>

        <div class="envelope-paper">

          <div class="paper-border"></div>

          <div class="paper-corner tl"></div>
          <div class="paper-corner tr"></div>
          <div class="paper-corner bl"></div>
          <div class="paper-corner br"></div>

          <div class="mini-floral"></div>

          <p class="invite-small">The Wedding Invitation</p>

          <h3 class="invite-main">
            Together <br> With Their Families
          </h3>

        </div>

        <button class="seal" id="sealBtn">
          <span>M & M</span>
        </button>

      </div>
    </div>
  </section>

  <!-- MAIN SITE -->
  <main class="main-site" id="mainSite">

    <div class="texture-overlay"></div>

    <div class="left-floral"></div>
    <div class="right-floral"></div>

    <div class="top-stage"></div>
    <div class="bottom-stage"></div>

    <section class="hero reveal">

      <div class="hero-frame"></div>

      <div class="arabic-block">
        <h1>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </h1>

        <p>
          In the name of Allah, the Most Gracious, the Most Merciful.
        </p>

        <p>
          May Allah bless this union with love, mercy, and barakah.
        </p>
      </div>

      <div class="couple-section">

        <p class="hosting-text">
          Mr. & Mrs. Nadeem Ahmad Khan <br>
          cordially invite you to celebrate <br>
          the wedding of their beloved daughter
        </p>

        <h2 class="bride-name">
          MEERAB NADEEM
        </h2>

        <div class="and">&</div>

        <h2 class="groom-name">
          MOHSIN AJMAL KHAN
        </h2>

      </div>

    </section>

    <section class="details-section reveal">

      <div class="details-card">

        <h3>Wedding Ceremony</h3>

        <div class="date-block">
          <span>Friday</span>
          <h2>5 June 2026</h2>
          <span>8:00 PM</span>
        </div>

        <div class="venue-block">
          <p class="venue-title">Venue</p>
          <h4>Bambeeno Marriage Hall</h4>

          <a href="https://maps.app.goo.gl/rPLesYyLEMn6mbzt9" target="_blank">
            View Location
          </a>
        </div>

      </div>

    </section>

    <section class="countdown-section reveal">

      <h2>Countdown To Forever</h2>

      <div class="countdown">

        <div class="count-box">
          <span id="days">00</span>
          <p>Days</p>
        </div>

        <div class="count-box">
          <span id="hours">00</span>
          <p>Hours</p>
        </div>

        <div class="count-box">
          <span id="minutes">00</span>
          <p>Minutes</p>
        </div>

        <div class="count-box">
          <span id="seconds">00</span>
          <p>Seconds</p>
        </div>

      </div>

    </section>

    <section class="ending reveal">
      <h2>
        Excited to join you in celebrating this special occasion!
      </h2>
    </section>

  </main>

<script src="script.js"></script>
</body>
</html>
```

---

# style.css

```css
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  overflow-x:hidden;
  background:#eef0e7;
  font-family:'Cormorant Garamond', serif;
  color:#56634f;
}

/* OPENING SCREEN */

.opening-screen{
  position:fixed;
  inset:0;
  z-index:999;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:1.8s ease;
  background:
  linear-gradient(rgba(255,255,255,.45),rgba(255,255,255,.45)),
  url('https://i.pinimg.com/736x/7f/5a/4a/7f5a4aeeb1f787c0ac0808fc88e26277.jpg');
  background-size:cover;
  background-position:center;
}

.opening-screen.hide{
  opacity:0;
  visibility:hidden;
}

.opening-bg{
  position:absolute;
  inset:0;
  backdrop-filter:blur(1px);
}

.top-botanical,
.bottom-botanical{
  position:absolute;
  left:0;
  width:100%;
  height:220px;
  opacity:.9;
  pointer-events:none;
}

.top-botanical{
  top:0;
  background:
  linear-gradient(to bottom,rgba(162,177,148,.55),transparent);
}

.bottom-botanical{
  bottom:0;
  background:
  linear-gradient(to top,rgba(162,177,148,.45),transparent);
}

.envelope-wrapper{
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}

.envelope-glow{
  position:absolute;
  width:430px;
  height:430px;
  border-radius:50%;
  background:rgba(255,255,255,.45);
  filter:blur(50px);
}

.envelope{
  position:relative;
  width:340px;
  height:240px;
  background:linear-gradient(145deg,#d9ddcf,#c8cfbb);
  border-radius:10px;
  overflow:hidden;
  box-shadow:0 30px 60px rgba(0,0,0,.15);
}

.env-shadow{
  position:absolute;
  inset:0;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.35);
}

.envelope-top{
  position:absolute;
  width:100%;
  height:100%;
  clip-path:polygon(0 0,100% 0,50% 58%);
  background:linear-gradient(145deg,#edf1e6,#cdd4c0);
  transform-origin:top;
  transition:2s ease;
  z-index:3;
}

.envelope.open .envelope-top{
  transform:rotateX(180deg);
}

.envelope-paper{
  position:absolute;
  inset:15px;
  background:#f7f5ef;
  border-radius:6px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:25px;
}

.paper-border{
  position:absolute;
  inset:12px;
  border:1px solid rgba(122,133,107,.3);
}

.paper-corner{
  position:absolute;
  width:24px;
  height:24px;
  border-color:#a7af97;
}

.tl{
  top:16px;
  left:16px;
  border-top:1px solid;
  border-left:1px solid;
}

.tr{
  top:16px;
  right:16px;
  border-top:1px solid;
  border-right:1px solid;
}

.bl{
  bottom:16px;
  left:16px;
  border-bottom:1px solid;
  border-left:1px solid;
}

.br{
  bottom:16px;
  right:16px;
  border-bottom:1px solid;
  border-right:1px solid;
}

.mini-floral{
  width:90px;
  height:90px;
  border-radius:50%;
  border:1px solid rgba(122,133,107,.18);
  position:absolute;
  top:18px;
}

.invite-small{
  font-family:'Cinzel', serif;
  letter-spacing:4px;
  font-size:13px;
  color:#7a856b;
}

.invite-main{
  margin-top:20px;
  font-size:2rem;
  line-height:1.3;
  font-weight:500;
  color:#66735f;
}

.seal{
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width:90px;
  height:90px;
  border:none;
  border-radius:50%;
  background:linear-gradient(145deg,#8a977c,#68735e);
  color:#fff;
  z-index:10;
  cursor:pointer;
  box-shadow:0 10px 20px rgba(0,0,0,.2);
  transition:1s ease;
}

.seal.hide{
  opacity:0;
  transform:translate(-50%,-50%) scale(.2);
}

.seal span{
  font-family:'Cinzel', serif;
  letter-spacing:2px;
}

/* MAIN SITE */

.main-site{
  min-height:100vh;
  opacity:0;
  visibility:hidden;
  transition:1.5s ease;
  position:relative;
  overflow:hidden;
  background:
  linear-gradient(rgba(247,245,239,.92),rgba(247,245,239,.92)),
  url('https://i.pinimg.com/736x/7f/5a/4a/7f5a4aeeb1f787c0ac0808fc88e26277.jpg');
  background-size:cover;
  background-position:center;
}

.main-site.show{
  opacity:1;
  visibility:visible;
}

.texture-overlay{
  position:fixed;
  inset:0;
  pointer-events:none;
  background:
  radial-gradient(circle at top,rgba(255,255,255,.45),transparent 30%),
  radial-gradient(circle at bottom,rgba(185,194,174,.3),transparent 30%);
}

.left-floral,
.right-floral{
  position:fixed;
  top:0;
  width:180px;
  height:100vh;
  pointer-events:none;
  opacity:.25;
}

.left-floral{
  left:0;
  background:linear-gradient(to right,#bcc6af,transparent);
}

.right-floral{
  right:0;
  background:linear-gradient(to left,#bcc6af,transparent);
}

.top-stage,
.bottom-stage{
  position:absolute;
  left:0;
  width:100%;
  height:260px;
  pointer-events:none;
}

.top-stage{
  top:0;
  background:linear-gradient(to bottom,rgba(179,188,169,.45),transparent);
}

.bottom-stage{
  bottom:0;
  background:linear-gradient(to top,rgba(179,188,169,.4),transparent);
}

.hero,
.details-section,
.countdown-section,
.ending{
  position:relative;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding:120px 24px;
  text-align:center;
}

.hero-frame{
  position:absolute;
  inset:30px;
  border:1px solid rgba(122,133,107,.18);
}

.hero-frame::before{
  content:'';
  position:absolute;
  inset:15px;
  border:1px solid rgba(122,133,107,.12);
}

.arabic-block h1{
  font-size:clamp(2rem,5vw,4rem);
  color:#66735f;
  line-height:1.8;
}

.arabic-block p{
  margin-top:12px;
  font-size:1.1rem;
  color:#7d8771;
}

.couple-section{
  margin-top:70px;
}

.hosting-text{
  line-height:1.8;
  color:#6c7561;
  font-size:1.3rem;
}

.bride-name,
.groom-name{
  font-family:'Cinzel', serif;
  font-size:clamp(2.5rem,8vw,5rem);
  letter-spacing:4px;
  margin-top:35px;
  color:#56634f;
}

.and{
  font-family:'Great Vibes', cursive;
  font-size:4rem;
  color:#8a977c;
  margin-top:10px;
}

.details-card{
  width:min(92%,620px);
  padding:60px 30px;
  background:rgba(255,255,255,.45);
  border:1px solid rgba(122,133,107,.15);
  backdrop-filter:blur(8px);
}

.details-card h3{
  font-family:'Great Vibes', cursive;
  font-size:3rem;
  color:#5d6855;
}

.date-block{
  margin-top:40px;
}

.date-block span{
  display:block;
  font-size:1.5rem;
  margin-top:12px;
}

.date-block h2{
  margin-top:20px;
  font-family:'Cinzel', serif;
  font-size:3rem;
}

.venue-block{
  margin-top:45px;
}

.venue-title{
  letter-spacing:3px;
  text-transform:uppercase;
}

.venue-block h4{
  margin-top:10px;
  font-size:2rem;
}

.venue-block a{
  display:inline-block;
  margin-top:28px;
  padding:15px 32px;
  text-decoration:none;
  color:#fff;
  background:#7c8871;
  border-radius:40px;
}

.countdown-section h2{
  font-size:3rem;
  color:#5e6857;
}

.countdown{
  margin-top:50px;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:20px;
  width:100%;
  max-width:700px;
}

.count-box{
  padding:35px 20px;
  background:rgba(255,255,255,.45);
  border:1px solid rgba(122,133,107,.15);
}

.count-box span{
  font-size:3rem;
  font-family:'Cinzel', serif;
}

.count-box p{
  margin-top:10px;
  letter-spacing:2px;
}

.ending h2{
  max-width:850px;
  font-family:'Great Vibes', cursive;
  font-size:4rem;
  color:#617059;
  line-height:1.5;
}

.reveal{
  opacity:0;
  transform:translateY(80px);
  transition:1.4s ease;
}

.reveal.active{
  opacity:1;
  transform:translateY(0);
}

@media(min-width:768px){

  .countdown{
    grid-template-columns:repeat(4,1fr);
  }

}

@media(max-width:500px){

  .envelope{
    width:90%;
    height:220px;
  }

  .invite-main{
    font-size:1.7rem;
  }

  .ending h2{
    font-size:3rem;
  }

}
```

---

# script.js

```javascript
const sealBtn = document.getElementById('sealBtn');
const envelope = document.getElementById('envelope');
const openingScreen = document.getElementById('openingScreen');
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
```
