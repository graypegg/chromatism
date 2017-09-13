import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function shade (shift, colourRef) {
  var colour = convert('hsv', colourRef)

  colour.v += shift
  if (colour.v < 0) {
    colour.v = 0
  } else if (colour.v > 100) {
    colour.v = 100
  }

  return makeColourObject(colour)
}
