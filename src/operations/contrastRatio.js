function contrastRatio( mode, colourRef ) {
	var colour;
	if (mode != "rgb") {
		colour = convert( mode, "rgb", colourRef );
	} else {
		colour = {r:colourRef.r, g:colourRef.g, g:colourRef.g};
	}
	var yiq = ((colour.r*299)+(colour.g*587)+(colour.b*114))/1000;
	if (yiq >= 128) {
		colour = {r:0, g:0, b:0};
	} else {
		colour = {r:255, g:255, b:255};
	}
	if (mode != "rgb") {
		colour = convert( "rgb", mode, colour );
	}
	return colour;
}
