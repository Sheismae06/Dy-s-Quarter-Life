// Elements
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const voiceMessage = document.getElementById("voiceMessage");
const video1 = document.getElementById("video1");
const audioVideo2 = document.getElementById("audioVideo2");
const video2Btn = document.getElementById("video2Btn");
const openPresentBtn = document.getElementById("presentBtn");
const presentMessage = document.getElementById("presentMessage");
const listenBtn = document.getElementById("listenBtn");

// Flags
let hasStartedSong1 = false;
let hasStartedSong2 = false;
let hasPlayedSong3 = false;

// Home page - start journey
function startJourney() {
  if (!hasStartedSong1 && song1) {
    song1.volume = 1;
    song1.play();
    hasStartedSong1 = true;
  }
  window.location.href = "letter.html";
}

// Letter page - go to mini album
function goToAlbum() {
  if (!hasStartedSong2 && song2) {
    song2.volume = 1;
    song2.play();
    hasStartedSong2 = true;
  }
  window.location.href = "album.html";
}

// Album page - go to video
function goToVideo() {
  window.location.href = "video.html";
}

// Video1 logic
if (video1 && song2) {
  video1.addEventListener("play", () => {
    song2.pause();
  });

  video1.addEventListener("pause", () => {
    if (!hasPlayedSong3 && hasStartedSong2) {
      song2.play();
    }
  });
}

// Video2 button logic
if (video2Btn && audioVideo2) {
  video2Btn.addEventListener("click", () => {
    audioVideo2.volume = 1;
    audioVideo2.play();
  });
}

// Open Your Present logic
if (openPresentBtn) {
  openPresentBtn.addEventListener("click", () => {
    if (!hasPlayedSong3 && song3) {
      song3.volume = 1;
      song3.play();
      hasPlayedSong3 = true;
    }

    if (presentMessage) {
      presentMessage.style.display = "flex";
    }
  });
}

// "Opened it yet?" Listen button
if (listenBtn && voiceMessage) {
  listenBtn.addEventListener("click", () => {
    voiceMessage.volume = 1;
    voiceMessage.play();
    listenBtn.classList.add("playing");

    voiceMessage.addEventListener("ended", () => {
      listenBtn.classList.remove("playing");
    });
  });
}
