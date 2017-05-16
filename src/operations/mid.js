function mid( _dep, colourOneRef, colourTwoRef ) {
  var colourOne = _dep.operations.convert( _dep, "hsl", colourOneRef );
  var colourTwo = _dep.operations.convert( _dep, "hsl", colourTwoRef );

  var midHue = (colourOne.h + colourTwo.h) / 2;
  var midSat = (colourOne.s + colourTwo.s) / 2;
  var midLight = (colourOne.l + colourTwo.l) / 2;
  var colour = {h:midHue, s:midSat, l:midLight};

  return _dep.helpers.ready( _dep, colour );
}

module.exports = mid;
