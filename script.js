// DOM Elements
const musicToggle = document.getElementById("music-toggle");
const audio = document.getElementById("bg-music");
const section1 = document.getElementById("main-section");
const triggerBtn = document.getElementById("start-btn");

// PLAY MUSIC & SHOW MAIN PAGE
if (triggerBtn) {
  triggerBtn.addEventListener("click", () => {
    document.getElementById("ready-screen").style.display = "none";
    section1.style.display = "block";
    audio.play();
    musicToggle.classList.add("playing");
  });
}

// TOGGLE MUSIC
if (musicToggle) {
  musicToggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      musicToggle.classList.add("playing");
    } else {
      audio.pause();
      musicToggle.classList.remove("playing");
    }
  });
}

// Page scroll animation (optional)
document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".fade-in");
  fadeElems.forEach(el => el.classList.add("appear"));
});
