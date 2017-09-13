import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function brightness (shift, colourRef) {
  var colour = convert('hsl', colourRef)

  colour.l += shift
  if (colour.l < 0) {
    colour.l = 0
  } else if (colour.l > 100) {
    colour.l = 100
  }

  return makeColourObject(colour)
}
