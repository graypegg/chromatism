import makeColourObject from './convert'
import convert from '../helpers/convert-to-type'

export default function tetrad (colourRef) {
  var colour = convert('hsl', colourRef)

  var colours = [{ h: colour.h, s: colour.s, l: colour.l }]
  for (var i = 0; i < 3; i++) {
    colour.h = (colour.h + 90) % 360
    colours.push({ h: colour.h, s: colour.s, l: colour.l })
  }

  return makeColourObject(colours)
}
