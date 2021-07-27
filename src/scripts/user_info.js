import { appear, disappear } from "./util";

export const receiveUser = () => {
  let userInfo = document.getElementById("user-info")
  let submit = document.getElementById("submit-info")
  let infoHeader = document.getElementById("info-header")


  userInfo.onsubmit = function(e) {
    e.preventDefault()
    userInfo.style.webkitAnimation = "move-left 1.5s"
    userInfo.style.webkitAnimationTimingFunction = "ease-in-out"
    disappear(submit, 1.5)
    disappear(infoHeader, 1.5)
    
    setTimeout(() => {
      userInfo.style.transform = "translate(-250%, -50%)"
      userInfo.style.width = "175px"
      submit.style.display = "none"
      infoHeader.style.display = "none"
    }, 1500)
  }
}