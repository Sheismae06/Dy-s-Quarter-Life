const musicIcon = document.getElementById('music-toggle');
const audio = document.getElementById('audio');
let currentTrack = 1;

const playTrack = (src) => {
  audio.src = src;
  audio.play();
  musicIcon.classList.add('playing');
};

musicIcon.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicIcon.classList.add('playing');
  } else {
    audio.pause();
    musicIcon.classList.remove('playing');
  }
});

document.getElementById('ready-btn').addEventListener('click', () => {
  document.getElementById('intro-screen').classList.add('hidden');
  document.getElementById('letter-screen').classList.remove('hidden');
  playTrack('song1-kung-tayo.mp3');
});

document.getElementById('throwback-btn').addEventListener('click', () => {
  document.getElementById('letter-screen').classList.add('hidden');
  document.getElementById('gallery-screen').classList.remove('hidden');
  playTrack('song2-until-i-found-you.mp3');
});

document.getElementById('present-btn').addEventListener('click', () => {
  document.getElementById('gallery-screen').classList.add('hidden');
  document.getElementById('present-screen').classList.remove('hidden');
  playTrack('song3-happy-birthday.mp3');
});