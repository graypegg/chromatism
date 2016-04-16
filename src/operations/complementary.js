function complementary( mode, colourRef ) {
	var colour;
	if (mode != "hsl") {
		colour = convert( mode, "hsl", colourRef );
	} else {
		colour = {h:colourRef.h, s:colourRef.s, l:colourRef.l};
	}
	colour.h = (colour.h + 180) % 360;
	if (mode != "hsl") {
		colour = convert( "hsl", mode, colour );
	}
	return colour;
}
