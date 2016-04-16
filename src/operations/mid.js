function mid( mode, colourOneRef, colourTwoRef ) {
	var colourOne, colourTwo;
	if (mode != "hsl") {
		colourOne = convert( mode, "hsl", colourOneRef );
		colourTwo = convert( mode, "hsl", colourTwoRef );
	} else {
		colourOne = {h:colourOneRef.h, s:colourOneRef.s, l:colourOneRef.l};
		colourTwo = {h:colourTwoRef.h, s:colourTwoRef.s, l:colourTwoRef.l};
	}
	var midHue = (colourOne.h + colourTwo.h) / 2;
	var midSat = (colourOne.s + colourTwo.s) / 2;
	var midLight = (colourOne.l + colourTwo.l) / 2;
	var colour = {h:midHue, s:midSat, l:midLight};
	if (mode != "hsl") {
		colour = convert( "hsl", mode, colour );
	}
	return colour;
}
