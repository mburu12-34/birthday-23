document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const countdownScreen = document.getElementById("countdownScreen");
  const birthdayScreen = document.getElementById("birthdayScreen");
  const messageScreen = document.getElementById("messageScreen");
  const finalScreen = document.getElementById("finalScreen");

  const countdownNumber = document.getElementById("countdownNumber");
  const wishButton = document.getElementById("wishButton");
  const music = document.getElementById("birthdayMusic");

  let fireworksInterval;


  function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => {
      s.classList.remove("active");
    });

    screen.classList.add("active");
  }


  function launchFirework(big = false) {

    const fireworks = document.getElementById("fireworks");

    const firework = document.createElement("div");
    firework.className = "firework";

    firework.style.left = Math.random() * 100 + "%";
    firework.style.top = (15 + Math.random() * 55) + "%";

    const amount = big ? 32 : 18;

    for (let i = 0; i < amount; i++) {

      const spark = document.createElement("span");
      spark.className = "spark";

      const angle = (360 / amount) * i;
      const distance = big
        ? 80 + Math.random() * 80
        : 45 + Math.random() * 60;

      spark.style.transform =
        `rotate(${angle}deg) translateY(-${distance}px)`;

      spark.style.background =
        `hsl(${Math.random() * 360}, 100%, 75%)`;

      firework.appendChild(spark);
    }

    fireworks.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1500);
  }


  function startFireworks(big = false) {

    launchFirework(big);

    if (fireworksInterval) {
      clearInterval(fireworksInterval);
    }

    fireworksInterval = setInterval(() => {
      launchFirework(big);
    }, big ? 550 : 1100);

  }


  function stopFireworks() {

    if (fireworksInterval) {
      clearInterval(fireworksInterval);
      fireworksInterval = null;
    }

  }


  function confettiBurst() {

    const confetti = document.getElementById("confetti");

    for (let i = 0; i < 100; i++) {

      const piece = document.createElement("div");

      piece.className = "confetti-piece";

      piece.style.left = Math.random() * 100 + "%";
      piece.style.top = "-20px";

      piece.style.background =
        `hsl(${Math.random() * 360}, 100%, 70%)`;

      piece.style.animationDelay =
        Math.random() * 1.5 + "s";

      piece.style.transform =
        `rotate(${Math.random() * 360}deg)`;

      confetti.appendChild(piece);

      setTimeout(() => {
        piece.remove();
      }, 4500);

    }

  }


  /* MUSIC */

  function startMusic() {

    music.volume = 0.45;

    music.play().catch(() => {
      // Browser blocked autoplay.
      // Music can still play after the user taps the wish button.
    });

  }


  /* OPENING */

  setTimeout(() => {

    showScreen(countdownScreen);

    startMusic();

    startCountdown();

  }, 5000);


  /* COUNTDOWN 1 → 23 */

  function startCountdown() {

    let number = 1;

    countdownNumber.textContent = number;

    const counter = setInterval(() => {

      number++;

      countdownNumber.textContent = number;

      countdownNumber.animate(
        [
          { transform: "scale(.7)", opacity: .2 },
          { transform: "scale(1)", opacity: 1 }
        ],
        {
          duration: 450,
          easing: "ease-out"
        }
      );

      if (number >= 23) {

        clearInterval(counter);

        setTimeout(() => {
          revealBirthday();
        }, 1300);

      }

    }, 230);

  }


  /* BIRTHDAY */

  function revealBirthday() {

    showScreen(birthdayScreen);

    launchFirework(true);

    setTimeout(() => {
      launchFirework(true);
    }, 700);

    setTimeout(() => {
      startFireworks(false);
    }, 1500);

  }


  /* WISH BUTTON */

  wishButton.addEventListener("click", () => {

    stopFireworks();

    if (music.paused) {
      music.play().catch(() => {});
    }

    showScreen(messageScreen);

    confettiBurst();

    launchFirework(true);

    setTimeout(() => {
      launchFirework(true);
    }, 700);

    setTimeout(() => {
      launchFirework(false);
    }, 1500);

    /* Let the message breathe before the final moment */

    setTimeout(() => {

      showScreen(finalScreen);

      stopFireworks();

      launchFirework(true);

      setTimeout(() => {
        launchFirework(true);
      }, 400);

      setTimeout(() => {
        launchFirework(true);
      }, 800);

      setTimeout(() => {
        startFireworks(true);
      }, 1300);

      confettiBurst();

    }, 13000);

  });

});  startCountdown();
};


/* =========================
   COUNTDOWN
========================= */

let number = 1;

function startCountdown() {

  number = 1;

  showNumber();
}


function showNumber() {

  countdown.textContent = number;

  countdown.style.animation = "none";

  void countdown.offsetWidth;

  countdown.style.animation = "numberIn .8s ease";


  if (number < finalAge) {

    number++;

    let speed = 400;

    if (number < 8) {
      speed = 650;
    } 
    else if (number < 15) {
      speed = 500;
    } 
    else if (number < 20) {
      speed = 380;
    }

    setTimeout(showNumber, speed);

  } else {

    setTimeout(revealBirthday, 1400);
  }
}


/* =========================
   BIRTHDAY REVEAL
========================= */

function revealBirthday() {

  countdownScene.classList.add("hidden");

  birthday.classList.remove("hidden");

  createCandles();

  createFireworks(45);

  createConfetti(180);


  setTimeout(function () {

    wish.classList.remove("hidden");

  }, 2500);
}


/* =========================
   CANDLES
========================= */

function createCandles() {

  if (!candles) return;

  candles.innerHTML = "";

  for (let i = 0; i < finalAge; i++) {

    const candle = document.createElement("div");

    candle.className = "candle";

    const flame = document.createElement("div");

    flame.className = "fire";

    candle.appendChild(flame);

    candles.appendChild(candle);
  }
}


/* =========================
   MAKE A WISH
========================= */

if (wishButton) {

  wishButton.onclick = function () {

    const flames =
      document.querySelectorAll(".fire");

    flames.forEach(function (flame, index) {

      setTimeout(function () {

        flame.classList.add("blown");

      }, index * 25);

    });


    const title =
      wish.querySelector("h3");

    const paragraph =
      wish.querySelector("p");


    if (title) {
      title.textContent = "✨ Wish made... ✨";
    }

    if (paragraph) {
      paragraph.textContent =
        "May every beautiful wish in your heart find its way to you. ❤️";
    }


    wishButton.style.display = "none";


    createFireworks(70);

    createConfetti(250);


    setTimeout(function () {

      wish.classList.add("hidden");

      message.classList.remove("hidden");

      createFireworks(35);

      createConfetti(150);

    }, 1800);
  };
}


/* =========================
   FIREWORKS
========================= */

function createFireworks(amount) {

  for (let i = 0; i < amount; i++) {

    setTimeout(function () {

      createFirework();

    }, Math.random() * 2500);
  }
}


function createFirework() {

  const container =
    document.getElementById("fireworks");

  if (!container) return;

  const firework =
    document.createElement("div");

  firework.className = "firework";

  firework.style.left =
    Math.random() * 100 + "%";

  firework.style.top =
    10 + Math.random() * 55 + "%";


  const colors = [
    "#ff4f91",
    "#ffd166",
    "#ffffff",
    "#b967ff",
    "#ff6b6b",
    "#7df9ff"
  ];


  for (let i = 0; i < 40; i++) {

    const particle =
      document.createElement("span");

    const angle =
      (Math.PI * 2 * i) / 40;

    const distance =
      40 + Math.random() * 90;


    particle.style.setProperty(
      "--x",
      Math.cos(angle) * distance + "px"
    );

    particle.style.setProperty(
      "--y",
      Math.sin(angle) * distance + "px"
    );


    particle.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];


    firework.appendChild(particle);
  }


  container.appendChild(firework);


  setTimeout(function () {

    firework.remove();

  }, 1600);
}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

  const container =
    document.getElementById("confetti");

  if (!container) return;


  for (let i = 0; i < amount; i++) {

    const piece =
      document.createElement("span");

    piece.className =
      "confetti-piece";


    piece.style.left =
      Math.random() * 100 + "%";


    piece.style.animationDelay =
      Math.random() * 2 + "s";


    piece.style.animationDuration =
      3 + Math.random() * 4 + "s";


    piece.style.background =
      "hsl(" +
      Math.random() * 360 +
      ", 90%, 65%)";


    container.appendChild(piece);


    setTimeout(function () {

      piece.remove();

    }, 8000);
  }
     }
let number = 1;

function startCountdown() {
  showNumber();
}

function showNumber() {

  countdown.textContent = number;

  countdown.style.animation = "none";

  void countdown.offsetWidth;

  countdown.style.animation = "numberIn .8s ease";


  if (number < finalAge) {

    number++;

    let speed;

    if (number < 8) {
      speed = 650;
    } 
    else if (number < 15) {
      speed = 500;
    } 
    else if (number < 20) {
      speed = 380;
    } 
    else {
      speed = 300;
    }

    setTimeout(showNumber, speed);

  } 
  else {

    setTimeout(revealBirthday, 1400);

  }
}


/* =========================
   REVEAL BIRTHDAY
========================= */

function revealBirthday() {

  countdownScene.classList.add("hidden");

  birthday.classList.remove("hidden");

  createCandles();

  createFireworks(45);

  createConfetti(180);


  setTimeout(() => {

    wish.classList.remove("hidden");

  }, 2500);
}


/* =========================
   CREATE 23 CANDLES
========================= */

function createCandles() {

  candles.innerHTML = "";

  for (let i = 1; i <= finalAge; i++) {

    const candle = document.createElement("div");

    candle.className = "candle";

    candle.innerHTML = `
      <div class="fire"></div>
    `;

    candles.appendChild(candle);
  }
}


/* =========================
   MAKE A WISH
========================= */

wishButton.addEventListener("click", () => {

  /* Put out all flames */

  const flames = document.querySelectorAll(".fire");

  flames.forEach((flame, index) => {

    setTimeout(() => {

      flame.classList.add("blown");

    }, index * 35);

  });


  /* Change wish message */

  wish.querySelector("h3").textContent =
    "✨ Wish made... ✨";

  wish.querySelector("p").textContent =
    "May every beautiful wish in your heart find its way to you. ❤️";


  wishButton.style.display = "none";


  /* Celebration */

  createFireworks(70);

  createConfetti(250);


  /* Reveal love message */

  setTimeout(() => {

    wish.classList.add("hidden");

    message.classList.remove("hidden");

    createFireworks(35);

    createConfetti(150);

  }, 1800);

});


/* =========================
   FIREWORKS
========================= */

function createFireworks(amount) {

  for (let i = 0; i < amount; i++) {

    setTimeout(() => {

      createFirework();

    }, Math.random() * 2500);

  }
}


function createFirework() {

  const container =
    document.getElementById("fireworks");

  const firework =
    document.createElement("div");

  firework.className = "firework";

  const x =
    Math.random() * 100;

  const y =
    10 + Math.random() * 55;

  firework.style.left = `${x}%`;

  firework.style.top = `${y}%`;


  const colors = [
    "#ff4f91",
    "#ffd166",
    "#ffffff",
    "#b967ff",
    "#ff6b6b",
    "#7df9ff"
  ];


  for (let i = 0; i < 40; i++) {

    const particle =
      document.createElement("span");

    const angle =
      (Math.PI * 2 * i) / 40;

    const distance =
      40 + Math.random() * 90;

    const dx =
      Math.cos(angle) * distance;

    const dy =
      Math.sin(angle) * distance;


    particle.style.setProperty(
      "--x",
      `${dx}px`
    );

    particle.style.setProperty(
      "--y",
      `${dy}px`
    );


    particle.style.background =
      colors[Math.floor(
        Math.random() * colors.length
      )];


    firework.appendChild(particle);
  }


  container.appendChild(firework);


  setTimeout(() => {

    firework.remove();

  }, 1600);
}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

  const container =
    document.getElementById("confetti");


  for (let i = 0; i < amount; i++) {

    const piece =
      document.createElement("span");

    piece.className = "confetti-piece";


    piece.style.left =
      `${Math.random() * 100}%`;


    piece.style.animationDelay =
      `${Math.random() * 2}s`;


    piece.style.animationDuration =
      `${3 + Math.random() * 4}s`;


    piece.style.background =
      `hsl(${Math.random() * 360}, 90%, 65%)`;


    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;


    container.appendChild(piece);


    setTimeout(() => {

      piece.remove();

    }, 8000);
  }
}


/* =========================
   EXTRA CANDLE EFFECT
========================= */

setInterval(() => {

  const flames =
    document.querySelectorAll(".fire");

  flames.forEach(flame => {

    if (!flame.classList.contains("blown")) {

      const scale =
        0.85 + Math.random() * 0.3;

      flame.style.transform =
        `translateX(-50%) scale(${scale})`;
    }

  });

}, 180);}

function showNumber() {
  countdown.textContent = number;

  countdown.style.animation = "none";
  void countdown.offsetWidth;
  countdown.style.animation = "numberIn .8s ease";

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

    setTimeout(showNumber, speed);
  } else {
    setTimeout(revealBirthday, 1400);
  }
}

// ==========================================
// BIRTHDAY REVEAL
// ==========================================

function revealBirthday() {
  countdownScene.classList.add("hidden");
  birthday.classList.remove("hidden");

  createCandles();

  for (let i = 0; i < 45; i++) {
    setTimeout(createFirework, i * 80);
  }

  for (let i = 0; i < 180; i++) {
    setTimeout(createConfetti, i * 15);
  }

  setTimeout(showWish, 2500);
}

// ==========================================
// 23 CANDLES
// ==========================================

function createCandles() {
  const container = document.getElementById("candles");
  container.innerHTML = "";

  for (let i = 0; i < 23; i++) {
    const candle = document.createElement("div");
    candle.className = "candle";

    const fire = document.createElement("div");
    fire.className = "fire";

    candle.appendChild(fire);
    container.appendChild(candle);
  }
}

// ==========================================
// MAKE A WISH
// ==========================================

function showWish() {
  wish.classList.remove("hidden");
}

wishButton.addEventListener("click", () => {
  wishButton.style.display = "none";
  wish.querySelector("h3").textContent = "✨ Wish made... ✨";

  const flames = document.querySelectorAll(".fire");
  flames.forEach(flame => {
    flame.style.transition = "1s";
    flame.style.opacity = "0";
    flame.style.transform = "scale(0)";
  });

  for (let i = 0; i < 70; i++) {
    setTimeout(createFirework, i * 40);
  }

  for (let i = 0; i < 250; i++) {
    setTimeout(createConfetti, i * 10);
  }

  setTimeout(showFinalMessage, 1800);
});

// ==========================================
// FINAL MESSAGE
// ==========================================

function showFinalMessage() {
  const finale = document.createElement("div");
  finale.className = "beautiful";
  finale.textContent = "🎉 Happy 23rd Birthday, Claris! 🎉";

  document.getElementById("birthday").appendChild(finale);

  setTimeout(() => {
    finale.remove();
    wish.classList.add("hidden");
    message.classList.remove("hidden");
  }, 3000);
}

// ==========================================
// FIREWORKS
// ==========================================

function createFirework() {
  const centerX = Math.random() * window.innerWidth;
  const centerY = Math.random() * window.innerHeight * 0.55;
  const particles = 40;

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement("div");
    particle.className = "firework";
    particle.style.left = centerX + "px";
    particle.style.top = centerY + "px";

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 200;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.setProperty("--x", x + "px");
    particle.style.setProperty("--y", y + "px");
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;

    document.getElementById("fireworks").appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1600);
  }
}

// ==========================================
// CONFETTI
// ==========================================

function createConfetti() {
  const piece = document.createElement("div");
  piece.className = "confetti";
  piece.style.left = Math.random() * 100 + "vw";
  piece.style.setProperty("--duration", 3 + Math.random() * 4 + "s");

  const size = 5 + Math.random() * 8;
  piece.style.width = size + "px";
  piece.style.height = size * 1.8 + "px";
  piece.style.background = `hsl(${Math.random() * 360}, 100%, 65%)`;

  document.getElementById("confetti").appendChild(piece);

  setTimeout(() => {
    piece.remove();
  }, 7000);
}

// ==========================================
// MUSIC FADE-IN
// ==========================================

function fadeInMusic(audio, targetVolume = 0.65, duration = 3000) {
  audio.volume = 0;
  audio.play().catch(() => {});
  const step = targetVolume / (duration / 100);
  const fade = setInterval(() => {
    if (audio.volume < targetVolume) {
      audio.volume = Math.min(audio.volume + step, targetVolume);
    } else {
      clearInterval(fade);
    }
  }, 100);
  }
