function greyscale( _dep, colourRef ) {
  var colour = _dep.operations.convert( _dep, "rgb", colourRef );

  var grey = ( (colour.r + colour.g + colour.b) / 3 );
  colour = {r: grey, g: grey, b: grey};

  return _dep.helpers.ready( _dep, colour );
}

module.exports = greyscale;
