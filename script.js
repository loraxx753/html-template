const script = document.createElement('script');

// A quick function to add <script> tags to the end of <body>
function addScript(src, callback, options) {
  callback = (callback) ? callback : new Function() 
  const scriptClone = script.cloneNode(true);
  scriptClone.setAttribute('src', src)
  for(var key in options) {
    scriptClone.setAttribute(key, options[key])
  }
  document.body.appendChild(scriptClone)
  scriptClone.onload = callback
}

(function() {	
  const polyfills = {
    "css": {
      "variables": "https://unpkg.com/css-vars-ponyfill@1",
      "grid": "https://rawgit.com/FremyCompany/css-grid-polyfill/master/bin/css-polyfills.js"
    },
  }

  const thisIsALegacyBrowser = !('serviceWorker' in navigator);
  
  window.browser = window.browser || {}
  window.browser.legacy = !!thisIsALegacyBrowser

  if (thisIsALegacyBrowser) {
    addScript(polyfills.css.variables, function() {
        cssVars();
    });
    addScript(polyfills.css.grid)
    addScript('https://unpkg.com/@webcomponents/custom-elements', function() {
      addScript('https://cdn.jsdelivr.net/npm/regenerator-runtime@0.12.1/runtime.js', function() {
        addScript('assets/scripts/legacy.js', function() {
          addScript('dist/main.js')
        })
      })        
    })
  } else { // this is a modern browser
    addScript('assets/scripts/main.js', function() {
    }, { type: "module" })
  }
})()
