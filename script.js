// script.js

let currentSong = null;

function playSong(id) {
  if (currentSong && currentSong !== id) {
    document.getElementById(currentSong).pause();
  }
  const song = document.getElementById(id);
  if (song) {
    song.volume = 1.0;
    song.play();
    currentSong = id;
  }
}

function startJourney() {
  playSong("song1");
  window.location.href = "letter.html";
}

function goToAlbum() {
  playSong("song2");
  window.location.href = "album.html";
}

function goToVideo() {
  window.location.href = "video.html";
}

function playVideo2Sound() {
  const audio = document.getElementById("video2sound");
  if (audio) {
    audio.volume = 1.0;
    audio.play();
  }
}

function openSurpriseBox() {
  playSong("song3");
  const box = document.getElementById("surpriseBox");
  if (box) {
    box.classList.remove("hidden");
  }
}

function playRecordedMessage() {
  if (currentSong) {
    const old = document.getElementById(currentSong);
    if (old) old.pause();
  }
  const recorder = document.getElementById("recorder");
  if (recorder) {
    recorder.volume = 1.0;
    recorder.play();
  }
}

function goHome() {
  if (currentSong) {
    const playing = document.getElementById(currentSong);
    if (playing) playing.pause();
  }
  const recorder = document.getElementById("recorder");
  if (recorder) recorder.pause();
  window.location.href = "index.html";
}

function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
  const audio1 = document.getElementById("song1");
  const audio2 = document.getElementById("song2");
  const audio3 = document.getElementById("song3");
  if (audio1) currentSong = "song1";
  if (audio2) currentSong = "song2";
  if (audio3) currentSong = "song3";
});
