import StockTable from './modules/table.js'
import { getAnotherDayGenerator } from './modules/functions.js';
import { tr, th } from './modules/elements.js'

const getAnotherDay = getAnotherDayGenerator();

export default (async function () {
  window.days = await fetch('https://api.iextrading.com/1.0/stock/aapl/chart/1y').then(resp => resp.json())

  customElements.define('stock-table', StockTable, {extends: 'table'})
  const days = await fetch('https://api.iextrading.com/1.0/stock/aapl/chart/1y').then(resp => resp.json())
  
  const keys = Object.keys(days[0]).map(item => item.replace(/([A-Z])/g, ' $1').toLowerCase());

  const header = await createHeader(keys);
  document.querySelector('#stock-table').appendChild(header)

  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') console.log(getAnotherDay.next().value.date)
  })
  
  document.addEventListener('tap', (e) => {
    getAnotherDay.next()
  })

})()

const createHeader = (keys) => {
  const new_header_row = tr.cloneNode(true);
  for(let key of keys) {
    const new_header_column = th.cloneNode(true)
    new_header_column.innerHTML = key
    new_header_row.appendChild(new_header_column)
  }
  return new_header_row
}
