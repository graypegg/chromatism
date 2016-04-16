function shade( shift, colourRef ) {
	var colour = convert( "hsl", colourRef );

	colour.l = colour.l + shift;
	if (colour.l < 0) {
		colour.l = 0;
	} else if (colour.l > 100) {
		colour.l = 100;
	}

	return ready( colour );
}
