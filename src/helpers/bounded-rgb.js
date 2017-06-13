const bounded = require('./bounded.js')

const bounded255 = val => bounded(val, [ 0, 255 ])

module.exports = function boundedRgb (rgb) {  
  return {
    r: bounded255(rgb.r),
    g: bounded255(rgb.g),
    b: bounded255(rgb.b)
  }
}
