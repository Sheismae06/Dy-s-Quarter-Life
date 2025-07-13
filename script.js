document.addEventListener("DOMContentLoaded", function () {
  const musicToggle = document.querySelector(".music-toggle");
  const bgMusic = document.getElementById("bg-music");
  const backBtn = document.querySelector(".back-btn");

  // Setup background music toggle
  if (musicToggle && bgMusic) {
    const isPlaying = localStorage.getItem("musicPlaying") === "true";

    if (isPlaying) {
      bgMusic.volume = 1.0;
      bgMusic.play().catch(() => {}); // for autoplay restrictions
      musicToggle.classList.add("music-on");
      musicToggle.classList.remove("music-off");
    } else {
      bgMusic.pause();
      musicToggle.classList.add("music-off");
      musicToggle.classList.remove("music-on");
    }

    musicToggle.addEventListener("click", function () {
      if (bgMusic.paused) {
        bgMusic.volume = 1.0;
        bgMusic.play().catch(() => {});
        musicToggle.classList.add("music-on");
        musicToggle.classList.remove("music-off");
        localStorage.setItem("musicPlaying", "true");
      } else {
        bgMusic.pause();
        musicToggle.classList.add("music-off");
        musicToggle.classList.remove("music-on");
        localStorage.setItem("musicPlaying", "false");
      }
    });
  }

  // Back Button
  if (backBtn) {
    backBtn.addEventListener("click", function () {
      history.back();
    });
  }

  // Slideshow logic (album.html)
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const watchBtn = document.getElementById("watch-btn");

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.remove("active-slide");
      if (i === index) {
        s.classList.add("active-slide");
      }
    });

    // Show "Watch" button on last slide
    if (index === slides.length - 1 && watchBtn) {
      watchBtn.style.display = "inline-block";
    } else if (watchBtn) {
      watchBtn.style.display = "none";
    }
  }

  if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 8000); // Change every 8 seconds
  }

  // Play correct song on button click
  const getStartedBtn = document.getElementById("get-started");
  const miniAlbumBtn = document.getElementById("mini-album");
  const openPresentBtn = document.getElementById("open-present");
  const messageRecordedBtn = document.getElementById("message-recorded");
  const soundOfUsBtn = document.getElementById("sound-of-us");

  const song1 = document.getElementById("song1");
  const song2 = document.getElementById("song2");
  const song3 = document.getElementById("song3");
  const meanddy = document.getElementById("meandus");
  const recorded = document.getElementById("recorded");

  if (getStartedBtn && song1) {
    getStartedBtn.addEventListener("click", () => {
      [song2, song3, meanddy, recorded].forEach(a => a && a.pause());
      song1.volume = 1.0;
      song1.loop = true;
      song1.play();
    });
  }

  if (miniAlbumBtn && song2) {
    miniAlbumBtn.addEventListener("click", () => {
      [song1, song3, meanddy, recorded].forEach(a => a && a.pause());
      song2.volume = 1.0;
      song2.loop = true;
      song2.play();
    });
  }

  if (openPresentBtn && song3) {
    openPresentBtn.addEventListener("click", () => {
      [song1, song2, meanddy, recorded].forEach(a => a && a.pause());
      song3.volume = 1.0;
      song3.loop = true;
      song3.play();
    });
  }

  if (messageRecordedBtn && recorded) {
    messageRecordedBtn.addEventListener("click", () => {
      [song1, song2, song3, meanddy].forEach(a => a && a.pause());
      recorded.volume = 1.0;
      recorded.play();
    });
  }

  if (soundOfUsBtn && meanddy) {
    soundOfUsBtn.addEventListener("click", () => {
      [song1, song2, song3, recorded].forEach(a => a && a.pause());
      meanddy.volume = 1.0;
      meanddy.play();
    });
  }
});
