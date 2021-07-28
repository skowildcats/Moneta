import { appear, disappear } from "./util";
import { fetchData } from "./stock";

export const receiveUser = () => {
  let userInfo = document.getElementById("user-info")
  let submit = document.getElementById("submit-info")
  let infoHeader = document.getElementById("info-header")
  let stocks = document.getElementById("stocks")
  let stock = document.getElementsByClassName("stock")


  userInfo.onsubmit = function(e) {
    e.preventDefault()
    appear(stocks, 1.5)
    userInfo.style.webkitAnimation = "move-left 1.5s"
    userInfo.style.webkitAnimationTimingFunction = "ease-in-out"
    disappear(submit, 1.5)
    disappear(infoHeader, 1.5)
    stocks.style.display = "flex"
    
    setTimeout(() => {
      userInfo.style.transform = "translate(-250%, -50%)"
      userInfo.style.width = "175px"
      submit.style.display = "none"
      infoHeader.style.display = "none"
    }, 1500)

    for (let i = 0; i < stock.length; i++) {
      stock[i].onclick = function(e) {
        let returns 
        fetchData(e.target.value).then(data => {returns = data})
        setTimeout(() => {
          console.log(returns)
        }, 500);
      }
    }
  }
}