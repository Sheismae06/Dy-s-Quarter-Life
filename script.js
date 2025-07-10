
let song1 = new Audio('song1-kung-tayo.mp3');
let song2 = new Audio('song2-until-i-found-you.mp3');
let song3 = new Audio('song3-happy-birthday.mp3');
song1.volume = 1;
song2.volume = 1;
song3.volume = 1;

const musicToggle = document.getElementById('music-toggle');
const startBtn = document.getElementById('start-btn');
const readyScreen = document.getElementById('ready-screen');
const mainContent = document.getElementById('main-content');
const showMemoriesBtn = document.getElementById('show-memories-btn');
const memories = document.getElementById('memories');
const finalBtn = document.getElementById('final-btn');
const popup = document.getElementById('popup');

startBtn.addEventListener('click', () => {
  readyScreen.style.display = 'none';
  mainContent.classList.remove('hidden');
  song1.play();
  musicToggle.classList.add('playing');
});

showMemoriesBtn.addEventListener('click', () => {
  song1.pause();
  song2.play();
  memories.classList.remove('hidden');
});

finalBtn.addEventListener('click', () => {
  song2.pause();
  song3.play();
  popup.classList.remove('hidden');
});

musicToggle.addEventListener('click', () => {
  if (!song1.paused) {
    song1.pause();
    musicToggle.classList.remove('playing');
  } else {
    song1.play();
    musicToggle.classList.add('playing');
  }
});
