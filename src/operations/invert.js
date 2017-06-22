import negativeModulo from '../helpers/negative-modulo'
import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function invert (colourRef) {
  var colour = convert('rgb', colourRef)

  colour.r = negativeModulo((255 - colour.r), 255)
  colour.g = negativeModulo((255 - colour.g), 255)
  colour.b = negativeModulo((255 - colour.b), 255)

  return makeColourObject(colour)
}
