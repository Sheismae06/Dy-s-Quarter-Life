const musicToggle = document.getElementById("music-toggle");
const throwbackBtn = document.getElementById("throwback-btn");
const backToStartBtn = document.getElementById("back-to-start-btn");
const throwbackSection = document.querySelector(".throwback-section");

const song1 = new Audio("https://sndup.net/fpf9/d");
const song2 = new Audio("https://sndup.net/fksb/d");

song1.loop = true;
song2.loop = true;
song1.volume = 1;
song2.volume = 1;

let currentSong = song1;
let isPlaying = false;

// Auto-play song 1 on page load
window.addEventListener("load", () => {
  currentSong.play();
  isPlaying = true;
  musicToggle.classList.add("playing");
});

// Music icon toggle
musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    currentSong.pause();
    musicToggle.classList.remove("playing");
  } else {
    currentSong.play();
    musicToggle.classList.add("playing");
  }
  isPlaying = !isPlaying;
});

// Throwback button
throwbackBtn.addEventListener("click", () => {
  currentSong.pause();
  currentSong = song2;
  currentSong.currentTime = 0;
  currentSong.play();
  isPlaying = true;
  musicToggle.classList.add("playing");
  throwbackSection.classList.add("show");
  throwbackBtn.style.display = "none";
});

// Back to Start button
backToStartBtn.addEventListener("click", () => {
  currentSong.pause();
  currentSong = song1;
  currentSong.currentTime = 0;
  currentSong.play();
  isPlaying = true;
  musicToggle.classList.add("playing");
  throwbackSection.classList.remove("show");
  throwbackBtn.style.display = "block";
});
