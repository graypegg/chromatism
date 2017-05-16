function invertLightness( _dep, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsl", colourRef );

  colour.l  = 100 - colour.l;

  return _dep.helpers.ready( _dep, colour );
}

module.exports = invertLightness;
