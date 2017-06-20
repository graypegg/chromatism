const negativeModulo = require('../helpers/negative-modulo.js')
const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js').default

function invert (colourRef) {
  var colour = convert('rgb', colourRef)

  colour.r = negativeModulo((255 - colour.r), 255)
  colour.g = negativeModulo((255 - colour.g), 255)
  colour.b = negativeModulo((255 - colour.b), 255)

  return makeColourObject(colour)
}

module.exports = invert
