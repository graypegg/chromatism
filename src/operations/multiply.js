import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function multiply (colourRefOne, colourRefTwo) {
  var c1 = convert('hsl', colourRefOne)
  var c2 = convert('hsl', colourRefTwo)

  var colour = { h: c1.h, s: c1.s, l: 100 * ((c1.l / 100) * (c2.l / 100)) }
  colour.l = (colour.l > 100 ? 100 : colour.l)
  colour.l = (colour.l < 0 ? 0 : colour.l)

  return makeColourObject(colour)
}
