function multiply( { conversions, operations, helpers }, colourRefOne, colourRefTwo ) {
	var c1 = operations.convert( { conversions, operations, helpers }, "hsl", colourRefOne );
	var c2 = operations.convert( { conversions, operations, helpers }, "hsl", colourRefTwo );

	var colour = {h: c1.h, s: c1.s, l: 100*((c1.l/100) * (c2.l/100))};
	colour.l = (colour.l > 100 ? 100 : colour.l);
	colour.l = (colour.l < 0 ? 0 : colour.l);

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = multiply;
