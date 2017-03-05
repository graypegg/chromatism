function adjacent( { conversions, operations, helpers }, deg, amount, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "hsl", colourRef );
	var colours = [{h:colour.h, s:colour.s, l:colour.l}];

	for(var i=0;i<(amount-1);i++) {
		colour.h = helpers.negMod((colour.h + deg), 360);
		colours.push({h:colour.h, s:colour.s, l:colour.l});
	}

	return helpers.ready( { operations }, colours );
}

module.exports = adjacent;
