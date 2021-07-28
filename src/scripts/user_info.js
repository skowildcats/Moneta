import { appear, disappear } from "./util";
import { graphLogic } from "./graph";

export const receiveUser = () => {
  let userInfo = document.getElementById("user-info")
  let submit = document.getElementById("submit-info")
  let infoHeader = document.getElementById("info-header")
  let stock = document.getElementsByClassName("stock")
  let chart = document.getElementById("chart-container")
  let investmentInput = document.getElementById("investment")
  let investmentAmount

  investmentInput.onchange = function(e) { 
    investmentAmount = e.target.value
  }

  userInfo.onsubmit = function(e) {
    e.preventDefault()

    stock.forEach(ind => {
      ind.style.webkitAnimation = "pop 2s"
      ind.style.display = "block"
    });

    appear(chart, 1.5)
    userInfo.style.webkitAnimation = "move-left 1.5s"
    userInfo.style.webkitAnimationTimingFunction = "ease-in-out"
    disappear(submit, 1.5)
    disappear(infoHeader, 1.5)
    chart.style.display = "block"
    
    setTimeout(() => {
      userInfo.style.transform = "translate(-250%, -50%)"
      userInfo.style.width = "175px"
      submit.style.opacity = "0"
      submit.style.cursor = "default"
      infoHeader.style.display = "none"
      graphLogic(investmentAmount)
    }, 1500)
  }
}