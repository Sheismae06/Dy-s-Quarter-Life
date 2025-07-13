// === Global Audio References ===
const song1 = new Audio('song1-kung-tayo.mp3');
const song2 = new Audio('song2-until-i-found-you.mp3');
const song3 = document.getElementById('song3');
const meanddy = document.getElementById('meanddy');
const recorded = document.getElementById('recorded');

song1.loop = true;
song2.loop = true;
song3.loop = true;
meanddy.loop = true;

// === Index: Play Song 1 ===
const getStartedBtn = document.querySelector('.get-started');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    song1.volume = 1;
    song1.play();
    window.location.href = 'letter.html';
  });
}

// === Letter: Transition to Album, Play Song 2 ===
const miniAlbumBtn = document.getElementById('mini-album');
if (miniAlbumBtn) {
  miniAlbumBtn.addEventListener('click', () => {
    song1.pause();
    song2.volume = 1;
    song2.play();
    window.location.href = 'album.html';
  });
}

// === Album Slideshow ===
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const toVideoBtn = document.getElementById('to-video');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  // Show "Watch" button only on last slide
  if (index === slides.length - 1) {
    toVideoBtn.classList.remove('hidden');
  } else {
    toVideoBtn.classList.add('hidden');
  }
}

if (slides.length > 0) {
  showSlide(currentSlide);
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  toVideoBtn.addEventListener('click', () => {
    song2.pause();
    window.location.href = 'video.html';
  });
}

// === Video Page Logic ===
const soundBtn = document.getElementById('sound-of-us');
const openBtn = document.getElementById('open-surprise');
const floatBox = document.getElementById('present-float');
const msgBtn = document.getElementById('message-btn');
const homeBtn = document.getElementById('go-home');

if (soundBtn) {
  let isMeAndDyPlaying = false;
  soundBtn.addEventListener('click', () => {
    if (isMeAndDyPlaying) {
      meanddy.pause();
    } else {
      meanddy.volume = 1;
      meanddy.play();
    }
    isMeAndDyPlaying = !isMeAndDyPlaying;
  });
}

if (openBtn) {
  openBtn.addEventListener('click', () => {
    floatBox.classList.remove('hidden');
    song3.volume = 1;
    song3.play();
    meanddy.pause();
  });
}

if (msgBtn) {
  let isRecordedPlaying = false;
  msgBtn.addEventListener('click', () => {
    if (isRecordedPlaying) {
      recorded.pause();
    } else {
      recorded.volume = 1;
      recorded.play();
    }
    isRecordedPlaying = !isRecordedPlaying;
  });
}

if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    song3.pause();
    recorded.pause();
    window.location.href = 'index.html';
  });
    }
