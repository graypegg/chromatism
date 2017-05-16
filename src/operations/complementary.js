function complementary( _dep, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsl", colourRef );

  colour.h = (colour.h + 180) % 360;

  return _dep.helpers.ready( _dep, colour );
}

module.exports = complementary;
