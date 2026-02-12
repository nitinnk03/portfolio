document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");

  /* =========================
     THEME TOGGLE
  ========================= */
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      themeToggle.textContent =
        document.body.classList.contains("light-theme") ? "🌙" : "☀️";
    });
  }

  /* =========================
     MUSIC TOGGLE
  ========================= */
  const musicToggle = document.getElementById("musicToggle");
  const music = document.getElementById("bgMusic");

  if (musicToggle && music) {
    let isPlaying = false;
    music.volume = 0.12;

    musicToggle.addEventListener("click", async () => {
      try {
        if (!isPlaying) {
          await music.play();
          musicToggle.textContent = "🔊";
        } else {
          music.pause();
          musicToggle.textContent = "🎷";
        }
        isPlaying = !isPlaying;
      } catch (e) {
        console.error("Audio error:", e);
      }
    });
  }

  /* =========================
     SCROLL REVEAL
  ========================= */
  const revealElements = document.querySelectorAll(".section");

  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("reveal", "show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load

  /* =========================
     CURSOR GLOW
  ========================= */
  const glow = document.getElementById("cursor-glow");

  if (glow) {
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  /* =========================
     SCROLL PROGRESS
  ========================= */
  const progressBar = document.getElementById("scroll-progress");

  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  }
});

/* =========================
   PAGE LOADER (IMPORTANT)
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 800);
  }
});
