function sepia( _dep, colourRef ) {
  var colour = _dep.operations.convert( _dep, "rgb", colourRef );

  var newcolour = {};
  newcolour.r = (colour.r * 0.393) + (colour.g * 0.769) + (colour.b * 0.189);
  newcolour.g = (colour.r * 0.349) + (colour.g * 0.686) + (colour.b * 0.168);
  newcolour.b = (colour.r * 0.272) + (colour.g * 0.534) + (colour.b * 0.131);

  return _dep.helpers.ready( _dep, newcolour );
}

module.exports = sepia;
