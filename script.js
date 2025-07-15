// Define all audio sources  
const audios = {  
  song1: new Audio('audio/song1.mp3'),  
  song2: new Audio('audio/song2.mp3'),  
  song3: new Audio('audio/song3-happy-birthday.mp3'),  
  meanddy: new Audio('audio/meanddy.mp3'),  
  message: new Audio('audio/message.recorded.mp3')  
};  

// Volume & loop  
Object.values(audios).forEach(audio => {  
  audio.volume = 1.0;  
  audio.loop = true;  
});  

// Get and auto-play last playing track  
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

// Set and play new track  
function playTrack(name) {  
  stopAllAudio();  
  if (audios[name]) {  
    audios[name].play();  
    sessionStorage.setItem('playingTrack', name);  
  }  
}  

// Toggle play/pause for toggleable audio
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

// Button click events
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
  setTimeout(() => {
    window.location.href = 'video.html';
  }, 300);
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

// Special controls in video.html
document.getElementById('rhythmBtn')?.addEventListener('click', e => {
  togglePlay('meanddy');
  e.target.classList.toggle('active');
});

document.getElementById('presentBtn')?.addEventListener('click', e => {
  playTrack('song3');
  e.target.classList.add('active');
  document.getElementById('overlay')?.style.display = 'flex';
});

document.getElementById('recordedBtn')?.addEventListener('click', e => {
  togglePlay('message');
  e.target.classList.toggle('active');
});

document.getElementById('homeBtn')?.addEventListener('click', () => {
  stopAllAudio();
  window.location.href = 'index.html';
});
