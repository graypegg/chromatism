const { negMod } = require('../helpers')
const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js')

function hue (shift, colourRef) {
  const colour = convert('hsl', colourRef)

  colour.h = negMod((colour.h + shift), 360)

  return makeColourObject(colour)
}

module.exports = hue
