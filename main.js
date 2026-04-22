const audio = document.getElementById("audio");
audio.loop = true;
audio.volume = 0.05;
audio.muted = false;

function startAudio() {
    audio.play();
}
document.addEventListener("click", startAudio, { once: true });