function convert( _dep, to, value ) {
	if (to == "rgb" ||
		to == "hsl" ||
		to == "css-rgb" ||
		to == "css-hsl" ||
		to == "hex" ||
		to == "cmyk" ||
		to == "hsv" ||
		to == "yiq" ||
		to == "XYZ") {
		var from = _dep.helpers.determineMode(value);
		if (from != to) {
			switch (from){
				case "hex":
					return  _dep.conversions.fromHex( _dep, to, value );
					break;
				case "rgb":
					return  _dep.conversions.fromRgb( _dep, to, value );
					break;
				case "css-rgb":
					return  _dep.conversions.fromCssRgb( _dep, to, value );
					break;
				case "hsl":
					return  _dep.conversions.fromHsl( _dep, to, value );
					break;
				case "css-hsl":
					return  _dep.conversions.fromCssHsl( _dep, to, value );
					break;
				case "cmyk":
					return  _dep.conversions.fromCmyk( _dep, to, value );
					break;
				case "hsv":
					return  _dep.conversions.fromHsv( _dep, to, value );
					break;
				case "yiq":
					return  _dep.conversions.fromYiq( _dep, to, value );
					break;
				case "XYZ":
					return  _dep.conversions.fromXYZ( _dep, to, value );
					break;
			}
		} else {
			return value;
		}
	} else {
		return _dep.helpers.ready( _dep, to);
	}
}

module.exports = convert;
