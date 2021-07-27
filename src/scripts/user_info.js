export const receiveUser = () => {
  let userInfo = document.getElementById("user-info")
  let submit = document.getElementById("submit-info")


  userInfo.onsubmit = function(e) {
    e.preventDefault()
    userInfo.style.webkitAnimation = "move-left 1.5s"
    userInfo.style.webkitAnimationTimingFunction = "ease-in-out "
    submit.style.webkitAnimation = "disappear 1.5s"
    submit.style.webkitAnimationTimingFunction = "ease-out"
    setTimeout(() => {
      userInfo.style.transform = "translate(-150%, -50%)"
      submit.style.display = "none"
    }, 1500)
  }
}