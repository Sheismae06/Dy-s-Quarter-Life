// Define all audio sources  
const audios = {  
  song1: new Audio('audio/song1.mp3'),  
  song2: new Audio('audio/song2.mp3'),  
  song3: new Audio('audio/song3.mp3'),  
  meanddy: new Audio('audio/meanddy.mp3'),  
  message: new Audio('audio/message-recorded.mp3')  
};  
  
// Volume & loop  
Object.values(audios).forEach(audio => {  
  audio.volume = 1.0;  
  audio.loop = true;  
});  
  
// Get stored song  
const currentTrack = sessionStorage.getItem('playingTrack');  
if (currentTrack && audios[currentTrack]) {  
  audios[currentTrack].play().catch(() => {});  
}  
  
// Stop all songs  
function stopAllAudio() {  
  Object.values(audios).forEach(audio => {  
    audio.pause();  
    audio.currentTime = 0;  
  });  
  sessionStorage.removeItem('playingTrack');  
}  
  
// Set and play track  
function playTrack(name) {  
  stopAllAudio();  
  if (audios[name]) {  
    audios[name].play();  
    sessionStorage.setItem('playingTrack', name);  
  }  
}  
  
// Toggle function for meanddy and message buttons  
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
  }, 300); // Small delay to keep the animation smooth
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
