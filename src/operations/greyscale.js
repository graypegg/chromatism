function greyscale( colourRef ) {
	var colour = convert( "rgb", colourRef );

	var grey = ( (colour.r + colour.g + colour.b) / 3 );
	colour = {r: grey, g: grey, b: grey};

	return ready( colour );
}
