const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js').default

function invertLightness (colourRef) {
  var colour = convert('hsl', colourRef)

  colour.l = 100 - colour.l

  return makeColourObject(colour)
}

module.exports = invertLightness
