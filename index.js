'use strict';

var raf = require('component-raf');
var now = require('nk-components-time-now');


exports = module.exports = interval;

function interval(delay, fn) {
  var start = now();
  var data = Object.create(null);
  data.id = raf(loop);

  return data;

  function loop() {
    data.id = raf(loop);

    if ((now() - start) >= delay) {
      fn.call();
      start = now();
    }
  }
}


exports.clear = clearInterval;

function clearInterval(data) {
  raf.cancel(data.id);
}

