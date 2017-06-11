module.exports = {
  hex: require('./fromHex').default,
  rgb: require('./fromRgb').default,
  cssrgb: require('./fromCssRgb').default,
  hsl: require('./fromHsl').default,
  csshsl: require('./fromCssHsl').default,
  hsv: require('./fromHsv').default,
  cmyk: require('./fromCmyk').default,
  yiq: require('./fromYiq'),
  XYZ: require('./fromXYZ'),
  xyY: require('./fromxyY'),
  lms: require('./fromLms').default,
  cielab: require('./fromCieLab').default,
  cieluv: require('./fromCieLuv').default,
  cielch: require('./fromCieLch').default,
  hsluv: require('./fromHsluv').default
}
