function fromCmyk( to, value ) {
	switch (to){
		case "hex":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return convert("hex", {r: r, g: g, b: b});
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
			return convert("hsl", {r: r, g: g, b: b});
			break;
		case "css-hsl":
			var r = 255 * (1-value.c) * (1-value.k);
			var g = 255 * (1-value.m) * (1-value.k);
			var b = 255 * (1-value.y) * (1-value.k);
			return convert("css-hsl", {r: r, g: g, b: b});
	}
}
