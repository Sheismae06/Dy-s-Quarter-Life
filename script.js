
document.addEventListener('DOMContentLoaded', () => {
  const musicToggle = document.getElementById('music-toggle');
  const bgMusic = document.getElementById('bg-music');
  const song2 = document.getElementById('song2');
  const song3 = document.getElementById('song3');
  const readyBtn = document.getElementById('ready-btn');
  const mainContent = document.getElementById('main-content');
  const introScreen = document.getElementById('intro-screen');
  const throwbackBtn = document.getElementById('throwback-btn');
  const presentBtn = document.getElementById('present-btn');
  const throwbackSection = document.getElementById('throwback-section');
  const surpriseMessage = document.getElementById('surprise-message');

  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.classList.add('playing');
      musicToggle.classList.remove('muted');
    } else {
      bgMusic.pause();
      musicToggle.classList.remove('playing');
      musicToggle.classList.add('muted');
    }
  });

  readyBtn.addEventListener('click', () => {
    introScreen.style.display = 'none';
    mainContent.style.display = 'block';
    bgMusic.play();
    musicToggle.classList.add('playing');
  });

  throwbackBtn.addEventListener('click', () => {
    bgMusic.pause();
    song2.play();
    throwbackSection.classList.remove('hidden');
    throwbackBtn.classList.add('hidden');
    presentBtn.classList.remove('hidden');
  });

  presentBtn.addEventListener('click', () => {
    song2.pause();
    song3.play();
    surpriseMessage.classList.remove('hidden');
    presentBtn.classList.add('hidden');
  });
});
