import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function complementary (colourRef) {
  var colour = convert('hsluv', colourRef)

  colour.hu = (colour.hu + 180) % 360

  return makeColourObject(colour)
}
