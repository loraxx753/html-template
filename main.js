class CustomContent extends HTMLElement {
  constructor () {
    super()
    console.log(this)
  }
}

;(function () {
  customElements.define('custom-content', CustomContent)
})()
