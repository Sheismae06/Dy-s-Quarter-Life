document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("globalSong");

  // Play the song when "Get Started" is clicked (first time only)
  const startBtn = document.getElementById("getStartedBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      sessionStorage.setItem("playMusic", "true");
    });
  }

  // If session says to play music, do it
  if (sessionStorage.getItem("playMusic") === "true" && audio) {
    // Play only if not already playing
    if (audio.paused) {
      audio.loop = true;
      audio.volume = 0.9;
      audio.play().catch(err => {
        console.warn("Autoplay blocked:", err);
      });
    }
  }

  // Stop music ONLY on video page when video is clicked
  if (window.location.pathname.includes("video.html")) {
    const video = document.querySelector("video");
    if (video && audio) {
      video.addEventListener("play", () => {
        audio.pause();
        audio.currentTime = 0;
        sessionStorage.removeItem("playMusic");
      });
    }
  }
});
