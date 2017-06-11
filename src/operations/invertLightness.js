import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function invertLightness (colourRef) {
  var colour = convert('hsl', colourRef)

  colour.l = 100 - colour.l

  return makeColourObject(colour)
}
