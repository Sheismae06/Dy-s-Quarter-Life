// Define all audio sources  
const audios = {  
  song1: new Audio('audio/song1.mp3'),  
  song2: new Audio('audio/song2.mp3'),  
  song3: new Audio('audio/song3.mp3'),  
  meanddy: new Audio('audio/meanddy.mp3'),  
  message: new Audio('audio/message-recorded.mp3')  
};

// Set loop and full volume for all  
Object.values(audios).forEach(audio => {
  audio.loop = true;
  audio.volume = 1.0;
});

// Restore playing audio if user switches pages  
const currentTrack = sessionStorage.getItem('playingTrack');
if (currentTrack && audios[currentTrack]) {
  audios[currentTrack].play().catch(() => {});
}

// Stop all playing audio  
function stopAllAudio() {
  Object.values(audios).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  sessionStorage.removeItem('playingTrack');
}

// Play a new track  
function playTrack(name) {
  stopAllAudio();
  if (audios[name]) {
    audios[name].play();
    sessionStorage.setItem('playingTrack', name);
  }
}

// Toggle track (used for meanddy and message)  
function toggleTrack(name) {
  const audio = audios[name];
  if (!audio) return;

  const isPlaying = !audio.paused;

  stopAllAudio();

  if (!isPlaying) {
    audio.play();
    sessionStorage.setItem('playingTrack', name);
  }
}

// Button bindings  
document.getElementById('btn-start')?.addEventListener('click', e => {
  playTrack('song1');
  e.target.classList.add('clicked');
  setTimeout(() => {
    window.location.href = 'letter.html';
  }, 300);
});

document.getElementById('btn-album')?.addEventListener('click', e => {
  playTrack('song2');
  e.target.classList.add('clicked');
  setTimeout(() => {
    window.location.href = 'album.html';
  }, 300);
});

document.getElementById('btn-watch')?.addEventListener('click', e => {
  stopAllAudio();
  e.target.classList.add('clicked');
  setTimeout(() => {
    window.location.href = 'video.html';
  }, 300);
});

document.getElementById('btn-soundus')?.addEventListener('click', e => {
  toggleTrack('meanddy');
  e.target.classList.toggle('clicked');
});

document.getElementById('btn-present')?.addEventListener('click', e => {
  playTrack('song3');
  document.getElementById('overlay')?.classList.add('visible');
  e.target.classList.add('clicked');
});

document.getElementById('btn-message')?.addEventListener('click', e => {
  toggleTrack('message');
  e.target.classList.toggle('clicked');
});

document.getElementById('btn-home')?.addEventListener('click', () => {
  stopAllAudio();
  window.location.href = 'index.html';
});
