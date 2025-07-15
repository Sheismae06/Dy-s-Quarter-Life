const audios = {
  song1: new Audio('audio/song1-kung-tayo.mp3'),
  song2: new Audio('audio/song2-until-i-found-you.mp3'),
  song3: new Audio('audio/song3-happy-birthday.mp3'),
  meanddy: new Audio('audio/meanddy.mp3'),
  message: new Audio('audio/message.recorded.mp3'),
};

Object.values(audios).forEach(audio => {
  audio.loop = true;
  audio.volume = 1.0;
});

let currentTrack = sessionStorage.getItem('playingTrack');
if (currentTrack && audios[currentTrack]) {
  audios[currentTrack].play().catch(() => {});
}

function stopAllAudio() {
  Object.values(audios).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  sessionStorage.removeItem('playingTrack');
  currentTrack = null;
}

function playTrack(name) {
  stopAllAudio();
  if (audios[name]) {
    audios[name].volume = 1.0;
    audios[name].play();
    sessionStorage.setItem('playingTrack', name);
    currentTrack = name;
  }
}

function toggleAudio(name) {
  const audio = audios[name];
  if (!audio) return;

  if (audio.paused) {
    stopAllAudio();
    audio.volume = 1.0;
    audio.play();
    sessionStorage.setItem('playingTrack', name);
    currentTrack = name;
  } else {
    audio.pause();
    audio.currentTime = 0;
    sessionStorage.removeItem('playingTrack');
    currentTrack = null;
  }
}

document.getElementById('btn-start')?.addEventListener('click', e => {
  playTrack('song1');
  e.target.classList.add('clicked');
});

document.getElementById('btn-album')?.addEventListener('click', e => {
  playTrack('song2');
  e.target.classList.add('clicked');
  setTimeout(() => window.location.href = 'album.html', 300);
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
  toggleAudio('meanddy');
  e.target.classList.toggle('clicked');
});

document.getElementById('btn-message')?.addEventListener('click', e => {
  toggleAudio('message');
  e.target.classList.toggle('clicked');
});

document.getElementById('btn-home')?.addEventListener('click', () => {
  stopAllAudio();
  window.location.href = 'index.html';
});
