function shade( { conversions, operations, helpers }, shift, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "hsl", colourRef );

	colour.l = colour.l + shift;
	if (colour.l < 0) {
		colour.l = 0;
	} else if (colour.l > 100) {
		colour.l = 100;
	}

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = shade;
