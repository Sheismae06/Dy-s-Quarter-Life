// Audio Elements
const song1 = new Audio('song1-kung-tayo.mp3');
const song2 = new Audio('song2-until-i-found-you.mp3');
const song3 = new Audio('song3-happy-birthday.mp3');
const soundOfUs = document.getElementById('soundOfUs');
const messageAudio = document.getElementById('messageAudio');

// States
let currentSong = null;
let isSoundOfUsPlaying = false;
let isMessageAudioPlaying = false;

// Ensure max volume for all
[song1, song2, song3, soundOfUs, messageAudio].forEach(audio => {
  audio.volume = 1.0;
});

// Auto-play song1 when Get Started is clicked
const getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    stopAllAudio();
    song1.loop = true;
    song1.play();
    currentSong = song1;
    window.location.href = 'letter.html';
  });
}

// Auto-play song2 when Mini Album is clicked
const miniAlbumBtn = document.getElementById('miniAlbumBtn');
if (miniAlbumBtn) {
  miniAlbumBtn.addEventListener('click', () => {
    stopAllAudio();
    song2.loop = true;
    song2.play();
    currentSong = song2;
    window.location.href = 'album.html';
  });
}

// Video page: Sound of Us toggle
const soundBtn = document.getElementById('soundBtn');
if (soundBtn) {
  soundBtn.addEventListener('click', () => {
    if (isSoundOfUsPlaying) {
      soundOfUs.pause();
      soundBtn.classList.remove('playing');
    } else {
      stopAllAudio();
      soundOfUs.currentTime = 0;
      soundOfUs.play();
      soundBtn.classList.add('playing');
    }
    isSoundOfUsPlaying = !isSoundOfUsPlaying;
  });
}

// Open Your Present button logic
const presentBtn = document.getElementById('presentBtn');
const surpriseBox = document.getElementById('surpriseBox');
if (presentBtn && surpriseBox) {
  presentBtn.addEventListener('click', () => {
    stopAllAudio();
    song3.loop = true;
    song3.play();
    surpriseBox.classList.remove('hidden');
    currentSong = song3;
  });
}

// Message Recorded toggle
const recordedBtn = document.getElementById('recordedBtn');
if (recordedBtn) {
  recordedBtn.addEventListener('click', () => {
    if (isMessageAudioPlaying) {
      messageAudio.pause();
      recordedBtn.classList.remove('playing');
    } else {
      stopAllAudio();
      messageAudio.currentTime = 0;
      messageAudio.play();
      recordedBtn.classList.add('playing');
    }
    isMessageAudioPlaying = !isMessageAudioPlaying;
  });
}

// Stop all playing audio
function stopAllAudio() {
  [song1, song2, song3, soundOfUs, messageAudio].forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  isSoundOfUsPlaying = false;
  isMessageAudioPlaying = false;

  // Remove active button effects
  if (soundBtn) soundBtn.classList.remove('playing');
  if (recordedBtn) recordedBtn.classList.remove('playing');
}
