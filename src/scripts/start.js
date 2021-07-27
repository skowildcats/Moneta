import { receiveUser } from "./user_info";
import { appear, disappear } from "./util";

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
    disappear(introduction, 1.5)
    appear(userInfo, 3.5)
    
    userInfo.style.display = "flex"
    setTimeout(() => {
      introduction.style.display = "none"
    }, 1500);
    receiveUser()
  }

}