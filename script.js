let currentAudio = null;
let isPlaying = false;

// Handle background music (Song 1, 2, 3)
function playMusic(src, storeKey) {
  if (currentAudio) currentAudio.pause();

  const audio = new Audio(src);
  audio.loop = true;
  audio.volume = 1.0;
  audio.play();

  currentAudio = audio;
  isPlaying = true;
  sessionStorage.setItem("currentSong", src);
  sessionStorage.setItem("playing", "true");
  sessionStorage.setItem("audioTime", "0");
}

// Resume music on page load
window.addEventListener("load", () => {
  const saved = sessionStorage.getItem("currentSong");
  const isStillPlaying = sessionStorage.getItem("playing") === "true";

  if (saved && isStillPlaying === true || isStillPlaying === "true") {
    const audio = new Audio(saved);
    audio.loop = true;
    audio.volume = 1.0;
    audio.play();
    currentAudio = audio;
    isPlaying = true;
  }
});

// Sound of Us toggle
let soundOfUs = null;
let soundOfUsPlaying = false;

function toggleSoundOfUs() {
  if (!soundOfUs) {
    soundOfUs = new Audio("meanddy.mp3");
    soundOfUs.volume = 1.0;
  }

  if (!soundOfUsPlaying) {
    soundOfUs.play();
    soundOfUsPlaying = true;
    if (currentAudio) currentAudio.pause(); // Pause background music
  } else {
    soundOfUs.pause();
    soundOfUs.currentTime = 0;
    soundOfUsPlaying = false;
    if (currentAudio && sessionStorage.getItem("currentSong")) {
      currentAudio.play();
    }
  }
}

// Message Recorded toggle
let recorded = null;
let recordedPlaying = false;

function toggleMessageRecorded() {
  if (!recorded) {
    recorded = new Audio("message.recorded.mp3");
    recorded.volume = 1.0;
  }

  if (!recordedPlaying) {
    recorded.play();
    recordedPlaying = true;
    if (currentAudio) currentAudio.pause();
  } else {
    recorded.pause();
    recorded.currentTime = 0;
    recordedPlaying = false;
    if (currentAudio && sessionStorage.getItem("currentSong")) {
      currentAudio.play();
    }
  }
}

// Open Present triggers Song 3
function openPresent() {
  playMusic("song3-happy-birthday.mp3", "song3");
}

// Album: Switch to Song 2
function goToAlbum() {
  playMusic("song2-until-i-found-you.mp3", "song2");
  setTimeout(() => {
    window.location.href = "album.html";
  }, 1000);
}

// Get Started: Switch to Song 1
function startLetter() {
  playMusic("song1-kung-tayo.mp3", "song1");
  setTimeout(() => {
    window.location.href = "letter.html";
  }, 1000);
}

// Return to Home
function goHome() {
  sessionStorage.clear();
  window.location.href = "index.html";
}
