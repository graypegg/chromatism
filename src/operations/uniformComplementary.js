const makeColourObject = require('./convert.js')
const convert = require('../helpers/convert-to-type.js').default

function complementary (colourRef) {
  var colour = convert('hsluv', colourRef)

  colour.hu = (colour.hu + 180) % 360

  return makeColourObject(colour)
}

module.exports = complementary
