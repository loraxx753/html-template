export const tr = document.createElement('tr');
export const td = document.createElement('td');
export const th = document.createElement('th');
export class StockSummary extends HTMLElement {
    constructor() {
        super();
    }
    onConnectedCallback() {
        const day = JSON.parse(this.getAttribute(day))
        this.innerHTML = JSON.stringify(day)
    }
}

(async () => {
    customElements.define('stock-summary', StockSummary)
})()