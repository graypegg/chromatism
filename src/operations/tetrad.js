function tetrad( { conversions, operations, helpers }, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "hsl", colourRef );

	var colours = [{h:colour.h, s:colour.s, l:colour.l}];
	for(var i=0;i<3;i++) {
		colour.h = (colour.h + 90) % 360;
		colours.push({h:colour.h, s:colour.s, l:colour.l});
	}

	return helpers.ready( { conversions, operations, helpers }, colours );
}

module.exports = tetrad;
