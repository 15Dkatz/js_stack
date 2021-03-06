"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
var Dog = function () {
  function Dog(name) {
    _classCallCheck(this, Dog);

    this.name = name;
  }

  _createClass(Dog, [{
    key: "bark",
    value: function bark() {
      return "Wah wah, I am " + this.name;
    }
  }, {
    key: "barkInConsole",
    value: function barkInConsole() {
      /* eslint-disable no-console */
      console.log(this.bark());
      /* eslint-disable no-console */
    }
  }]);

  return Dog;
}();

exports.default = Dog;