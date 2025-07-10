const audioPlayer = document.getElementById('audio-player');
const musicToggle = document.getElementById('music-toggle');
const throwbackBtn = document.getElementById('throwback-btn');
const giftBtn = document.getElementById('gift-btn');
const giftMessage = document.getElementById('gift-message');
const throwbackSection = document.getElementById('throwback-section');

const songs = [
  {
    src: "song1-kung-tayo.mp3",
    loop: true
  },
  {
    src: "song2-until-i-found-you.mp3",
    loop: true
  },
  {
    src: "song3-happy-birthday.mp3",
    loop: false
  }
];

let currentTrack = 0;

function playSong(index) {
  audioPlayer.src = songs[index].src;
  audioPlayer.loop = songs[index].loop;
  audioPlayer.volume = 1.0;
  audioPlayer.play();
  musicToggle.classList.add('playing');
}

musicToggle.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    musicToggle.classList.add('playing');
  } else {
    audioPlayer.pause();
    musicToggle.classList.remove('playing');
  }
});

throwbackBtn.addEventListener('click', () => {
  throwbackSection.style.display = 'block';
  currentTrack = 1;
  playSong(currentTrack);
});

giftBtn.addEventListener('click', () => {
  giftMessage.style.display = 'block';
  currentTrack = 2;
  playSong(currentTrack);
});

window.addEventListener('load', () => {
  playSong(0);
});
