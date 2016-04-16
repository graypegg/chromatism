function hue( shift, colourRef ) {
	var colour = convert( "hsl", colourRef );

	colour.h = negMod((colour.h + shift), 360);

	return ready( colour );
}
