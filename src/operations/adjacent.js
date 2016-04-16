function adjacent( deg, amount, colourRef ) {
	var colour = convert( "hsl", colourRef );
	var colours = [{h:colour.h, s:colour.s, l:colour.l}];

	for(var i=0;i<(amount-1);i++) {
		colour.h = negMod((colour.h + deg), 360);
		colours.push({h:colour.h, s:colour.s, l:colour.l});
	}

	return ready( colours );
}