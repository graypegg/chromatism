function contains(obj, test) {
  const arr = Object.keys(obj);
  return arr.every(function(val) {
    return test.indexOf(val) !== -1;
  });
}

module.exports = {
  'hex': {
    test: (colour) => typeof colour === 'string' && colour.slice(0,1) === '#',
    convert: require('./fromHex.js')
  },
  'rgb': {
    test: (colour) => contains(colour, ['r', 'g', 'b']),
    convert: require('./fromRgb.js')
  },
  'cssrgb': {
    test: (colour) => typeof colour === 'string' && colour.slice(0,4) === 'rgb(',
    convert: require('./fromCssRgb.js')
  },
  'hsl': {
    test: (colour) => contains(colour, ['h', 's', 'l']),
    convert: require('./fromHsl.js')
  },
  'csshsl': {
    test: (colour) => typeof colour === 'string' && colour.slice(0,4) === 'hsl(',
    convert: require('./fromCssHsl.js')
  },
  'hsv': {
    test: (colour) => contains(colour, ['h', 's', 'v']),
    convert: require('./fromHsv.js')
  },
  'cmyk': {
    test: (colour) => contains(colour, ['c', 'm', 'y', 'k']),
    convert: require('./fromCmyk.js')
  },
  'yiq': {
    test: (colour) => contains(colour, ['y', 'i', 'q']),
    convert: require('./fromYiq.js')
  },
  'XYZ': {
    test: (colour) => contains(colour, ['X', 'Y', 'Z']),
    convert: require('./fromXYZ.js')
  },
  'xyY': {
    test: (colour) => contains(colour, ['x', 'y', 'Y']),
    convert: require('./fromxyY.js')
  },
  'lms': {
    test: (colour) => contains(colour, ['rho', 'gamma', 'beta']),
    convert: require('./fromLms.js')
  },
  'cielab': {
    test: (colour) => contains(colour, ['L', 'a', 'b']),
    convert: require('./fromCieLab.js')
  },
  'cieluv': {
    test: (colour) => contains(colour, ['L', 'u', 'v']),
    convert: require('./fromCieLuv.js')
  },
  'cielch': {
    test: (colour) => contains(colour, ['L', 'C', 'h']),
    convert: require('./fromCieLch.js')
  },
  'hsluv': {
    test: (colour) => contains(colour, ['hu', 's', 'l']),
    convert: require('./fromHsluv.js')
  },

}
