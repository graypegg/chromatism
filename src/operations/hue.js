const negativeModulo = require('../helpers/negative-modulo.js').default
const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js').default

function hue (shift, colourRef) {
  const colour = convert('hsl', colourRef)

  colour.h = negativeModulo((colour.h + shift), 360)

  return makeColourObject(colour)
}

module.exports = hue
