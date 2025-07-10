// Music Tracks const song1 = new Audio("https://sndup.net/fpf9/d"); // Kung Tayo Ay Matanda Na const song2 = new Audio("https://sndup.net/ftsc/d"); // Until I Found You const song3 = new Audio("https://sndup.net/fz2g/d"); // Happy Birthday

const musicToggle = document.getElementById("music-toggle"); const throwbackBtn = document.getElementById("throwback-btn"); const backToStartBtn = document.getElementById("back-to-start-btn"); const giftBtn = document.getElementById("gift-btn"); const giftMessage = document.getElementById("gift-message"); const throwbackSection = document.querySelector(".throwback-section");

let currentSong = song1; let isPlaying = false;

// Setup [song1, song2, song3].forEach(song => { song.loop = true; song.volume = 1; });

// Auto-play song 1 on page load window.addEventListener("load", () => { currentSong.play(); isPlaying = true; musicToggle.classList.add("playing"); });

// Music icon toggle musicToggle.addEventListener("click", () => { if (isPlaying) { currentSong.pause(); musicToggle.classList.remove("playing"); } else { currentSong.play(); musicToggle.classList.add("playing"); } isPlaying = !isPlaying; });

// Let's Throwback Button throwbackBtn.addEventListener("click", () => { currentSong.pause(); currentSong = song2; currentSong.currentTime = 0; currentSong.play(); isPlaying = true; musicToggle.classList.add("playing"); throwbackSection.classList.add("show"); throwbackBtn.style.display = "none"; });

// Back to Start Button backToStartBtn.addEventListener("click", () => { currentSong.pause(); currentSong = song1; currentSong.currentTime = 0; currentSong.play(); isPlaying = true; musicToggle.classList.add("playing"); throwbackSection.classList.remove("show"); throwbackBtn.style.display = "block"; giftMessage.style.display = "none"; });

// Open Your Present Button giftBtn.addEventListener("click", () => { currentSong.pause(); currentSong = song3; currentSong.currentTime = 0; currentSong.play(); isPlaying = true; giftMessage.style.display = "block"; musicToggle.classList.add("playing"); });

