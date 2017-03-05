function saturation( { conversions, operations, helpers }, shift, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "hsl", colourRef );

	colour.s = colour.s + shift;
	if (colour.s < 0) {
		colour.s = 0;
	} else if (colour.s > 100) {
		colour.s = 100;
	}

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = saturation;
