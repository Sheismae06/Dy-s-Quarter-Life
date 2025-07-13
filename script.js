// Background Music Handling
let currentAudio = null;
let currentPlaying = '';

function playMusic(id, src, loop = true) {
  if (currentAudio && currentPlaying !== id) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if (currentPlaying === id && !currentAudio.paused) {
    currentAudio.pause();
    return;
  }
  currentAudio = new Audio(src);
  currentAudio.volume = 1.0;
  currentAudio.loop = loop;
  currentAudio.play();
  currentPlaying = id;
}

// Get Started button
const getStartedBtn = document.getElementById('get-started');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    playMusic('song1', 'song1-kung-tayo.mp3');
    window.location.href = 'letter.html';
  });
}

// Mini Album button
const albumBtn = document.getElementById('to-album');
if (albumBtn) {
  albumBtn.addEventListener('click', () => {
    playMusic('song2', 'song2-until-i-found-you.mp3');
    window.location.href = 'album.html';
  });
}

// Open Present button
const openPresentBtn = document.getElementById('open-present');
if (openPresentBtn) {
  openPresentBtn.addEventListener('click', () => {
    playMusic('song3', 'song3-happy-birthday.mp3');
    document.getElementById('present-float').classList.remove('hidden');
    document.body.classList.add('blurred');
  });
}

// Sound of Us button
const soundOfBtn = document.getElementById('sound-of');
let isSoundOfPlaying = false;

if (soundOfBtn) {
  const soundOfAudio = new Audio('meanddy.mp3');
  soundOfAudio.volume = 1.0;
  soundOfBtn.addEventListener('click', () => {
    if (isSoundOfPlaying) {
      soundOfAudio.pause();
      soundOfAudio.currentTime = 0;
    } else {
      soundOfAudio.play();
    }
    isSoundOfPlaying = !isSoundOfPlaying;
  });
}

// Message Recorded button
const messageBtn = document.getElementById('message-btn');
let isMessagePlaying = false;

if (messageBtn) {
  const messageAudio = new Audio('message.recorded.mp3');
  messageAudio.volume = 1.0;
  messageBtn.addEventListener('click', () => {
    if (isMessagePlaying) {
      messageAudio.pause();
      messageAudio.currentTime = 0;
    } else {
      messageAudio.play();
    }
    isMessagePlaying = !isMessagePlaying;
  });
}

// Slideshow Controls
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000); // Change every 5 seconds
}

if (document.querySelector('.slideshow-container')) {
  showSlides();
}

// Back button
const backBtn = document.getElementById('back-btn');
if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.history.back();
  });
}

// Home button
const homeBtn = document.getElementById('home-btn');
if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    window.location.href = 'index.html';
  });
}
