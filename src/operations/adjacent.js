function adjacent( mode, deg, amount, colourRef ) {
	var colours = [colourRef];
	var colour;
	if (mode != "hsl") {
		colour = convert( mode, "hsl", colourRef );
	} else {
		colour = {h:colourRef.h, s:colourRef.s, l:colourRef.l};
	}
	for(var i=0;i<(amount-2);i++) {
		colour.h = (colour.h + deg) % 360;
		if (mode != "hsl") {
			var tempColour = convert( "hsl", mode, colour );
			colours.push(tempColour);
		} else {
			colours.push({h:colour.h, s:colour.s, l:colour.l});
		}
	}
	return colours;
}