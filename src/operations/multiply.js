function multiply( _dep, colourRefOne, colourRefTwo ) {
  var c1 = _dep.operations.convert( _dep, "hsl", colourRefOne );
  var c2 = _dep.operations.convert( _dep, "hsl", colourRefTwo );

  var colour = {h: c1.h, s: c1.s, l: 100*((c1.l/100) * (c2.l/100))};
  colour.l = (colour.l > 100 ? 100 : colour.l);
  colour.l = (colour.l < 0 ? 0 : colour.l);

  return _dep.helpers.ready( _dep, colour );
}

module.exports = multiply;
