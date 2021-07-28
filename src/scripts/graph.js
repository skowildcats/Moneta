import { fetchData } from "./stock"

export const graphLogic = (investmentAmount) => {
  let stock = document.getElementsByClassName("stock")
  let years, stockInfo, investment
  investmentAmount ? investment = investmentAmount : investment = 1000 

  for (let i = 0; i < stock.length; i++) {
    stock[i].onclick = function(e) {
      fetchData(e.target.value).then(data => {
        years = Object.keys(data).reverse()
        stockInfo = Object.values(data).reverse()
        let returns = []
        let factor = investment / stockInfo[0]["5. adjusted close"]
        stockInfo.forEach(ele => {
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

    moveOne.onclick = function() {
      myChart.config.data.labels.push(...years.splice(0, 1))
      myChart.config.data.datasets[0].data.push(...returns.splice(0, 1))
      myChart.update()
    }

    moveFive.onclick = function() {
      myChart.config.data.labels.push(...years.splice(0, 5))
      myChart.config.data.datasets[0].data.push(...returns.splice(0, 5))
      myChart.update()
    }

    fastForward.onclick = function() {
      myChart.config.data.labels.push(...years)
      myChart.config.data.datasets[0].data.push(...returns)
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
        pointRadius: null,
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
          }
        },
        scales: {
          backgroundColor: 'white',
        }
    });
    }

}

