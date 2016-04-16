function invert( mode, colourRef ) {
	var colour;
	if (mode != "rgb") {
		colour = convert( mode, "rgb", colourRef );
	} else {
		colour = {r:colourRef.r, g:colourRef.g, b:colourRef.b};
	}
	colour.r = negMod((255 - colour.r), 255);
	colour.g = negMod((255 - colour.g), 255);
	colour.b = negMod((255 - colour.b), 255);
	if (mode != "rgb") {
		colour = convert( "rgb", mode, colour );
	}
	return colour;
}
