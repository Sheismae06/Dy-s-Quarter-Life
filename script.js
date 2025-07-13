// SONGS
const song1 = document.getElementById("song1") || null;
const song2 = new Audio("song2-until-i-found-you.mp3");
const song3 = new Audio("song3-happy-birthday.mp3");
const voiceMessage = document.getElementById("voiceMessage") || new Audio("message recorded.mp3");

song2.volume = 1;
song3.volume = 1;
voiceMessage.volume = 1;

// PAGE NAVIGATION
function startJourney() {
  if (song1) song1.play();
  window.location.href = "letter.html";
}

function goToAlbum() {
  song2.currentTime = 0;
  song2.play();
  window.location.href = "album.html";
}

// MINI ALBUM STOP/RESUME LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");
  videos.forEach(video => {
    video.volume = 1;

    video.addEventListener("play", () => {
      if (!video.dataset.manual) {
        song2.pause();
      }
    });

    video.addEventListener("pause", () => {
      if (!video.dataset.manual) {
        song2.play();
      }
    });
  });

  const playHiddenSoundBtn = document.getElementById("playHiddenSoundBtn");
  if (playHiddenSoundBtn) {
    playHiddenSoundBtn.addEventListener("click", () => {
      const hiddenAudio = new Audio("VIDEO_5230d69f_1481_413f_a495_a82ceb45802c_V1.mp4");
      hiddenAudio.volume = 1;
      hiddenAudio.play();
    });
  }

  const presentBtn = document.getElementById("presentBtn");
  if (presentBtn) {
    presentBtn.addEventListener("click", () => {
      const box = document.getElementById("presentMessage");
      if (box) box.style.display = "flex";
      song2.pause();
      song3.currentTime = 0;
      song3.play();
    });
  }

  const voiceBtn = document.getElementById("voiceBtn");
  if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
      voiceMessage.currentTime = 0;
      voiceMessage.play();
    });
  }

  const restartBtn = document.getElementById("restartBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      location.href = "index.html";
    });
  }
});
