function complementary( _dep, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsluv", colourRef );

  colour.hu = (colour.hu + 180) % 360;

  return _dep.helpers.ready( _dep, colour );
}

module.exports = complementary;
