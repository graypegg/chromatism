function contrast( _dep, shift, colourRef ) {
  var colour = _dep.operations.convert( _dep, "rgb", colourRef );

  colour.r = (((((colour.r / 255.0) - 0.5) * shift) + 0.5) * 255.0)
  if (colour.r < 0) { colour.r = 0; }
  else if (colour.r > 255) { colour.r = 255; }

  colour.g = (((((colour.g / 255.0) - 0.5) * shift) + 0.5) * 255.0)
  if (colour.g < 0) { colour.g = 0; }
  else if (colour.g > 255) { colour.g = 255; }

  colour.b = (((((colour.b / 255.0) - 0.5) * shift) + 0.5) * 255.0)
  if (colour.b < 0) { colour.b = 0; }
  else if (colour.b > 255) { colour.b = 255; }

  return _dep.helpers.ready( _dep, colour );
}

module.exports = contrast;
