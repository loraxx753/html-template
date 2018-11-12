"use strict";

(function () {
  var i = 0;

  function timedCount() {
    i = i + 1;
    console.log(); // postMessage(i + ' wowza');
    // setTimeout("timedCount()",500);
  }

  timedCount();
})();