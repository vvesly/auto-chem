'use strict';

var _MouseAction = _interopRequireDefault(require("./scripts/components/MouseAction"));

var _ligacoes = require("./scripts/functions/ligacoes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mouse = new _MouseAction["default"]();
$(".btn-toolbar").click(function () {
  mouse.click(this.id);
});
var ctx = $("#canvas")[0].getContext('2d');
$("#canvas").click(function (event) {
  console.log(mouse.currentClick);

  if (mouse.currentClick == "btnSimple") {
    (0, _ligacoes.drawSimple)(ctx, event.offsetX, event.offsetY);
  }

  if (mouse.currentClick == "btnDuo") {
    (0, _ligacoes.drawDuo)(ctx, event.offsetX, event.offsetY);
  }

  if (mouse.currentClick == "btnTriple") {
    (0, _ligacoes.drawTriple)(ctx, event.offsetX, event.offsetY);
  }
});