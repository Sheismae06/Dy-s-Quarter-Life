// Audio Elements
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const voiceMessage = document.getElementById("voiceMessage");

// Video Elements
const video1 = document.getElementById("video1");

// Float Box
const presentBtn = document.getElementById("presentBtn");
const presentMessage = document.getElementById("presentMessage");

// Ensure all audio starts at full volume
if (song1) song1.volume = 1;
if (song2) song2.volume = 1;
if (song3) song3.volume = 1;
if (voiceMessage) voiceMessage.volume = 1;

// --- INDEX PAGE ---
function startJourney() {
  if (song1) {
    song1.currentTime = 0;
    song1.play();
  }
  window.location.href = "letter.html";
}

// --- LETTER PAGE ---
function goToAlbum() {
  if (song2) {
    song2.currentTime = 0;
    song2.play();
  }
  window.location.href = "album.html";
}

// --- VIDEO PAGE LOGIC ---
if (video1) {
  video1.addEventListener("play", () => {
    if (song2 && !song2.paused) {
      song2.pause();
    }
  });

  video1.addEventListener("pause", () => {
    if (song2 && song2.paused) {
      song2.play();
    }
  });
}

// --- VIDEO PAGE: Private Symphony Button ---
const secretButton = document.getElementById("secretBtn");
if (secretButton) {
  secretButton.addEventListener("click", () => {
    const audio = new Audio("VIDEO_5230d69f_1481_413f_a495_a82ceb45802c_V1.mp4");
    audio.volume = 1;
    audio.play();
  });
}

// --- PRESENT BUTTON ---
if (presentBtn && presentMessage) {
  presentBtn.addEventListener("click", () => {
    presentMessage.style.display = "flex";
    document.body.classList.add("blurred");

    if (song3) {
      song3.currentTime = 0;
      song3.play();
    }
  });
}

// --- LISTEN TO VOICE MESSAGE ---
function playVoiceMessage() {
  if (voiceMessage) {
    voiceMessage.currentTime = 0;
    voiceMessage.play();

    // Add subtle animation to indicate it's playing
    const listenBtn = document.querySelector(".listen-button");
    if (listenBtn) {
      listenBtn.classList.add("playing");
      setTimeout(() => {
        listenBtn.classList.remove("playing");
      }, 3000);
    }
  }
}

// Allow global access for inline HTML button
window.startJourney = startJourney;
window.goToAlbum = goToAlbum;
window.playVoiceMessage = playVoiceMessage;
