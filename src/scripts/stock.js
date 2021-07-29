import axios from 'axios'
const keys = require('../../config/keys')

export const fetchData = (ticker) => {

  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${ticker}&apikey=${keys.stockAPI}`;

  return axios.get(url).then(data => {
    return data.data["Monthly Adjusted Time Series"]}).catch(err => console.log(err))
}


export const fetchInflation = () => {
  let url = `https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=${keys.stockAPI}`

  return axios.get(url).then(data => {
    return data}).catch(err => console.log(err))
}