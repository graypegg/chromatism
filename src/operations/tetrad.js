function tetrad( mode, colourRef ) {
	var colours = [colourRef];
	var colour;
	if (mode != "hsl") {
		colour = convert( mode, "hsl", colourRef );
	} else {
		colour = {h:colourRef.h, s:colourRef.s, l:colourRef.l};
	}
	for(var i=0;i<3;i++) {
		colour.h = (colour.h + 90) % 360;
		var tempColour;
		if (mode != "hsl") {
			tempColour = convert( "hsl", mode, colour );
			colours.push(tempColour);
		} else {
			colours.push({h:colour.h, s:colour.s, l:colour.l});
		}
	}
	return colours;
}
