function hue( _dep, shift, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsl", colourRef );

  colour.h = _dep.helpers.negMod((colour.h + shift), 360);

  return _dep.helpers.ready( _dep, colour );
}

module.exports = hue;
