import convert from '../helpers/convert-to-type'
import makeColourObject from './convert'

export default function complementary (colourRef) {
  var colour = convert('hsl', colourRef)

  colour.h = (colour.h + 180) % 360

  return makeColourObject(colour)
}
