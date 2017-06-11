import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function triad (colourRef) {
  var colour = convert('hsluv', colourRef)

  var colours = [{ hu: colour.hu, s: colour.s, l: colour.l }]
  for (var i = 0; i < 2; i++) {
    colour.hu = (colour.hu + 120) % 360
    colours.push({ h: colour.hu, s: colour.s, l: colour.l })
  }

  return makeColourObject(colours)
}
