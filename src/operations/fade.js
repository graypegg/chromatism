function fade( { conversions, operations, helpers }, amount, fromRef, toRef ) {
	var fromColour = operations.convert( { conversions, operations, helpers }, "rgb", fromRef );
	var toColour = operations.convert( { conversions, operations, helpers }, "rgb", toRef );

	var colours = [fromColour];
	amount = amount - 1;

	var rDiff = (toColour.r - fromColour.r) / (amount);
	var gDiff = (toColour.g - fromColour.g) / (amount);
	var bDiff = (toColour.b - fromColour.b) / (amount);
	var colour = {r:fromColour.r, g:fromColour.g, b:fromColour.b};

	for(var i=0;i<(amount-1);i++) {
		colour.r = helpers.slopeMod(colour.r + rDiff, 255);
		colour.g = helpers.slopeMod(colour.g + gDiff, 255);
		colour.b = helpers.slopeMod(colour.b + bDiff, 255);
		colours.push({r:colour.r, g:colour.g, b:colour.b});
	}

	colours.push(toColour);

	return helpers.ready( { conversions, operations, helpers }, colours );
}

module.exports = fade;
