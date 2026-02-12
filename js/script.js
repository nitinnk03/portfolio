document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded"); // DEBUG LINE

  // =========================
  // THEME TOGGLE
  // =========================
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      themeToggle.textContent =
        document.body.classList.contains("light-theme") ? "🌙" : "☀️";
    });
  } else {
    console.warn("themeToggle not found");
  }

  // =========================
  // MUSIC TOGGLE
  // =========================
  const musicToggle = document.getElementById("musicToggle");
  const music = document.getElementById("bgMusic");

  if (!musicToggle || !music) {
    console.warn("Music elements missing");
    return;
  }

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
});
// Scroll reveal
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
window.addEventListener("load", revealOnScroll);
// Loader hide
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 600);
});
// Cursor glow
const glow = document.getElementById("cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
// Scroll progress
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-progress").style.width = progress + "%";
});
