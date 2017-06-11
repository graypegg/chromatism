const { negMod } = require('../helpers')
const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js')

function invert (colourRef) {
  var colour = convert('rgb', colourRef)

  colour.r = negMod((255 - colour.r), 255)
  colour.g = negMod((255 - colour.g), 255)
  colour.b = negMod((255 - colour.b), 255)

  return makeColourObject(colour)
}

module.exports = invert
