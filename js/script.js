document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded");

/* =========================
   THEME TOGGLE (CIRCLE REVEAL)
========================= */

const themeToggle = document.getElementById("themeToggle");
const transition = document.getElementById("theme-transition");

themeToggle.addEventListener("click", (e) => {
  // Pulse animation on button
  themeToggle.classList.add("switching");
  setTimeout(() => themeToggle.classList.remove("switching"), 800);

  // Get click position
  const x = e.clientX + "px";
  const y = e.clientY + "px";

  transition.style.setProperty("--x", x);
  transition.style.setProperty("--y", y);

  transition.classList.add("active");

  // Switch theme mid-animation
  setTimeout(() => {
    document.body.classList.toggle("light-theme");

    themeToggle.textContent =
      document.body.classList.contains("light-theme") ? "🌙" : "☀️";
  }, 350);

  // Remove mask
  setTimeout(() => {
    transition.classList.remove("active");
  }, 900);
});


 /* =========================
   MUSIC TOGGLE – FINAL
========================= */
const musicToggle = document.getElementById("musicToggle");
const music = document.getElementById("bgMusic");

let isPlaying = false;

musicToggle.addEventListener("click", async () => {
  try {
    if (!isPlaying) {
      await music.play();
      musicToggle.classList.add("playing"); // 👈 START animation
    } else {
      music.pause();
      musicToggle.classList.remove("playing"); // 👈 STOP animation
    }
    isPlaying = !isPlaying;
  } catch (err) {
    console.error("Music error:", err);
  }
});


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
// Mobile menu logic
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  overlay.classList.add("show");
});

closeMenu.addEventListener("click", closeMobileMenu);
overlay.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("show");
}

// Close menu when link clicked
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});


