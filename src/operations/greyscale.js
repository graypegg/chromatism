function greyscale( mode, colourRef ) {
	var colour;
	if (mode != "rgb") {
		colour = convert( mode, "rgb", colourRef );
	} else {
		colour = {r:colourRef.r, g:colourRef.g, g:colourRef.g};
	}
	var grey = ( (colour.r + colour.g + colour.b) / 3 );
	colour = {r: grey, g: grey, b: grey};
	if (mode != "rgb") {
		colour = convert( "rgb", mode, colour );
	}
	return colour;
}
