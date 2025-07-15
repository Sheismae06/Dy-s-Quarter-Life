// Audio sources
const audios = {
  song1: new Audio('audio/song1.mp3'),           // Get Started
  song2: new Audio('audio/song2.mp3'),           // Mini Album
  song3: new Audio('audio/song3.mp3'),           // Open It Now
  meanddy: new Audio('audio/meanddy.mp3'),       // Our Rhythm
  message: new Audio('audio/message-recorded.mp3') // Message Recorded
};

// Loop and volume
Object.values(audios).forEach(audio => {
  audio.volume = 1.0;
  audio.loop = true;
});

// Persist audio after refresh/page switch
const currentTrack = sessionStorage.getItem('playingTrack');
if (currentTrack && audios[currentTrack]) {
  audios[currentTrack].play().catch(() => {});
}

// Stop all audio
function stopAllAudio() {
  Object.values(audios).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  sessionStorage.removeItem('playingTrack');
}

// Play a specific track
function playTrack(name) {
  stopAllAudio();
  if (audios[name]) {
    audios[name].play();
    sessionStorage.setItem('playingTrack', name);
  }
}

// Toggle a track on/off (for meanddy or message)
function togglePlay(name) {
  const audio = audios[name];
  if (audio.paused) {
    stopAllAudio();
    audio.play();
    sessionStorage.setItem('playingTrack', name);
  } else {
    audio.pause();
    audio.currentTime = 0;
    sessionStorage.removeItem('playingTrack');
  }
}

// BUTTON EVENTS
document.getElementById('btn-start')?.addEventListener('click', e => {
  playTrack('song1');
  e.target.classList.add('clicked');
});

document.getElementById('btn-album')?.addEventListener('click', e => {
  playTrack('song2');
  e.target.classList.add('clicked');
  setTimeout(() => {
    window.location.href = 'album.html';
  }, 300);
});

document.getElementById('btn-video')?.addEventListener('click', e => {
  stopAllAudio();
  e.target.classList.add('clicked');
});

document.getElementById('btn-present')?.addEventListener('click', e => {
  playTrack('song3');
  e.target.classList.add('clicked');
});

document.getElementById('btn-soundus')?.addEventListener('click', e => {
  togglePlay('meanddy');
  e.target.classList.toggle('clicked');
});

document.getElementById('btn-message')?.addEventListener('click', e => {
  togglePlay('message');
  e.target.classList.toggle('clicked');
});

document.getElementById('btn-home')?.addEventListener('click', () => {
  stopAllAudio();
  window.location.href = 'index.html';
});
