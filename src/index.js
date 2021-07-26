document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  let canvasCtx = canvas.getContext("2d");

  canvasCtx.fillStyle = 'black';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height)
  let start = document.getElementById("start")
  let initial = document.getElementById("initial")

  start.onclick = function() {
    initial.style.webkitAnimation = "disappear 2s"
    setTimeout(() => {
      initial.style.display = "none"
    }, 2000);
  }
})