function invert( { conversions, operations, helpers }, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "rgb", colourRef );

	colour.r = helpers.negMod((255 - colour.r), 255);
	colour.g = helpers.negMod((255 - colour.g), 255);
	colour.b = helpers.negMod((255 - colour.b), 255);

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = invert;
