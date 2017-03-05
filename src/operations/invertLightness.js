function invertLightness( { conversions, operations, helpers }, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "hsl", colourRef );

	colour.l  = 100 - colour.l;

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = invertLightness;
