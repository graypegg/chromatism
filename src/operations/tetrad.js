function tetrad (_dep, colourRef) {
  var colour = _dep.operations.convert(_dep, 'hsl', colourRef)

  var colours = [{ h: colour.h, s: colour.s, l: colour.l }]
  for (var i = 0; i < 3; i++) {
    colour.h = (colour.h + 90) % 360
    colours.push({ h: colour.h, s: colour.s, l: colour.l })
  }

  return _dep.helpers.ready(_dep, colours)
}

module.exports = tetrad
