const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js').default

function greyscale (colourRef) {
  var colour = convert('rgb', colourRef)

  var grey = ((colour.r + colour.g + colour.b) / 3)
  colour = { r: grey, g: grey, b: grey }

  return makeColourObject(colour)
}

module.exports = greyscale
