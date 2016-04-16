function fade( mode, amount, fromRef, toRef ) {
	amount = amount - 1;
	var colours = [fromRef];
	var fromColour, toColour;
	if (mode != "rgb") {
		fromColour = convert( mode, "rgb", fromRef );
		toColour = convert( mode, "rgb", toRef );
	} else {
		fromColour = {r:fromRef.r, g:fromRef.g, b:fromRef.b};
		toColour = {r:toRef.r, g:toRef.g, b:toRef.b};
	}
	var rDiff = (toColour.r - fromColour.r) / (amount);
	var gDiff = (toColour.g - fromColour.g) / (amount);
	var bDiff = (toColour.b - fromColour.b) / (amount);
	var colour = fromColour;
	for(var i=0;i<(amount-1);i++) {
		colour.r = slopeMod(colour.r + rDiff, 255);
		colour.g = slopeMod(colour.g + gDiff, 255);
		colour.b = slopeMod(colour.b + bDiff, 255);
		if (mode != "rgb") {
			var tempColour = convert( "rgb", mode, colour );
			colours.push(tempColour);
		} else {
			colours.push({r:colour.r, g:colour.g, b:colour.b});
		}
	}
	colours.push(toRef);
	return colours;
}
