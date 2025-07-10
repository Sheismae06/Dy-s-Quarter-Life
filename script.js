// MUSIC TOGGLE LOGIC
const music = document.getElementById("bg-music");
music.volume = 1.0; // Max volume

const toggleBtn = document.getElementById("music-toggle");

let isPlaying = true;
toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.classList.add("muted");
  } else {
    music.play();
    toggleBtn.classList.remove("muted");
  }
  isPlaying = !isPlaying;
});

// FADE-IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -30px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
