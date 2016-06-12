function fade( amount, fromRef, toRef ) {
	var fromColour = convert( "rgb", fromRef );
	var toColour = convert( "rgb", toRef );

	var colours = [fromColour];
	amount = amount - 1;

	var rDiff = (toColour.r - fromColour.r) / (amount);
	var gDiff = (toColour.g - fromColour.g) / (amount);
	var bDiff = (toColour.b - fromColour.b) / (amount);
	var colour = {r:fromColour.r, g:fromColour.g, b:fromColour.b};
	
	for(var i=0;i<(amount-1);i++) {
		colour.r = slopeMod(colour.r + rDiff, 255);
		colour.g = slopeMod(colour.g + gDiff, 255);
		colour.b = slopeMod(colour.b + bDiff, 255);
		colours.push({r:colour.r, g:colour.g, b:colour.b});
	}

	colours.push(toColour);

	return ready( colours );
}
