// Audio elements
const audioKungTayo = new Audio('audios/song1-kung-tayo.mp3');
const audioUntilIFoundYou = new Audio('audios/song2-until-i-found-you.mp3');
const audioMeAndDy = new Audio('audios/meanddy.mp3');
const audioHappyBirthday = new Audio('audios/song3-happy-birthday.mp3');
const audioMessage = new Audio('audios/message.recorded.mp3');

// Video element
const video = document.getElementById("ourVideo");

// Keep track of currently playing audio
let currentlyPlaying = null;

// Helper function to play audio
function playAudio(audio) {
    if (currentlyPlaying && currentlyPlaying !== audio) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
    }
    if (currentlyPlaying === audio && !audio.paused) {
        audio.pause();
        currentlyPlaying = null;
    } else {
        audio.play();
        currentlyPlaying = audio;
    }
}

// Button event listeners
document.getElementById("getStartedBtn")?.addEventListener("click", () => {
    playAudio(audioKungTayo);
});

document.getElementById("miniAlbumBtn")?.addEventListener("click", () => {
    if (!audioUntilIFoundYou.paused) return; // Prevent restarting
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
    }
    audioUntilIFoundYou.play();
    currentlyPlaying = audioUntilIFoundYou;
});

video?.addEventListener("play", () => {
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
    }
    currentlyPlaying = null;
});

document.getElementById("ourRhythmBtn")?.addEventListener("click", () => {
    playAudio(audioMeAndDy);
});

document.getElementById("openNowBtn")?.addEventListener("click", () => {
    playAudio(audioHappyBirthday);
});

document.getElementById("messageRecordedBtn")?.addEventListener("click", () => {
    playAudio(audioMessage);
});

document.getElementById("backToHomeBtn")?.addEventListener("click", () => {
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
        currentlyPlaying = null;
    }
});
