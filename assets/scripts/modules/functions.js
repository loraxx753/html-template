import { tr, td, StockSummary } from './elements.js'

export function* getAnotherDayGenerator() {
    while(true) {
        const day = window.days.shift()
        const new_row = tr.cloneNode(true)
        for(let key in day) {
            const new_column = td.cloneNode(true)
            new_column.setAttribute('key', key)
            if(!isNaN(Number(day[key]))) {
                day[key] = Math.round(Number(day[key]) * 1000) / 1000
            }
            
            new_column.innerHTML = day[key]
            new_row.appendChild(new_column)
        }
        document.querySelector('#stock-table').appendChild(new_row)
        const stockSummaryElement = document.querySelector('stock-summary')
        stockSummaryElement.setAttribute('day', JSON.stringify(day));
        // stockSummaryElement.innerHTML = day.date
        yield day
    }
}

