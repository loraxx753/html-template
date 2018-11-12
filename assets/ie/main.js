"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _table = _interopRequireDefault(require("./modules/table.js"));

var _functions = require("./modules/functions.js");

var _elements = require("./modules/elements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAnotherDay = (0, _functions.getAnotherDayGenerator)();

var _default = _asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var days, keys, header;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.iextrading.com/1.0/stock/aapl/chart/1y').then(function (resp) {
            return resp.json();
          });

        case 2:
          window.days = _context.sent;
          customElements.define('stock-table', _table.default, {
            extends: 'table'
          });
          _context.next = 6;
          return fetch('https://api.iextrading.com/1.0/stock/aapl/chart/1y').then(function (resp) {
            return resp.json();
          });

        case 6:
          days = _context.sent;
          keys = Object.keys(days[0]).map(function (item) {
            return item.replace(/([A-Z])/g, ' $1').toLowerCase();
          });
          _context.next = 10;
          return createHeader(keys);

        case 10:
          header = _context.sent;
          document.querySelector('#stock-table').appendChild(header);
          document.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
              console.log(getAnotherDay.next().value.date);
            }
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();

exports.default = _default;

var createHeader = function createHeader(keys) {
  var new_header_row = _elements.tr.cloneNode(true);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var new_header_column = _elements.th.cloneNode(true);

      new_header_column.innerHTML = key;
      new_header_row.appendChild(new_header_column);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return new_header_row;
};