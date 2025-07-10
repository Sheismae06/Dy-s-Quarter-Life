// MUSIC AUTOPLAY AND TOGGLE
const musicToggle = document.getElementById('music-toggle');
const audio = new Audio('https://dl.sndup.net/dj4z/KungTayoAyMatandaNa.mp3');
audio.loop = true;
audio.volume = 1;
audio.autoplay = true;

// Autoplay on load
window.addEventListener('load', () => {
  audio.play().catch(() => {
    // Autoplay might be blocked until user interacts
  });
});

// Toggle mute/unmute
musicToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicToggle.classList.remove('muted');
  } else {
    audio.pause();
    musicToggle.classList.add('muted');
  }
});

// THROWBACK BUTTON TOGGLE
const throwbackBtn = document.getElementById('throwback-btn');
const throwbackSection = document.getElementById('throwback-section');

if (throwbackBtn && throwbackSection) {
  throwbackBtn.addEventListener('click', () => {
    throwbackSection.classList.toggle('show');
  });
}
