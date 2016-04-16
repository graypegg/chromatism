function saturation( mode, shift, colourRef ) {
	var colour;
	if (mode != "hsl") {
		colour = convert( mode, "hsl", colourRef );
	} else {
		colour = {h:colourRef.h, s:colourRef.s, l:colourRef.l};
	}
	colour.s = colour.s + shift;
	if (colour.s < 0) {
		colour.s = 0;
	} else if (colour.s > 100) {
		colour.s = 100;
	}
	if (mode != "hsl") {
		colour = convert( "hsl", mode, colour );
	}
	return colour;
}
