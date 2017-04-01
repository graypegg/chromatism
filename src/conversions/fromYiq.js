function fromYiq( { conversions, operations, helpers }, to, value ) {
	/* YIQ is not a transformation of RGB, so it's pretty lossy */
	value.i = helpers.bounded(value.i, [-0.5957, 0.5957]);
	value.q = helpers.bounded(value.q, [-0.5226, 0.5226]);

	switch (to){
		case "hex":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			r = helpers.bounded(r, [0, 255]);
			g = helpers.bounded(g, [0, 255]);
			b = helpers.bounded(b, [0, 255]);
			return operations.convert({ conversions, operations, helpers }, "hex", {r: r, g: g, b: b});
			break;
		case "rgb":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			r = helpers.bounded(r, [0, 255]);
			g = helpers.bounded(g, [0, 255]);
			b = helpers.bounded(b, [0, 255]);
			return {r: r, g: g, b: b};
			break;
		case "css-rgb":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			r = helpers.bounded(r, [0, 255]);
			g = helpers.bounded(g, [0, 255]);
			b = helpers.bounded(b, [0, 255]);
			return "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";
			break;
		case "hsl":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			r = helpers.bounded(r, [0, 255]);
			g = helpers.bounded(g, [0, 255]);
			b = helpers.bounded(b, [0, 255]);
			return operations.convert({ conversions, operations, helpers }, "hsl", {r: r, g: g, b: b});
			break;
		case "css-hsl":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			r = helpers.bounded(r, [0, 255]);
			g = helpers.bounded(g, [0, 255]);
			b = helpers.bounded(b, [0, 255]);
			return operations.convert({ conversions, operations, helpers }, "css-hsl", {r: r, g: g, b: b});
		case "hsv":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			r = helpers.bounded(r, [0, 255]);
			g = helpers.bounded(g, [0, 255]);
			b = helpers.bounded(b, [0, 255]);
			return operations.convert({ conversions, operations, helpers }, "hsv", {r: r, g: g, b: b});
			break;
		case "cmyk":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			r = helpers.bounded(r, [0, 255]);
			g = helpers.bounded(g, [0, 255]);
			b = helpers.bounded(b, [0, 255]);
			return operations.convert({ conversions, operations, helpers }, "cmyk", {r: r, g: g, b: b});
			break;
	}
}

module.exports = fromYiq;
