function convert( _dep, to, value ) {
	if (to == "rgb" ||
		to == "hsl" ||
		to == "css-rgb" ||
		to == "css-hsl" ||
		to == "hex" ||
		to == "cmyk" ||
		to == "hsv" ||
		to == "yiq" ||
		to == "XYZ" ||
		to == "xyY" ||
		to == "lms" ||
		to == "cielab") {
		let from = _dep.helpers.determineMode(value);
		if (from != to) {
			return _dep.conversions[from]( _dep, to, value );
		} else {
			return value;
		}
	} else {
		return _dep.helpers.ready( _dep, to);
	}
}

module.exports = convert;
