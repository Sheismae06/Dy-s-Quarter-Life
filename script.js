const song1 = new Audio('audio/kung_tayo_ay_matanda_na.mp3');
const song2 = new Audio('audio/until_i_found_you.mp3');
const song3 = new Audio('audio/happy_birthday.mp3');

document.getElementById('start-btn').onclick = () => {
  document.getElementById('ready-screen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  song1.play();
  document.getElementById('music-toggle').classList.add('playing');
};

document.getElementById('throwback-btn').onclick = () => {
  song1.pause();
  song2.play();
  document.getElementById('memories').classList.remove('hidden');
};

document.getElementById('present-btn').onclick = () => {
  song2.pause();
  song3.play();
  document.getElementById('popup').classList.remove('hidden');
};

document.getElementById('music-toggle').onclick = () => {
  if (!song1.paused) { song1.pause(); song2.pause(); song3.pause(); }
  else { song1.play(); }
};