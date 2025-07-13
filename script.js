// AUDIO ELEMENTS
const song1 = document.getElementById("song1");
const song2 = new Audio("song2-akin-ka-na-lang.mp3");
const song3 = new Audio("song3-fall-inlove.mp3");
const video2Audio = new Audio("video2-audio.mp3");

// Ensure max volume
[song1, song2, song3, video2Audio].forEach(audio => {
  audio.volume = 1.0;
});

// START JOURNEY → PLAY SONG 1 + GO TO LETTER
function startJourney() {
  song1.play();
  setTimeout(() => {
    window.location.href = "letter.html";
  }, 800);
}

// MINI ALBUM BUTTON → PLAY SONG 2 + GO TO ALBUM
function goToAlbum() {
  song2.play();
  setTimeout(() => {
    window.location.href = "album.html";
  }, 800);
}

// WATCH HERE BUTTON → GO TO VIDEO PAGE
function goToVideo() {
  setTimeout(() => {
    window.location.href = "video.html";
  }, 600);
}

// PLAY VIDEO2 AUDIO WHEN BUTTON PRESSED
function playVideo2Audio() {
  video2Audio.play();
}

// OPEN YOUR PRESENT → BLUR + FLOAT + PLAY SONG 3
function openSurprise() {
  song3.play();

  document.getElementById("blurOverlay").style.display = "block";
  document.getElementById("surpriseBox").style.display = "block";
}

// STOP SONG 2 IF VIDEO 1 PLAYS
function stopSong2OnVideoPlay() {
  const video1 = document.getElementById("video1");
  if (video1) {
    video1.addEventListener("play", () => {
      song2.pause();
    });
    video1.addEventListener("pause", () => {
      if (!song3.paused || !video2Audio.paused) return;
      song2.play();
    });
  }
}

// Hide back arrow on index only
window.addEventListener("DOMContentLoaded", () => {
  const backArrow = document.querySelector(".back-arrow");
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "") {
    if (backArrow) backArrow.style.display = "none";
  }

  // If video page, activate listener for stop
  if (window.location.pathname.includes("video.html")) {
    stopSong2OnVideoPlay();
  }
});
