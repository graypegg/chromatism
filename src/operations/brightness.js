const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js').default

function brightness (shift, colourRef) {
  var colour = convert('hsl', colourRef)

  colour.l += shift
  if (colour.l < 0) {
    colour.l = 0
  } else if (colour.l > 100) {
    colour.l = 100
  }

  return makeColourObject(colour)
}

module.exports = brightness
