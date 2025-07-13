// Handle start journey button on index.html
function startJourney() {
  const song1 = document.getElementById('song1');
  if (song1) {
    song1.volume = 1;
    song1.play();
  }
  window.location.href = 'letter.html';
}

// Handle go to album from letter.html
function goToAlbum() {
  const song2 = document.getElementById('song2');
  if (song2) {
    song2.volume = 1;
    song2.play();
  }
  window.location.href = 'album.html';
}

// Handle go to video page from album.html
function goToVideo() {
  window.location.href = 'video.html';
}

// For playing song3 and showing surprise box
function openPresent() {
  const song3 = document.getElementById('song3');
  if (song3) {
    song3.volume = 1;
    song3.play();
  }

  const floating = document.getElementById('presentMessage');
  const content = document.getElementById('videoContent');
  if (floating && content) {
    floating.classList.remove('hidden');
    content.classList.add('blur-bg');
  }
}

// Play audio when "Our private symphony" button is clicked
function playSymphony() {
  const symphony = document.getElementById('video2-audio');
  if (symphony) {
    symphony.volume = 1;
    symphony.play();
  }
}

// Play recorded message in surprise box
function playRecordedMessage() {
  const voice = document.getElementById('voiceMessage');
  if (voice) {
    voice.volume = 1;
    voice.play();

    // Add subtle animation while playing
    const button = document.getElementById('listenBtn');
    if (button) {
      button.style.animation = 'pulse 1.5s infinite';
      voice.onended = () => {
        button.style.animation = 'none';
      };
    }
  }
}

// Handle stopping song2 when video starts playing
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video1');
  const song2 = document.getElementById('song2');
  if (video) {
    video.addEventListener('play', () => {
      if (song2) {
        song2.pause();
      }
    });

    video.addEventListener('pause', () => {
      if (song2 && !document.getElementById('presentMessage')?.classList.contains('hidden')) return;
      if (song2?.paused) {
        song2.play();
      }
    });
  }

  // Show back arrow only on pages except index.html
  const backArrow = document.querySelector('.back-arrow');
  if (backArrow && !location.pathname.endsWith('index.html')) {
    backArrow.style.display = 'block';
  } else if (backArrow) {
    backArrow.style.display = 'none';
  }
});
