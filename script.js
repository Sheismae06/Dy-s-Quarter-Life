// Song references
const song1 = document.getElementById("song1");
const song2 = new Audio("song2-dance-with-you.mp3");
const song3 = new Audio("song3-forevermore.mp3");
const video2Sound = new Audio("video2-sound.mp3");

// Volume Settings
song1.volume = 1;
song2.volume = 1;
song3.volume = 1;
video2Sound.volume = 1;

// Ensure only one song plays at a time
function stopAllSongs() {
  [song1, song2, song3, video2Sound].forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Get Started → Go to letter + play song1
function startJourney() {
  stopAllSongs();
  song1.play();
  window.location.href = "letter.html";
}

// Letter → Go to album + play song2
function goToAlbum() {
  stopAllSongs();
  song2.play();
  window.location.href = "album.html";
}

// Album → Go to video + song2 continues
function goToVideoPage() {
  window.location.href = "video.html";
}

// Play video1 manually + stop song2 while playing
function playVideo1() {
  const video = document.getElementById("video1");
  if (video) {
    stopAllSongs();
    video.play();
    video.onended = () => {
      song2.play(); // resume song2 after video ends
    };
  }
}

// Play video2 sound (from button)
function playVideo2Sound() {
  stopAllSongs();
  video2Sound.play();
}

// Open Present → blur + show float box + play song3
function openPresent() {
  stopAllSongs();
  song3.play();
  document.getElementById("presentMessage").style.display = "flex";
  document.body.classList.add("blurred");
}

// Close present box (optional feature)
function closePresent() {
  document.getElementById("presentMessage").style.display = "none";
  document.body.classList.remove("blurred");
}

// Back arrow control (only show on subpages)
window.addEventListener("DOMContentLoaded", () => {
  const showBack = window.location.pathname !== "/index.html" &&
                   window.location.pathname !== "/" &&
                   !window.location.href.includes("github.io");

  const navbar = document.querySelector(".navbar");
  if (showBack && navbar) {
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "&#8592;";
    backBtn.className = "back-arrow";
    backBtn.onclick = () => history.back();
    navbar.appendChild(backBtn);
  }
});
