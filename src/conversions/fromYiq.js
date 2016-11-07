function fromYiq( to, value ) {
	/* YIQ is not a transformation of RGB, so it's pretty lossy */
	value.i = bounded(value.i, [-0.5957, 0.5957]);
	value.q = bounded(value.q, [-0.5226, 0.5226]);

	switch (to){
		case "hex":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			return convert("hex", {r: r, g: g, b: b});
			break;
		case "rgb":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			return {r: r, g: g, b: b};
			break;
		case "css-rgb":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			return "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";
			break;
		case "hsl":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			return convert("hsl", {r: r, g: g, b: b});
			break;
		case "css-hsl":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			return convert("css-hsl", {r: r, g: g, b: b});
		case "hsv":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			return convert("hsv", {r: r, g: g, b: b});
			break;
		case "cmyk":
			var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
			var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
			var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
			return convert("cmyk", {r: r, g: g, b: b});
			break;
	}
}
