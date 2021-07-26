export const startDemo = () => {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  let canvasCtx = canvas.getContext("2d");

  canvasCtx.fillStyle = 'black';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height)
  let start = document.getElementById("start")
  let introduction = document.getElementById("introduction")

  start.onclick = function() {
    introduction.style.webkitAnimation = "disappear 2s"
    setTimeout(() => {
      introduction.style.display = "none"
    }, 2000);
  }
}