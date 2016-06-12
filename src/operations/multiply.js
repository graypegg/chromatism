function multiply( colourRefOne, colourRefTwo ) {
	var c1 = convert( "hsl", colourRef );
	var c2 = convert( "hsl", colourRefTwo );

	var colour = {h: c1.h, s: c2.s, l: c1.l * c2*l};
	colour.l = (colour.l > 255 ? 255 : colour.l);
	colour.l = (colour.l < 0 ? 0 : colour.l);

	return ready( colour );
}
