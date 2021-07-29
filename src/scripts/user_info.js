import { appear, disappear } from "./util";
import { graphLogic } from "./graph";

export const receiveUser = () => {
  let userInfo = document.getElementById("user-info")
  let submit = document.getElementById("submit-info")
  let stocks = document.getElementById("stocks")
  let stock = document.getElementsByClassName("stock")
  let chart = document.getElementById("chart-container")
  let investmentInput = document.getElementById("investment")
  let stockBounce = document.getElementById("stock-bounce")
  let stockInfo=document.getElementById("info-container")
  let investmentAmount

  investmentInput.onchange = function(e) { 
    investmentAmount = e.target.value
  }

  userInfo.onsubmit = function(e) {
    e.preventDefault()

    stocks.style.display = "flex"
    stockInfo.style.display = "block"

    stock.forEach(ind => {
      ind.style.webkitAnimation = "pop 2s"
      ind.style.display = "block"
    });

    appear(chart, 1.5)
    userInfo.style.webkitAnimation = "move-left 1.5s"
    userInfo.style.webkitAnimationTimingFunction = "ease-in-out"
    disappear(submit, 1.5)
    chart.style.display = "block"
    stockBounce.style.display = "block"
    
    setTimeout(() => {
      userInfo.style.transform = "translate(-250%, -80%)"
      userInfo.style.width = "175px"
      submit.style.opacity = "0"
      submit.style.cursor = "default"
      graphLogic(investmentAmount)
    }, 1500)
  }
}