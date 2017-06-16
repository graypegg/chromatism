const negativeModulo = require('../helpers/negative-modulo.js')
const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js')

function hue (shift, colourRef) {
  const colour = convert('hsl', colourRef)

  colour.h = negativeModulo((colour.h + shift), 360)

  return makeColourObject(colour)
}

module.exports = hue
