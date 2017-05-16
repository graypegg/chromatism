function contrastRatio( _dep, colourRef ) {
  var colour = _dep.operations.convert( _dep, "rgb", colourRef );

  var yiq = ((colour.r*299)+(colour.g*587)+(colour.b*114))/1000;
  if (yiq >= 128) {
    colour = {r:0, g:0, b:0};
  } else {
    colour = {r:255, g:255, b:255};
  }

  return _dep.helpers.ready( _dep, colour );
}

module.exports = contrastRatio;
