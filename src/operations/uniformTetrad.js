function tetrad (_dep, colourRef) {
  var colour = _dep.operations.convert(_dep, 'hsluv', colourRef)

  var colours = [{ hu: colour.hu, s: colour.s, l: colour.l }]
  for (var i = 0; i < 3; i++) {
    colour.hu = (colour.hu + 90) % 360
    colours.push({ h: colour.hu, s: colour.s, l: colour.l })
  }

  return _dep.helpers.ready(_dep, colours)
}

module.exports = tetrad
