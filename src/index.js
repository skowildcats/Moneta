import {startDemo} from './scripts/start'

document.addEventListener('DOMContentLoaded', () => { 
  startDemo() 

  let chart = document.getElementById('chart')
  chart.width = "100%"
  chart.height = "100%"
  
  let ctx = chart.getContext('2d');
  
  let data = {
    labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    ],
    datasets: [{
      backgroundColor: 'black',
      borderColor: 'white',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  }

  var myChart = new Chart(ctx, {
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

})