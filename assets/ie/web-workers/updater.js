"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Updater = void 0;

function _templateObject() {
  var data = _taggedTemplateLiteral(["This brower doesn't seem to support Web Workers :("]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

if (typeof Worker === "undefined") console.error(_templateObject());

var Updater = function Updater() {
  if (typeof w == "undefined") {
    w = new Worker("demo_workers.js");
  }
};

exports.Updater = Updater;