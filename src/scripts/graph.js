import { fetchData, fetchIndex } from "./stock"
import { appear } from "./util";

export const graphLogic = (investmentAmount) => {
  let stock = document.getElementsByClassName("stock")
  let years, stockData, investment, indexData, currentStock
  let stockBounce = document.getElementById("stock-bounce")
  let stockInfo = document.getElementById("stock-info")
  let indexInfo = document.getElementById("index-info")
  let investmentInput = document.getElementById("investment")
  let userForm = document.getElementById("user-info")
  let chartButtons = document.getElementById("chart-buttons")
  investmentAmount ? investment = investmentAmount : investment = 1000 

  investmentInput.onchange = function(e) {
    investment = e.target.value
  }

  fetchIndex().then(data => {
    indexData = Object.values(data)
  })

  for (let i = 0; i < stock.length; i++) {
    stock[i].onclick = function(e) {
      currentStock = e.target.value

      for (let i = 0; i < stock.length; i++) {
        stock[i].style.boxShadow = "0px 2px 5px white"
      }
      stock[i].style.boxShadow = "0px 0px 30px white"

      if (chartButtons.style.display !== "block") {
        appear(chartButtons, .5)
        setTimeout(() => {
          chartButtons.style.display = "block"
        }, 500);
      }

      stockInfo.innerHTML = ""
      stockBounce.style.display = "none"
      fetchData(e.target.value).then(data => {
        years = Object.keys(data).reverse()
        stockData = Object.values(data).reverse()
        let formatIndex = indexData.slice(0, stockData.length).reverse()
        let returns = []
        let indexReturns = []
        let factor = investment / stockData[0]["5. adjusted close"]
        let indexFactor = investment / formatIndex[0]["5. adjusted close"]
        stockData.forEach(ele => {
          returns.push(Math.round(ele["5. adjusted close"] * factor))
        })
        formatIndex.forEach(ele => {
          indexReturns.push(Math.round(ele["5. adjusted close"] * indexFactor))
        })
        document.getElementById('chart').remove()
        let chart = document.createElement('canvas')
        chart.id = 'chart'
        document.getElementById('chart-container').append(chart);
        plotGraph(years, returns, indexReturns)
      }).catch(e => {
        console.log(e)})
    }
  }

  function plotGraph(years, returns, indexReturns) {
    let chart = document.getElementById('chart')
    let moveOne = document.getElementById('move-one')
    let moveFive = document.getElementById('move-five')
    let fastForward = document.getElementById('fast-forward')

    investmentInput.onchange = function(e) {
      let oldInvestment = investment
      investment = e.target.value
      let multiplier = investment / oldInvestment
      returns = returns.map(ele => {
        return Math.round(ele * multiplier)
      })
      indexReturns = indexReturns.map(ele => {
        return Math.round(ele * multiplier)
      })
      myChart.config.data.datasets[0].data = myChart.config.data.datasets[0].data.map(ele => {
        return Math.round(ele * multiplier)
      })
      myChart.config.data.datasets[1].data = myChart.config.data.datasets[1].data.map(ele => {
        return Math.round(ele * multiplier)
      })
      if (myChart.config.data.labels.length > 1) {
        updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1],
          myChart.config.data.datasets[1].data[myChart.config.data.datasets[1].data.length - 1])
      }
      myChart.update()
    }

    userForm.onsubmit = function(e) {
      if (stockBounce.style.display !== "none") {
        stockBounce.styel.display = "none"
      } 
      e.preventDefault()
    }

    function updateInfo(date, newAmount, indexAmount) {
      let returnPercentage = (((newAmount - investment) / investment) * 100).toFixed(2);
      let indexReturnPercentage = (((indexAmount - investment) / investment) * 100).toFixed(2);
      let annualReturns = ""
      let annualIndexReturns = ""
      if (years.length <= 0) {
        let periodYears = (myChart.config.data.labels.length - 1) / 12
        annualReturns = ((Math.pow((1 + ((newAmount - investment) / investment)), (1 / periodYears)) - 1) * 100).toFixed(2);
        annualIndexReturns = ((Math.pow((1 + ((indexAmount - investment) / investment)), (1 / periodYears)) - 1) * 100).toFixed(2);
        annualReturns = annualReturns.toString() + "% annually and "
        annualIndexReturns = annualIndexReturns.toString() + "% annually and "
      }
      stockInfo.innerHTML = `On ${date}, your $${investment} is now $${Math.round(newAmount)}, 
      returning ${annualReturns} ${returnPercentage}% in total over this period.`
      indexInfo.innerHTML = `If you invested 
      in an index such as the SPY instead, you would have $${Math.round(indexAmount)},
      returning ${annualIndexReturns} ${indexReturnPercentage}% in total during the same period.`
    }

    moveOne.onclick = function() {
      if (!years.length <= 0){
        myChart.config.data.labels.push(years.splice(0, 1))
        myChart.config.data.datasets[0].data.push(...returns.splice(0, 1))
        myChart.config.data.datasets[1].data.push(...indexReturns.splice(0, 1))
        if (myChart.config.data.labels.length >= 50) {
          myChart.config.data.datasets[0].pointRadius = 0 
          myChart.config.data.datasets[1].pointRadius = 0 
        } else {
          myChart.config.data.datasets[0].pointRadius = 2 
          myChart.config.data.datasets[1].pointRadius = 2
        }
        updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1],
          myChart.config.data.datasets[1].data[myChart.config.data.datasets[1].data.length - 1])
        myChart.update()
      }
    }

    moveFive.onclick = function() {
      myChart.config.data.labels.push(...years.splice(0, 5))
      myChart.config.data.datasets[0].data.push(...returns.splice(0, 5))
      myChart.config.data.datasets[1].data.push(...indexReturns.splice(0, 5))
      if (myChart.config.data.labels.length >= 50) {
        myChart.config.data.datasets[0].pointRadius = 0 
        myChart.config.data.datasets[1].pointRadius = 0 
      } else {
        myChart.config.data.datasets[0].pointRadius = 2 
        myChart.config.data.datasets[1].pointRadius = 2
      }
      updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1],
          myChart.config.data.datasets[1].data[myChart.config.data.datasets[1].data.length - 1])
      myChart.update()
    }

    fastForward.onclick = function() {
      myChart.config.data.labels.push(...years.splice(0, years.length))
      myChart.config.data.datasets[0].data.push(...returns.splice(0, returns.length))
      myChart.config.data.datasets[1].data.push(...indexReturns.splice(0, indexReturns.length))
      if (myChart.config.data.labels.length >= 50) {
        myChart.config.data.datasets[0].pointRadius = 0 
        myChart.config.data.datasets[1].pointRadius = 0 
      } else {
        myChart.config.data.datasets[0].pointRadius = 2 
        myChart.config.data.datasets[1].pointRadius = 2
      }
      updateInfo(myChart.config.data.labels[myChart.config.data.labels.length - 1], myChart.config.data.datasets[0].data[myChart.config.data.datasets[0].data.length - 1],
          myChart.config.data.datasets[1].data[myChart.config.data.datasets[1].data.length - 1])
      myChart.update()
    }

    chart.width = "100%"
    chart.height = "100%"
    let ctx = chart.getContext('2d');
    let data = {
      labels: years.splice(0, 1),
      datasets: [
        {
          label: `${currentStock}`, 
          backgroundColor: 'black',
          borderColor: 'white',
          data: returns.splice(0, 1),
          tension: .1,
          pointRadius: 2,
          borderWidth: 1,
        },
        {
          label: 'SPY',
          backgroundColor: 'black',
          borderColor: '#90EE90',
          data: indexReturns.splice(0, 1),
          tension: .1,
          pointRadius: 2,
          borderWidth: 1,
        }
    ]
    }

    let myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins:{   
          legend: {
            display: false
          },
        },
      },
    });
  }
}

