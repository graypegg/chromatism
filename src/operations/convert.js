function convert( to, value ) {
	if (to == "rgb" ||
		to == "hsl" ||
		to == "css-rgb" ||
		to == "css-hsl" ||
		to == "hex" ||
		to == "cmyk" ||
		to == "hsv") {
		var from = determineMode(value);
		if (from != to) {
			switch (from){
				case "hex":
					return fromHex( to, value );
					break;
				case "rgb":
					return fromRgb( to, value );
					break;
				case "css-rgb":
					return fromCssRgb( to, value );
					break;
				case "hsl":
					return fromHsl( to, value );
					break;
				case "css-hsl":
					return fromCssHsl( to, value );
					break;
				case "cmyk":
					return fromCmyk( to, value );
					break;
				case "hsv":
					return fromHsv( to, value );
					break;
			}
		} else {
			return value;
		}
	} else {
		return ready (to);
	}
}
