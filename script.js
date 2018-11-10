console.log("This is outside of any browser detection. This'll run in everything.")

  if (typeof(Worker) !== "undefined") {
    console.log('This is going to work in IE11 and all modern browsers')
} else {
    console.log('Sorry! No Web Worker support..')
}


if ('serviceWorker' in navigator) {
  console.log("This will only work in modern browsers. Feel free to use ES6, ES&, whatever. As long as it's supported by babel-standalone.")
}
else {
  console.log("This browser is going to have to use babel. Don't worry, it's done automatically. ;)")
  console.log("This browser will only load some old ass code.")
}


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
    console.log("something happened")
  });
}
