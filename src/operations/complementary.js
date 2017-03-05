function complementary( { conversions, operations, helpers }, colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "hsl", colourRef );

	colour.h = (colour.h + 180) % 360;

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = complementary;
