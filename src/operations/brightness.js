function brightness( _dep, shift, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsl", colourRef );

  colour.l += shift;
  if (colour.l < 0) {
    colour.l = 0;
  } else if (colour.l > 100) {
    colour.l = 100;
  }

  return _dep.helpers.ready( _dep, colour );
}

module.exports = brightness;
