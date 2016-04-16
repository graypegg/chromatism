function complementary( colourRef ) {
	var colour = convert( "hsl", colourRef );

	colour.h = (colour.h + 180) % 360;

	return ready( colour );
}
