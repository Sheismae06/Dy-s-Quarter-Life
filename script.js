// Background Music Toggle Logic
const pianoIcon = document.getElementById('piano-icon');
const music = new Audio('song1-kung-tayo.mp3');
music.loop = true;
music.volume = 1;

let musicOn = false;

if (pianoIcon) {
  pianoIcon.addEventListener('click', () => {
    musicOn = !musicOn;
    if (musicOn) {
      music.play();
      pianoIcon.classList.add('playing');
      pianoIcon.innerHTML = `<svg width="24" height="24" fill="#D4AF37" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h2v16H4V4zm4 0h2v16H8V4zm4 0h2v16h-2V4zm4 0h2v16h-2V4z"/></svg>`;
    } else {
      music.pause();
      pianoIcon.classList.remove('playing');
      pianoIcon.innerHTML = `<svg width="24" height="24" fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h2v16H4V4zm4 0h2v16H8V4zm4 0h2v16h-2V4zm4 0h2v16h-2V4z"/><line x1="2" y1="2" x2="22" y2="22" stroke="#D4AF37" stroke-width="2"/></svg>`;
    }
  });
}

// Mini Album Song Switch (song2)
const miniAlbumBtn = document.getElementById('miniAlbumBtn');
if (miniAlbumBtn) {
  miniAlbumBtn.addEventListener('click', () => {
    music.pause();
    music.src = 'song2-until-i-found-you.mp3';
    music.play();
    musicOn = true;
    if (pianoIcon) {
      pianoIcon.innerHTML = `<svg width="24" height="24" fill="#D4AF37" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h2v16H4V4zm4 0h2v16H8V4zm4 0h2v16h-2V4zm4 0h2v16h-2V4z"/></svg>`;
    }
  });
}

// “Get Started” Auto Play Music
const startBtn = document.getElementById('startBtn');
if (startBtn) {
  startBtn.addEventListener('click', () => {
    music.src = 'song1-kung-tayo.mp3';
    music.play();
    musicOn = true;
    if (pianoIcon) {
      pianoIcon.innerHTML = `<svg width="24" height="24" fill="#D4AF37" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h2v16H4V4zm4 0h2v16H8V4zm4 0h2v16h-2V4zm4 0h2v16h-2V4z"/></svg>`;
    }
  });
}

// Mobile Nav Toggle (if using hamburger menu)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Back Button Behavior
const backBtn = document.getElementById('backBtn');
if (backBtn) {
  backBtn.addEventListener('click', () => {
    window.history.back();
  });
}

// Crisp Chat (optional)
window.$crisp = [];
window.CRISP_WEBSITE_ID = "9441e2e2-d7b3-4e29-bf1f-496bc3dfad92";
(function () {
  const d = document;
  const s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();
