const negativeModulo = require('../helpers/negative-modulo.js').default
const convert = require('../helpers/convert-to-type.js').default
const makeColourObject = require('./convert.js')

function adjacent (deg, amount, colourRef) {
  const colour = convert('hsl', colourRef)
  const colours = [{ h: colour.h, s: colour.s, l: colour.l }]

  for (let i = 0; i < (amount - 1); i++) {
    colour.h = negativeModulo((colour.h + deg), 360)
    colours.push({ h: colour.h, s: colour.s, l: colour.l })
  }

  return makeColourObject(colours)
}

module.exports = adjacent
