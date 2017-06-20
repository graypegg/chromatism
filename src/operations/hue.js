import negativeModulo from '../helpers/negative-modulo'
import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function hue (shift, colourRef) {
  const colour = convert('hsl', colourRef)

  colour.h = negativeModulo((colour.h + shift), 360)

  return makeColourObject(colour)
}
