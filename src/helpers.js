const constants = require('./constants.js')
const conversions = require('./conversions')
const api = require('./api.js')

const helpers = {
  getIlluminant (ref) {
    return constants.ILLUMINANTS[ref];
  },

  getTransform (ref) {
    return constants.TRANSFORMS[ref];
  },

  matrixMultiply(a, b) {
    var result = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < b[0].length; j++) {
        var sum = 0;
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  },

  cbrt(x) {
    if (!Math.cbrt) {
      var y = Math.pow(Math.abs(x), 1/3);
      return x < 0 ? -y : y;
    } else {
      return Math.cbrt(x)
    }
  },

  toRad(angle) {
    return angle * (Math.PI / 180);
  },

  toDeg(angle) {
    return angle * (180 / Math.PI);
  },

  negMod( n, m ) {
    return ((n % m) + m) % m;
  },

  slopeMod( n, m ) {
    if (n > (m*2)) {
      return slopeMod( n-(m*2), m );
    } else if (n > m){
      return (m*2) - n;
    } else if (n < 0){
      return slopeMod( n+(m*2), m );
    } else {
      return n;
    }
  },

  bounded( val, range ) {
    if (val < range[0]) {
      val = range[0]
    } else if (val > range[1]) {
      val = range[1]
    }
    return val;
  },

  boundedRgb( rgb ) {
    let bounded = (val) => this.bounded(val, [0, 255])
    return {
      r: bounded(rgb.r),
      g: bounded(rgb.g),
      b: bounded(rgb.b)
    }
  },

  determineMode( colour ) {
    for (let model in conversions) {
      if (!conversions.hasOwnProperty(model)) continue;
      if (conversions[model].test(colour)) return model;
    }
    return null
  },

  ready( { conversions, operations, helpers }, colour ) {
    let out = {};

    switch (Object.prototype.toString.call(colour)) {

      case "[object Object]":
      case "[object String]":
        out['colour'] = colour;
        for (let model in conversions) {
          if (!conversions.hasOwnProperty(model)) continue;
          (function (model) {
            Object.defineProperty(out, model, {
              get: () => {
                const from = helpers.determineMode(colour);
                return operations.convert({ conversions, operations, helpers }, model, colour);
              },
              enumerable: true
            })
          })(model)
        }

        out = Object.assign(out, api({ conversions, operations, helpers }, constants, out))
        return out;

      case "[object Array]":
        out['colours'] = colour;
        for (let model in conversions) {
          if (!conversions.hasOwnProperty(model)) continue;
          (function (model) {
            Object.defineProperty(out, model, {
              get: () => {
                let deepMap = (function (colours) {
                  return colours.map((colourItem) => {
                    if (Array.isArray(colourItem)) return deepMap(colourItem);
                    return operations.convert({ conversions, operations, helpers }, model, colourItem)
                  });
                });
                return deepMap(colour);
              },
              enumerable: true
            })
          })(model)
        }

        out = Object.assign(out, api({ conversions, operations, helpers }, constants, out))
        return out;

      default:
        return null;

    }
  }
}

module.exports = helpers;
