document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  let canvasCtx = canvas.getContext("2d");

  canvasCtx.fillStyle = 'green';
  canvasCtx.fillRect(10, 10, 150, 100);
})