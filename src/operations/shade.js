function shade( mode, shift, colourRef ) {
	var colour;
	if (mode != "hsl") {
		colour = convert( mode, "hsl", colourRef );
	} else {
		colour = {h:colourRef.h, s:colourRef.s, l:colourRef.l};
	}
	colour.l = colour.l + shift;
	if (colour.l < 0) {
		colour.l = 0;
	} else if (colour.l > 100) {
		colour.l = 100;
	}
	if (mode != "hsl") {
		colour = convert( "hsl", mode, colour );
	}
	return colour;
}
