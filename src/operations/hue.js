function hue( { conversions, operations, helpers },  shift, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "hsl", colourRef );

	colour.h = helpers.negMod((colour.h + shift), 360);

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = hue;
