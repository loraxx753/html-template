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
  
  if (thisIsALegacyBrowser) {
    addScript(polyfills.css.variables, function() {
        cssVars();
    });
    addScript(polyfills.css.grid)
    // addScript(polyfills.js["babel-polyfill"])
    // addScript(polyfills.js["regenrator-runtime"], function() {
    //   console.log("polyfills added like a boss!")
    //   addScript('assets/ie/main.js', function() {
    //     console.log("legacy main script")
    //   })
  
    // })
  } else { // this is a modern browser
    addScript('assets/scripts/init.js', function() {
    }, { type: "module" })
  }
})()
