// Get started button (plays song 1, shows letter.html)
document.getElementById('startBtn')?.addEventListener('click', () => {
  const audio = new Audio('song1-kung-tayo.mp3');
  audio.volume = 1;
  audio.play();
  setTimeout(() => {
    window.location.href = 'letter.html';
  }, 1000); // allow time to start audio
});

// Mini Album button (plays song 2, goes to album.html)
document.getElementById('albumBtn')?.addEventListener('click', () => {
  const song2 = new Audio('song2-until-i-found-you.mp3');
  song2.volume = 1;
  song2.loop = true;
  song2.play();

  // Pause song when any video starts
  const pauseSongOnVideo = () => song2.pause();
  const resumeSongAfterVideo = () => song2.play();

  localStorage.setItem('song2Playing', 'true'); // pass info across page
  window.location.href = 'album.html';
});

// Handle song 2 in album.html
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('album.html') && localStorage.getItem('song2Playing') === 'true') {
    const song2 = new Audio('song2-until-i-found-you.mp3');
    song2.volume = 1;
    song2.loop = true;
    song2.play();

    // Pause when video plays
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('play', () => song2.pause());
      video.addEventListener('pause', () => song2.play());
    });

    // Clear on navigation
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('song2Playing');
    });
  }
});

// Show floating box on Open Present button in video.html
document.getElementById('presentBtn')?.addEventListener('click', () => {
  const floatBox = document.getElementById('presentMessage');
  const song3 = new Audio('song3-happy-birthday.mp3');
  song3.volume = 1;
  floatBox.style.display = 'flex';
  song3.play();
});

// Play voice message only when clicked
document.getElementById('listenBtn')?.addEventListener('click', () => {
  const voice = new Audio('message recorded.mp3');
  voice.volume = 1;
  voice.play();
});
