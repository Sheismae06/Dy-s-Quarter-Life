// Music background audio for pages
const bgMusic1 = new Audio('song1-kung-tayo.mp3');
const bgMusic2 = new Audio('song2-until-i-found-you.mp3');
const bgMusic3 = new Audio('song3-happy-birthday.mp3');
const messageRecordedAudio = new Audio('message.recorded.mp3');
const meanddyAudio = new Audio('meanddy.mp3');

bgMusic1.loop = true;
bgMusic2.loop = true;
bgMusic3.loop = true;

bgMusic1.volume = 1.0;
bgMusic2.volume = 1.0;
bgMusic3.volume = 1.0;
messageRecordedAudio.volume = 1.0;
meanddyAudio.volume = 1.0;

// Keep track of which bg music is playing
let currentBgMusic = null;

// Utility functions to play/stop music safely
function playBgMusic(audio) {
  if (currentBgMusic && currentBgMusic !== audio) {
    currentBgMusic.pause();
    currentBgMusic.currentTime = 0;
  }
  currentBgMusic = audio;
  audio.play().catch(() => {});
}

function stopBgMusic() {
  if (currentBgMusic) {
    currentBgMusic.pause();
    currentBgMusic.currentTime = 0;
    currentBgMusic = null;
  }
}

// Music toggle icon logic (piano icon)
const musicToggleIcon = document.querySelector('.music-toggle');
if (musicToggleIcon) {
  // Start with music off (except on index when Get Started pressed)
  let musicOn = false;
  musicToggleIcon.style.cursor = 'pointer';

  musicToggleIcon.addEventListener('click', () => {
    musicOn = !musicOn;
    if (musicOn) {
      musicToggleIcon.classList.add('music-on');
      musicToggleIcon.classList.remove('music-off');
      if (!currentBgMusic) playBgMusic(bgMusic1); // default fallback
    } else {
      musicToggleIcon.classList.remove('music-on');
      musicToggleIcon.classList.add('music-off');
      stopBgMusic();
    }
  });
}

// Back button logic (all pages)
const backBtn = document.querySelector('.back-btn');
if (backBtn) {
  backBtn.style.cursor = 'pointer';
  backBtn.addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = 'index.html';
    }
  });
}

// INDEX PAGE LOGIC
const getStartedBtn = document.getElementById('get-started');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    // Play song1, show letter page content, keep music continuous
    playBgMusic(bgMusic1);
    // Example: redirect or show letter page content
    window.location.href = 'letter.html';
  });
}

// LETTER PAGE LOGIC
const miniAlbumBtn = document.getElementById('mini-album');
if (miniAlbumBtn) {
  miniAlbumBtn.addEventListener('click', () => {
    playBgMusic(bgMusic2);
    window.location.href = 'album.html';
  });
}

// ALBUM PAGE LOGIC - Slideshow
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

let currentSlideIndex = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  currentSlideIndex = index;
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
  });
}
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
  });
}

showSlide(0);

const watchVideosBtn = document.getElementById('watch-videos');
if (watchVideosBtn) {
  watchVideosBtn.addEventListener('click', () => {
    // Stop album bg music and go to video page
    stopBgMusic();
    playBgMusic(bgMusic3);
    window.location.href = 'video.html';
  });
}

// VIDEO PAGE LOGIC
const soundOfUsBtn = document.getElementById('sound-of-us-btn');
const openPresentBtn = document.getElementById('open-present-btn');
const presentMessage = document.getElementById('present-message');
const messageRecordedBtn = document.getElementById('message-recorded-btn');
const homeBtn = document.getElementById('home-btn');
const video1 = document.getElementById('video1');

if (soundOfUsBtn) {
  soundOfUsBtn.style.cursor = 'pointer';
  let isPlaying = false;
  soundOfUsBtn.addEventListener('click', () => {
    if (isPlaying) {
      meanddyAudio.pause();
      meanddyAudio.currentTime = 0;
      isPlaying = false;
      soundOfUsBtn.classList.remove('playing');
    } else {
      // Stop other audios
      messageRecordedAudio.pause();
      messageRecordedAudio.currentTime = 0;
      meanddyAudio.play();
      isPlaying = true;
      soundOfUsBtn.classList.add('playing');
      // Stop bg music (song3) if playing
      if (currentBgMusic === bgMusic3) {
        bgMusic3.pause();
        bgMusic3.currentTime = 0;
      }
    }
  });

  meanddyAudio.addEventListener('ended', () => {
    isPlaying = false;
    soundOfUsBtn.classList.remove('playing');
  });
}

if (openPresentBtn) {
  openPresentBtn.addEventListener('click', () => {
    presentMessage.classList.remove('hidden');
    // Stop soundOfUs audio if playing
    meanddyAudio.pause();
    meanddyAudio.currentTime = 0;
    soundOfUsBtn.classList.remove('playing');
    // Play song3 bg music
    playBgMusic(bgMusic3);
  });
}

if (messageRecordedBtn) {
  messageRecordedBtn.style.cursor = 'pointer';
  let isMsgPlaying = false;
  messageRecordedBtn.addEventListener('click', () => {
    if (isMsgPlaying) {
      messageRecordedAudio.pause();
      messageRecordedAudio.currentTime = 0;
      isMsgPlaying = false;
      messageRecordedBtn.classList.remove('playing');
    } else {
      // Pause other audios
      meanddyAudio.pause();
      meanddyAudio.currentTime = 0;
      messageRecordedAudio.play();
      isMsgPlaying = true;
      messageRecordedBtn.classList.add('playing');
      // Stop bg music song3 so message is clear
      if (currentBgMusic === bgMusic3) {
        bgMusic3.pause();
      }
    }
  });

  messageRecordedAudio.addEventListener('ended', () => {
    isMsgPlaying = false;
    messageRecordedBtn.classList.remove('playing');
    // Resume bg music song3 if needed
    if (currentBgMusic === bgMusic3) {
      bgMusic3.play();
    }
  });
}

if (homeBtn) {
  homeBtn.style.cursor = 'pointer';
  homeBtn.addEventListener('click', () => {
    // Stop all audios before going home
    stopBgMusic();
    meanddyAudio.pause();
    meanddyAudio.currentTime = 0;
    messageRecordedAudio.pause();
    messageRecordedAudio.currentTime = 0;
    window.location.href = 'index.html';
  });
}

// Ensure video1 controls volume max
if (video1) {
  video1.volume = 1.0;
  // Play sound of us audio when button below clicked
  // handled above
}

// Optional: on page unload stop audios to avoid audio hanging
window.addEventListener('beforeunload', () => {
  stopBgMusic();
  meanddyAudio.pause();
  messageRecordedAudio.pause();
});

// Fade-in animations on page load
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});
