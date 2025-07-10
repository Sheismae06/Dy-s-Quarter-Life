document.addEventListener("DOMContentLoaded", () => {
  const musicToggle = document.getElementById("music-toggle");
  const bgMusic = document.getElementById("bg-music");
  const readyBtn = document.getElementById("start-btn");
  const readyScreen = document.getElementById("ready-screen");
  const mainSection = document.getElementById("main-section");

  readyBtn.addEventListener("click", () => {
    readyScreen.style.display = "none";
    mainSection.style.display = "block";
    bgMusic.play();
    musicToggle.classList.add("playing");
  });

  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.classList.add("playing");
    } else {
      bgMusic.pause();
      musicToggle.classList.remove("playing");
    }
  });
});
