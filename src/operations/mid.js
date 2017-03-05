function mid( { conversions, operations, helpers }, colourOneRef, colourTwoRef ) {
	var colourOne = operations.convert( { conversions, operations, helpers }, "hsl", colourOneRef );
	var colourTwo = operations.convert( { conversions, operations, helpers }, "hsl", colourTwoRef );

	var midHue = (colourOne.h + colourTwo.h) / 2;
	var midSat = (colourOne.s + colourTwo.s) / 2;
	var midLight = (colourOne.l + colourTwo.l) / 2;
	var colour = {h:midHue, s:midSat, l:midLight};

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = mid;
