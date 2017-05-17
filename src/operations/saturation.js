function saturation( _dep, shift, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsl", colourRef );

  colour.s += shift;
  if (colour.s < 0) {
    colour.s = 0;
  } else if (colour.s > 100) {
    colour.s = 100;
  }

  return _dep.helpers.ready( _dep, colour );
}

module.exports = saturation;
