// ==========================================
// CLARIS' 23RD BIRTHDAY EXPERIENCE ❤️
// ==========================================

const intro = document.getElementById("intro");
const countdownScene = document.getElementById("countdownScene");
const birthday = document.getElementById("birthday");
const countdown = document.getElementById("countdown");
const beginButton = document.getElementById("beginButton");
const music = document.getElementById("birthdayMusic");
const wish = document.getElementById("wish");
const wishButton = document.getElementById("wishButton");
const message = document.getElementById("message");

// ==========================================
// BEGIN EXPERIENCE
// ==========================================

beginButton.addEventListener("click", () => {
  fadeInMusic(music); // smooth fade-in

  intro.classList.add("hidden");
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
