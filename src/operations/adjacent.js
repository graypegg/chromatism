import negativeModulo from '../helpers/negative-modulo'
import convert from '../helpers/convert-to-type'
import makeColourObject from './convert'

export default function adjacent (deg, amount, colourRef) {
  const colour = convert('hsl', colourRef)
  const colours = [{ h: colour.h, s: colour.s, l: colour.l }]

  for (let i = 0; i < (amount - 1); i++) {
    colour.h = negativeModulo((colour.h + deg), 360)
    colours.push({ h: colour.h, s: colour.s, l: colour.l })
  }

  return makeColourObject(colours)
}
