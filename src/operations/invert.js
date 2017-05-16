function invert( _dep, colourRef ) {
  var colour = _dep.operations.convert( _dep, "rgb", colourRef );

  colour.r = _dep.helpers.negMod((255 - colour.r), 255);
  colour.g = _dep.helpers.negMod((255 - colour.g), 255);
  colour.b = _dep.helpers.negMod((255 - colour.b), 255);

  return _dep.helpers.ready( _dep, colour );
}

module.exports = invert;
