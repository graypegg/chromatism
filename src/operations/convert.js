function convert( { conversions, operations, helpers }, to, value ) {
	if (to == "rgb" ||
		to == "hsl" ||
		to == "css-rgb" ||
		to == "css-hsl" ||
		to == "hex" ||
		to == "cmyk" ||
		to == "hsv" ||
		to == "yiq") {
		var from = helpers.determineMode(value);
		if (from != to) {
			switch (from){
				case "hex":
					return conversions.fromHex( { conversions, operations, helpers }, to, value );
					break;
				case "rgb":
					return conversions.fromRgb( { conversions, operations, helpers }, to, value );
					break;
				case "css-rgb":
					return conversions.fromCssRgb( { conversions, operations, helpers }, to, value );
					break;
				case "hsl":
					return conversions.fromHsl( { conversions, operations, helpers }, to, value );
					break;
				case "css-hsl":
					return conversions.fromCssHsl( { conversions, operations, helpers }, to, value );
					break;
				case "cmyk":
					return conversions.fromCmyk( { conversions, operations, helpers }, to, value );
					break;
				case "hsv":
					return conversions.fromHsv( { conversions, operations, helpers }, to, value );
					break;
				case "yiq":
					return conversions.fromYiq( { conversions, operations, helpers }, to, value );
					break;
			}
		} else {
			return value;
		}
	} else {
		return helpers.ready( { conversions, operations, helpers }, to);
	}
}

module.exports = convert;
