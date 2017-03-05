function fromCmyk( { conversions, operations, helpers }, to, value ) {
	switch (to){
		case "hex":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return operations.convert({ conversions, helpers }, "hex", {r: r, g: g, b: b});
			break;
		case "rgb":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return {r: r, g: g, b: b};
			break;
		case "css-rgb":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";
			break;
		case "hsl":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return operations.convert({ conversions, helpers }, "hsl", {r: r, g: g, b: b});
			break;
		case "css-hsl":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return operations.convert({ conversions, helpers }, "css-hsl", {r: r, g: g, b: b});
		case "hsv":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return operations.convert({ conversions, helpers }, "hsv", {r: r, g: g, b: b});
			break;
		case "yiq":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return operations.convert({ conversions, helpers }, "yiq", {r: r, g: g, b: b});
			break;
	}
}

module.exports = fromCmyk;
