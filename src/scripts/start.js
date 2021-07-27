import { receiveUser } from "./user_info";

export const startDemo = () => {
  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
  let canvasCtx = canvas.getContext("2d");

  canvasCtx.fillStyle = 'black';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height)


  let start = document.getElementById("start")
  let introduction = document.getElementById("introduction")
  let userInfo = document.getElementById("user-info")

  start.onclick = function() {
    introduction.style.webkitAnimation = "disappear 1.5s"
    introduction.style.webkitAnimationTimingFunction = "ease-out"

    userInfo.style.webkitAnimation = "appear 3.5s"
    userInfo.style.webkitAnimationTimingFunction = "ease-in"
    userInfo.style.display = "flex"
    setTimeout(() => {
      introduction.style.display = "none"
    }, 1500);
    receiveUser()
  }

}