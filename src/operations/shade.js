function shade( _dep, shift, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsv", colourRef );

  colour.v += shift;
  if (colour.v < 0) {
    colour.v = 0;
  } else if (colour.v > 100) {
    colour.v = 100;
  }

  return _dep.helpers.ready( _dep, colour );
}

module.exports = shade;
