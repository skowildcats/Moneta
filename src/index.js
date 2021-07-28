import {startDemo} from './scripts/start'

document.addEventListener('DOMContentLoaded', () => { 
  startDemo() 

  let chart = document.getElementById('chart')
  chart.width = "100%"
  chart.height = "100%"
  
  let ctx = chart.getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
    },
  });

})