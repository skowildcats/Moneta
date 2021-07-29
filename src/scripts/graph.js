import { fetchData } from "./stock"

export const graphLogic = (investmentAmount) => {
  let stock = document.getElementsByClassName("stock")
  let years, stockData, investment
  let stockBounce = document.getElementById("stock-bounce")
  let stockInfo = document.getElementById("stock-info")
  let investmentInput = document.getElementById("investment")
  let userForm = document.getElementById("user-info")
  investmentAmount ? investment = investmentAmount : investment = 1000 

  investmentInput.onchange = function(e) {
    investment = e.target.value
  }

  for (let i = 0; i < stock.length; i++) {
    stock[i].onclick = function(e) {
      stockInfo.innerHTML = ""
      stockBounce.style.display = "none"
      fetchData(e.target.value).then(data => {
        years = Object.keys(data).reverse()
        stockData = Object.values(data).reverse()
        let returns = []
        let factor = investment / stockData[0]["5. adjusted close"]
        stockData.forEach(ele => {
          returns.push(Math.round(ele["5. adjusted close"] * factor))
        })
        document.getElementById('chart').remove()
        let chart = document.createElement('canvas')
        chart.id = 'chart'
        document.getElementById('chart-container').append(chart);
        plotGraph(years, returns)
      }).catch(e => {
        console.log(e)})
    }
  }

  function plotGraph(years, returns) {
    let chart = document.getElementById('chart')
    let moveOne = document.getElementById('move-one')
    let moveFive = document.getElementById('move-five')
    let fastForward = document.getElementById('fast-forward')

    investmentInput.onchange = function(e) {
      setTimeout(() => {
        console.log('hi')
      }, 1000);
      let oldInvestment = investment
      investment = e.target.value
      let multiplier = investment / oldInvestment
      returns = returns.map(ele => {
        return ele * multiplier
      })
      myChart.config.data.datasets[0].data = myChart.config.data.datasets[0].data.map(ele => {
        return ele * multiplier
      })
      if (myChart.config.data.labels.length > 1) {
        updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1])
      }
      myChart.update()
    }

    userForm.onsubmit = function(e) {
      if (stockBounce.display !== "none") {
        stockBounce.display = "none"
      } 
      e.preventDefault()
    }

    function updateInfo(date, newAmount) {
      let returnPercentage = (((newAmount - investment) / investment) * 100).toFixed(2);
      stockInfo.innerHTML = `On ${date}, your $${investment} is now $${Math.round(newAmount)}, returning ${returnPercentage}%`
    }

    moveOne.onclick = function() {
      if (!years.length <= 0){
        myChart.config.data.labels.push(years.splice(0, 1))
        myChart.config.data.datasets[0].data.push(...returns.splice(0, 1))
        myChart.config.data.labels.length >= 50 ? myChart.config.data.datasets[0].pointRadius = 0 : myChart.config.data.datasets[0].pointRadius = 2
        updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1])
        myChart.update()
      }
    }

    moveFive.onclick = function() {
      myChart.config.data.labels.push(...years.splice(0, 5))
      myChart.config.data.datasets[0].data.push(...returns.splice(0, 5))
      myChart.config.data.labels.length >= 50 ? myChart.config.data.datasets[0].pointRadius = 0 : myChart.config.data.datasets[0].pointRadius = 2
      updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1])
      myChart.update()
    }

    fastForward.onclick = function() {
      myChart.config.data.labels.push(...years.splice(0, years.length))
      myChart.config.data.datasets[0].data.push(...returns.splice(0, returns.length))
      myChart.config.data.labels.length >= 50 ? myChart.config.data.datasets[0].pointRadius = 0 : myChart.config.data.datasets[0].pointRadius = 2
      updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1])
      myChart.update()
    }

    chart.width = "100%"
    chart.height = "100%"
    let ctx = chart.getContext('2d');
    let data = {
      labels: years.splice(0, 1),
      datasets: [{
        backgroundColor: 'black',
        borderColor: 'white',
        data: returns.splice(0, 1),
        tension: .1,
        pointRadius: 2,
        borderWidth: 1,
      }]
    }

    let myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        plugins:{   
          legend: {
            display: false
          },
        },
      },
    });
  }
}

