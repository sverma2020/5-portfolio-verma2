var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function fsVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}