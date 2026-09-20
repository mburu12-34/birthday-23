document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const countdownScreen = document.getElementById("countdownScreen");
  const birthdayScreen = document.getElementById("birthdayScreen");
  const messageScreen = document.getElementById("messageScreen");
  const finalScreen = document.getElementById("finalScreen");

  const countdownNumber =
    document.getElementById("countdownNumber");

  const wishButton =
    document.getElementById("wishButton");

  const music =
    document.getElementById("birthdayMusic");

  let fireworksTimer = null;


  /* SCREEN CONTROL */

  function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(section => {
      section.classList.remove("active");
    });

    screen.classList.add("active");
  }


  /* MUSIC */

  function playMusic() {

    music.volume = 0.45;

    music.play().catch(() => {
      // Mobile browser may block autoplay.
      // The wish button will start it after interaction.
    });

  }


  /* FIREWORK */

  function firework(big = false) {

    const container =
      document.getElementById("fireworks");

    const explosion =
      document.createElement("div");

    explosion.className = "firework";

    explosion.style.left =
      Math.random() * 100 + "%";

    explosion.style.top =
      (12 + Math.random() * 55) + "%";


    const sparks = big ? 36 : 22;


    for (let i = 0; i < sparks; i++) {

      const spark =
        document.createElement("span");

      spark.className = "spark";

      const angle =
        (360 / sparks) * i;

      const distance =
        big
          ? 75 + Math.random() * 100
          : 45 + Math.random() * 65;


      spark.style.transform =
        `rotate(${angle}deg) translateY(-${distance}px)`;


      spark.style.background =
        `hsl(${Math.random() * 360},100%,75%)`;


      explosion.appendChild(spark);

    }


    container.appendChild(explosion);


    setTimeout(() => {
      explosion.remove();
    }, 1600);

  }


  function startFireworks(big = false) {

    stopFireworks();

    firework(big);

    fireworksTimer =
      setInterval(() => {
        firework(big);
      }, big ? 650 : 1200);

  }


  function stopFireworks() {

    if (fireworksTimer) {
      clearInterval(fireworksTimer);
      fireworksTimer = null;
    }

  }


  /* CONFETTI */

  function confettiBurst() {

    const container =
      document.getElementById("confetti");


    for (let i = 0; i < 120; i++) {

      const piece =
        document.createElement("div");

      piece.className =
        "confetti-piece";


      piece.style.left =
        Math.random() * 100 + "%";


      piece.style.background =
        `hsl(${Math.random() * 360},100%,70%)`;


      piece.style.animationDelay =
        Math.random() * 1.5 + "s";


      container.appendChild(piece);


      setTimeout(() => {
        piece.remove();
      }, 5000);

    }

  }


  /* START */

  setTimeout(() => {

    showScreen(countdownScreen);

    playMusic();

    startCountdown();

  }, 5500);


  /* 1 → 23 */

  function startCountdown() {

    let number = 1;

    countdownNumber.textContent = number;


    const timer =
      setInterval(() => {

        number++;

        countdownNumber.textContent =
          number;


        countdownNumber.animate(
          [
            {
              transform: "scale(.65)",
              opacity: .15
            },

            {
              transform: "scale(1)",
              opacity: 1
            }
          ],
          {
            duration: 400,
            easing: "ease-out"
          }
        );


        if (number === 23) {

          clearInterval(timer);


          setTimeout(() => {
            revealBirthday();
          }, 1200);

        }

      }, 450);

  }


  /* BIRTHDAY REVEAL */

  function revealBirthday() {

    showScreen(birthdayScreen);


    firework(true);


    setTimeout(() => {
      firework(true);
    }, 500);


    setTimeout(() => {
      firework(true);
    }, 1000);


    setTimeout(() => {
      startFireworks(false);
    }, 1600);

  }


  /* MAKE A WISH */

  wishButton.addEventListener("click", () => {

    /* Guarantee music starts after user interaction */

    if (music.paused) {
      music.play().catch(() => {});
    }


    stopFireworks();


    /* Move into the personal message */

    showScreen(messageScreen);


    confettiBurst();


    firework(true);


    setTimeout(() => {
      firework(true);
    }, 600);


    setTimeout(() => {
      firework(false);
    }, 1200);


    /*
      Give Claris time to actually read
      the complete message.
    */

    setTimeout(() => {

      showScreen(finalScreen);


      firework(true);


      setTimeout(() => {
        firework(true);
      }, 450);


      setTimeout(() => {
        firework(true);
      }, 900);


      setTimeout(() => {
        confettiBurst();
        startFireworks(true);
      }, 1400);


    }, 13000);

  });

});
const musicButton = document.getElementById("musicButton");

function startMusic() {
  music.volume = 0.5;

  music.play().then(() => {
    musicButton.style.display = "none";
  }).catch(() => {
    musicButton.style.display = "flex";
  });
}

musicButton.addEventListener("click", () => {
  music.play().then(() => {
    musicButton.style.display = "none";
  });
});
