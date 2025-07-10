const audioPlayer = document.getElementById('audio-player');
const musicToggle = document.getElementById('music-toggle');
const throwbackBtn = document.getElementById('throwback-btn');
const giftBtn = document.getElementById('gift-btn');
const giftMessage = document.getElementById('gift-message');
const throwbackSection = document.getElementById('throwback-section');

const songs = [
  {
    src: "https://dl.sndup.net/6nhp/Kung%20Tayo%E2%80%99y%20Matanda%20Na.mp3",
    loop: true
  },
  {
    src: "https://dl.sndup.net/xz9q/Until%20I%20Found%20You.mp3",
    loop: true
  },
  {
    src: "https://dl.sndup.net/8v3k/Happy%20Birthday%20To%20You.mp3",
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
