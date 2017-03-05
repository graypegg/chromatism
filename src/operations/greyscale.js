function greyscale( { conversions, operations, helpers },  colourRef ) {
	var colour = operations.convert( { conversions, operations, helpers }, "rgb", colourRef );

	var grey = ( (colour.r + colour.g + colour.b) / 3 );
	colour = {r: grey, g: grey, b: grey};

	return helpers.ready( { conversions, operations, helpers }, colour );
}

module.exports = greyscale;
