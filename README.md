<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>For Claris ❤️</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div id="stars"></div>
  <div id="fireworks"></div>
  <div id="confetti"></div>

  <!-- OPENING -->
  <section id="intro" class="intro">

    <div class="intro-glow"></div>

    <div class="heart">❤️</div>

    <p class="small-intro">
      I made something special for you...
    </p>

    <h1>CLARIS</h1>

    <p class="intro-text">
      Tonight is all about you. ✨
    </p>

    <button id="beginButton">
      ✨ TAP TO BEGIN ✨
    </button>

  </section>


  <!-- COUNTDOWN -->
  <main id="countdownScene" class="scene hidden">

    <div id="countdown">1</div>

  </main>


  <!-- BIRTHDAY -->
  <section id="birthday" class="birthday hidden">

    <div class="age">
      <span>2</span>
      <span>3</span>
    </div>

    <div class="age-subtitle">
      YEARS OF BEING BEAUTIFUL ✨
    </div>

    <h1>HAPPY BIRTHDAY</h1>

    <h2>CLARIS ❤️</h2>


    <!-- CAKE -->
    <div class="cake">

      <div id="candles" class="candle-row"></div>

      <div class="cake-top"></div>

      <div class="cake-body">

        <div class="icing"></div>

        <div class="cake-line"></div>

        <div class="cake-line second"></div>

      </div>

      <div class="plate"></div>

    </div>


    <!-- WISH -->
    <div id="wish" class="wish hidden">

      <h3>Make a wish, Claris... ✨</h3>

      <button id="wishButton">
        🕯️ Make My Wish
      </button>

    </div>


    <!-- MESSAGE -->
    <div id="message" class="message hidden">

      <p>
        Today isn't just about celebrating another year
        of your life; it's about celebrating the beautiful
        person you are.
      </p>

      <p>
        I'm grateful for every moment, every laugh,
        every memory, and every little thing that makes
        you <strong>you</strong>.
      </p>

      <p class="love">
        I love you, Claris. ❤️
      </p>

      <p>
        And I hope 23 brings you the happiness, peace,
        success and beautiful moments you deserve.
      </p>

      <p class="final-line">
        Here's to you, my love. ❤️✨
      </p>

      <div class="beautiful">
        23 looks beautiful on you, Claris. ❤️
      </div>

    </div>

  </section>


  <audio id="birthdayMusic" loop>
    <source src="birthday.mp3" type="audio/mpeg">
  </audio>


  <script src="script.js"></script>

</body>
</html>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at center, #30104d 0%, #10051f 45%, #020208 100%);
  color: white;
}


/* =========================
   BACKGROUND
========================= */

#stars {
  position: fixed;
  inset: 0;
  pointer-events: none;

  background-image:
    radial-gradient(circle, white 1px, transparent 1px),
    radial-gradient(circle, rgba(255,255,255,.7) 1px, transparent 1px);

  background-size: 90px 90px, 150px 150px;
  background-position: 20px 30px, 70px 100px;

  opacity: .7;

  animation: stars 12s linear infinite;
}

@keyframes stars {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(90px);
  }
}


/* =========================
   INTRO
========================= */

.intro {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  position: relative;
  z-index: 5;
}

.intro-glow {
  position: absolute;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  background: #ff1493;

  filter: blur(120px);

  opacity: .25;
}

.heart {
  font-size: 70px;

  animation:
    heartbeat 1.5s infinite;
}

.small-intro {
  margin-top: 20px;

  font-size: 16px;

  letter-spacing: 3px;

  color: #ffd166;
}

.intro h1 {
  margin-top: 10px;

  font-size:
    clamp(60px, 15vw, 150px);

  letter-spacing: 10px;

  background:
    linear-gradient(
      90deg,
      #fff,
      #ff7eb3,
      #ffd166,
      #fff
    );

  background-size: 300%;

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  animation: shine 3s linear infinite;
}

.intro-text {
  margin-top: 15px;

  font-size: 20px;

  color: #eee;
}

button {
  border: none;

  border-radius: 50px;

  padding: 15px 30px;

  margin-top: 30px;

  background:
    linear-gradient(
      135deg,
      #ff4d9d,
      #7b2cff
    );

  color: white;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  box-shadow:
    0 0 25px rgba(255,77,157,.7);

  transition: .3s;
}

button:hover {
  transform: scale(1.08);

  box-shadow:
    0 0 40px rgba(255,77,157,1);
}


/* =========================
   SCENE
========================= */

.scene {
  width: 100%;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  position: relative;

  z-index: 5;
}

.hidden {
  display: none !important;
}


/* =========================
   COUNTDOWN
========================= */

#countdown {
  font-size:
    clamp(120px, 30vw, 320px);

  font-weight: 1000;

  text-shadow:
    0 0 15px white,
    0 0 35px #ff4d9d,
    0 0 70px #8a2be2,
    0 0 130px #7b2cff;

  animation:
    numberIn .8s ease;
}

@keyframes numberIn {

  0% {
    opacity: 0;

    transform:
      scale(2.5)
      rotateX(70deg)
      rotateY(40deg);
  }

  60% {
    opacity: 1;

    transform:
      scale(.9)
      rotateX(-10deg)
      rotateY(-10deg);
  }

  100% {
    opacity: 1;

    transform:
      scale(1)
      rotateX(0)
      rotateY(0);
  }
}


/* =========================
   BIRTHDAY
========================= */

.birthday {
  width: 100%;
  height: 100vh;

  position: relative;

  z-index: 5;

  overflow-y: auto;

  text-align: center;

  padding: 25px 15px 50px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  animation:
    birthdayReveal 2s ease;
}

@keyframes birthdayReveal {

  from {
    opacity: 0;
    transform: scale(.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}


/* =========================
   23
========================= */

.age {
  display: flex;

  gap: 5px;

  font-size:
    clamp(130px, 30vw, 330px);

  font-weight: 1000;

  line-height: .75;

  perspective: 900px;
}

.age span {
  display: inline-block;

  background:
    linear-gradient(
      145deg,
      #fff,
      #ffe66d 25%,
      #ff9d00 50%,
      #ff3d81 75%,
      #7a00ff
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  text-shadow:
    8px 8px 0 rgba(60,0,90,.7),
    15px 15px 25px rgba(0,0,0,.8),
    0 0 40px #ffcc00;

  animation:
    floating 3s ease-in-out infinite alternate;
}

.age span:nth-child(2) {
  animation-delay: .3s;
}

@keyframes floating {

  from {
    transform:
      rotateX(8deg)
      rotateY(-8deg)
      translateY(0);
  }

  to {
    transform:
      rotateX(-8deg)
      rotateY(8deg)
      translateY(-15px);
  }
}

.age-subtitle {
  color: #ffd166;

  letter-spacing: 4px;

  font-size: 15px;

  margin-bottom: 15px;
}


/* =========================
   TITLES
========================= */

.birthday h1 {
  font-size:
    clamp(30px, 7vw, 75px);

  letter-spacing: 6px;

  background:
    linear-gradient(
      90deg,
      white,
      #ffd166,
      #ff4d9d,
      white
    );

  background-size: 300%;

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  animation:
    shine 3s linear infinite;
}

.birthday h2 {
  margin-top: 8px;

  font-size:
    clamp(25px, 5vw, 50px);

  color: #ff7eb3;

  text-shadow:
    0 0 20px #ff1493;
}

@keyframes shine {
  to {
    background-position: 300%;
  }
}


/* =========================
   CAKE
========================= */

.cake {
  position: relative;

  width: 260px;
  height: 190px;

  margin-top: 20px;

  filter:
    drop-shadow(
      0 20px 20px rgba(0,0,0,.7)
    );
}

.plate {
  position: absolute;

  bottom: 0;
  left: 10px;

  width: 240px;
  height: 25px;

  border-radius: 50%;

  background:
    linear-gradient(#eee, #777);

  box-shadow:
    0 8px 15px #000;
}

.cake-body {
  position: absolute;

  bottom: 20px;
  left: 30px;

  width: 200px;
  height: 100px;

  border-radius:
    12px 12px 25px 25px;

  background:
    linear-gradient(
      90deg,
      #7b241c,
      #d35400,
      #ff8c42,
      #a93226
    );

  box-shadow:
    inset 0 -15px 20px rgba(0,0,0,.3),
    inset 0 10px 10px rgba(255,255,255,.2);
}

.cake-top {
  position: absolute;

  left: 25px;
  bottom: 105px;

  width: 210px;
  height: 45px;

  border-radius: 50%;

  background:
    radial-gradient(
      ellipse,
      #ffe0b2,
      #ffb366 50%,
      #8b4513 100%
    );
}

.icing {
  position: absolute;

  top: -2px;
  left: 0;

  width: 100%;
  height: 28px;

  background: white;

  border-radius: 50%;
}

.cake-line {
  position: absolute;

  top: 40px;

  width: 100%;
  height: 4px;

  background: #ffd166;
}

.cake-line.second {
  top: 70px;
}


/* =========================
   CANDLES
========================= */

.candle-row {
  position: absolute;

  bottom: 130px;
  left: 35px;

  width: 190px;

  display: flex;

  justify-content: space-around;

  z-index: 10;
}

.candle {
  width: 6px;
  height: 32px;

  background:
    repeating-linear-gradient(
      -45deg,
      white,
      white 5px,
      #ff4d6d 5px,
      #ff4d6d 10px
    );

  border-radius: 3px;

  position: relative;
}

.fire {
  position: absolute;

  width: 12px;
  height: 20px;

  left: -3px;
  top: -22px;

  background:
    radial-gradient(
      ellipse,
      white 5%,
      #ffe600 35%,
      #ff7200 65%,
      transparent 70%
    );

  filter:
    drop-shadow(
      0 0 8px #ffb300
    );

  animation:
    flame .15s infinite alternate;
}

@keyframes flame {

  from {
    transform:
      scale(.9)
      rotate(-3deg);
  }

  to {
    transform:
      scale(1.1)
      rotate(3deg);
  }
}


/* =========================
   WISH
========================= */

.wish {
  margin-top: 15px;

  animation:
    fadeUp 1.5s ease;
}

.wish h3 {
  font-size:
    clamp(20px, 4vw, 32px);

  color: #ffd166;

  text-shadow:
    0 0 20px #ff9d00;
}

@keyframes fadeUp {

  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* =========================
   MESSAGE
========================= */

.message {
  max-width: 750px;

  margin-top: 20px;

  font-size:
    clamp(15px, 2.3vw, 21px);

  line-height: 1.6;

  animation:
    fadeUp 2s ease;
}

.message p {
  margin: 12px 0;
}

.love {
  font-size:
    clamp(25px, 5vw, 42px);

  color: #ff6b9d;

  font-weight: bold;

  text-shadow:
    0 0 20px #ff1493;
}

.final-line {
  color: #ffd166;

  font-weight: bold;
}

.beautiful {
  margin-top: 25px;

  font-size:
    clamp(20px, 4vw, 35px);

  font-weight: bold;

  text-shadow:
    0 0 15px #ff4d9d,
    0 0 35px #ff1493;

  animation:
    heartbeat 2s infinite;
}

@keyframes heartbeat {

  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}


/* =========================
   FIREWORKS
========================= */

.firework {
  position: fixed;

  width: 5px;
  height: 5px;

  border-radius: 50%;

  pointer-events: none;

  animation:
    explode 1.5s ease-out forwards;
}

@keyframes explode {

  0% {
    transform:
      translate(0,0)
      scale(1);

    opacity: 1;
  }

  100% {
    transform:
      translate(var(--x), var(--y))
      scale(.2);

    opacity: 0;
  }
}


/* =========================
   CONFETTI
========================= */

.confetti {
  position: fixed;

  top: -20px;

  width: 8px;
  height: 15px;

  animation:
    fall var(--duration)
    linear forwards;

  z-index: 20;
}

@keyframes fall {

  to {
    transform:
      translateY(110vh)
      rotate(720deg);
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

  .birthday {
    justify-content: flex-start;

    padding-top: 25px;
  }

  .intro h1 {
    letter-spacing: 5px;
  }

  .cake {
    transform: scale(.82);
  }

  .message {
    padding-bottom: 30px;
  }

}
// ==========================================
// CLARIS' 23RD BIRTHDAY EXPERIENCE ❤️
// ==========================================


const intro =
  document.getElementById("intro");

const countdownScene =
  document.getElementById("countdownScene");

const birthday =
  document.getElementById("birthday");

const countdown =
  document.getElementById("countdown");

const beginButton =
  document.getElementById("beginButton");

const music =
  document.getElementById("birthdayMusic");

const wish =
  document.getElementById("wish");

const wishButton =
  document.getElementById("wishButton");

const message =
  document.getElementById("message");


// ==========================================
// BEGIN EXPERIENCE
// ==========================================

beginButton.addEventListener("click", () => {

  // Start music
  music.volume = 0.65;

  music.play().catch(() => {});


  // Hide intro
  intro.classList.add("hidden");


  // Show countdown
  countdownScene.classList.remove("hidden");


  startCountdown();

});


// ==========================================
// COUNTDOWN
// ==========================================

let number = 1;

const finalAge = 23;


function startCountdown() {

  showNumber();

}


function showNumber() {

  countdown.textContent =
    number;


  // Restart animation
  countdown.style.animation =
    "none";

  void countdown.offsetWidth;

  countdown.style.animation =
    "numberIn .8s ease";


  if (number < finalAge) {

    number++;


    let speed;


    if (number < 8) {

      speed = 650;

    } else if (number < 15) {

      speed = 500;

    } else if (number < 20) {

      speed = 380;

    } else {

      speed = 300;

    }


    setTimeout(
      showNumber,
      speed
    );


  } else {

    // Let 23 remain on screen
    setTimeout(
      revealBirthday,
      1400
    );

  }

}


// ==========================================
// BIRTHDAY REVEAL
// ==========================================

function revealBirthday() {

  countdownScene.classList.add(
    "hidden"
  );


  birthday.classList.remove(
    "hidden"
  );


  createCandles();


  // Big opening fireworks
  for (
    let i = 0;
    i < 45;
    i++
  ) {

    setTimeout(
      createFirework,
      i * 80
    );

  }


  // Confetti
  for (
    let i = 0;
    i < 180;
    i++
  ) {

    setTimeout(
      createConfetti,
      i * 15
    );

  }


  // Give her time to see the cake
  setTimeout(
    showWish,
    2500
  );

}


// ==========================================
// 23 CANDLES
// ==========================================

function createCandles() {

  const container =
    document.getElementById(
      "candles"
    );


  container.innerHTML =
    "";


  for (
    let i = 0;
    i < 23;
    i++
  ) {

    const candle =
      document.createElement(
        "div"
      );

    candle.className =
      "candle";


    const fire =
      document.createElement(
        "div"
      );

    fire.className =
      "fire";


    candle.appendChild(
      fire
    );


    container.appendChild(
      candle
    );

  }

}


// ==========================================
// MAKE A WISH
// ==========================================

function showWish() {

  wish.classList.remove(
    "hidden"
  );

}


wishButton.addEventListener(
  "click",
  () => {

    // Remove button
    wishButton.style.display =
      "none";


    // Wish text
    wish.querySelector("h3").textContent =
      "✨ Wish made... ✨";


    // Blow out candles
    const flames =
      document.querySelectorAll(
        ".fire"
      );


    flames.forEach(
      flame => {

        flame.style.transition =
          "1s";

        flame.style.opacity =
          "0";

        flame.style.transform =
          "scale(0)";

      }
    );


    // Fireworks explosion
    for (
      let i = 0;
      i < 70;
      i++
    ) {

      setTimeout(
        createFirework,
        i * 40
      );

    }


    // More confetti
    for (
      let i = 0;
      i < 250;
      i++
    ) {

      setTimeout(
        createConfetti,
        i * 10
      );

    }


    // Show love message
    setTimeout(
      () => {

        wish.classList.add(
          "hidden"
        );

        message.classList.remove(
          "hidden"
        );

      },
      1800
    );

  }
);


// ==========================================
// FIREWORKS
// ==========================================

function createFirework() {

  const centerX =
    Math.random() *
    window.innerWidth;


  const centerY =
    Math.random() *
    window.innerHeight *
    .55;


  const particles = 40;


  for (
    let i = 0;
    i < particles;
    i++
  ) {

    const particle =
      document.createElement(
        "div"
      );


    particle.className =
      "firework";


    particle.style.left =
      centerX + "px";


    particle.style.top =
      centerY + "px";


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      60 +
      Math.random() *
      200;


    const x =
      Math.cos(angle) *
      distance;


    const y =
      Math.sin(angle) *
      distance;


    particle.style.setProperty(
      "--x",
      x + "px"
    );


    particle.style.setProperty(
      "--y",
      y + "px"
    );


    particle.style.background =
      `hsl(
        ${Math.random() * 360},
        100%,
        70%
      )`;


    document
      .getElementById(
        "fireworks"
      )
      .appendChild(
        particle
      );


    setTimeout(
      () => {
        particle.remove();
      },
      1600
    );

  }

}


// ==========================================
// CONFETTI
// ==========================================

function createConfetti() {

  const piece =
    document.createElement(
      "div"
    );


  piece.className =
    "confetti";


  piece.style.left =
    Math.random() * 100 +
    "vw";


  piece.style.setProperty(
    "--duration",
    3 +
    Math.random() * 4 +
    "s"
  );


  const size =
    5 +
    Math.random() * 8;


  piece.style.width =
    size + "px";


  piece.style.height =
    size * 1.8 + "px";


  piece.style.background =
    `hsl(
      ${Math.random() * 360},
      100%,
      65%
    )`;


  document
    .getElementById(
      "confetti"
    )
    .appendChild(
      piece
    );


  setTimeout(
    () => {
      piece.remove();
    },
    7000
  );

}
