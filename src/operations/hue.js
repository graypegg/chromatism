import { negMod } from '../helpers'
import makeColourObject from './convert.js'
import convert from '../helpers/convert-to-type.js'

export default function hue (shift, colourRef) {
  const colour = convert('hsl', colourRef)

  colour.h = negMod((colour.h + shift), 360)

  return makeColourObject(colour)
}
