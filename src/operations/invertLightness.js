function invertLightness( colourRef ) {
	var colour = convert( "hsl", colourRef );

	colour.l  = 100 - colour.l;

	return ready( colour );
}