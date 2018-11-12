"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnotherDayGenerator = getAnotherDayGenerator;

var _elements = require("./elements.js");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(getAnotherDayGenerator);

function getAnotherDayGenerator() {
  var day, new_row, key, new_column, stockSummaryElement;
  return regeneratorRuntime.wrap(function getAnotherDayGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!true) {
            _context.next = 11;
            break;
          }

          day = window.days.shift();
          new_row = _elements.tr.cloneNode(true);

          for (key in day) {
            new_column = _elements.td.cloneNode(true);
            new_column.setAttribute('key', key);

            if (!isNaN(Number(day[key]))) {
              day[key] = Math.round(Number(day[key]) * 1000) / 1000;
            }

            new_column.innerHTML = day[key];
            new_row.appendChild(new_column);
          }

          document.querySelector('#stock-table').appendChild(new_row);
          stockSummaryElement = document.querySelector('stock-summary');
          stockSummaryElement.setAttribute('day', JSON.stringify(day)); // stockSummaryElement.innerHTML = day.date

          _context.next = 9;
          return day;

        case 9:
          _context.next = 0;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}