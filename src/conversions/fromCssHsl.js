function fromCssHsl( to, value ) {
	value = value.replace(/(hsl\(|\)|%|[\s]*)/g,'').split(",");
	for (var i=0;i<value.length;i++){
		value[i] = parseInt(value[i]);
	}
	switch (to) {
		case "hex":
			var rgb = convert("rgb", {
				h: value[0],
				s: value[1],
				l: value[2]
			});
			return convert("hex", rgb);
			break;
		case "rgb":
			if (value[1] == 0) {
				var grey = (value[2] / 100) * 255;
				return {
					r: grey,
					g: grey,
					b: grey
				}
			} else {
				var tempOne, tempTwo, tempHue;
				if (value[2] >= 50) {
					tempOne = ((value[2]/100) + (value[1]/100)) - ((value[2]/100) * (value[1]/100));
				} else {
					tempOne = (value[2]/100) * (1 + (value[1]/100));
				}
				tempTwo = (2 * (value[2]/100)) - tempOne;
				tempHue = value[0] / 360;
				var tempR = (tempHue + 0.333) % 1;
				var tempG = tempHue;
				var tempB = negMod((tempHue - 0.333), 1);
				var r,g,b;
				if ((6 * tempR) < 1) {
					r = tempTwo + ((tempOne - tempTwo) * 6 * tempR);
				} else if ((2 * tempR) < 1) {
					r = tempOne;
				} else if ((3 * tempR) < 2) {
					r = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempR) * 6));
				} else {
					r = tempTwo;
				}
				if ((6 * tempG) < 1) {
					g = tempTwo + ((tempOne - tempTwo) * 6 * tempG);
				} else if ((2 * tempG) < 1) {
					g = tempOne;
				} else if ((3 * tempG) < 2) {
					g = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempG) * 6));
				} else {
					g = tempTwo;
				}
				if ((6 * tempB) < 1) {
					b = tempTwo + ((tempOne - tempTwo) * 6 * tempB);
				} else if ((2 * tempB) < 1) {
					b = tempOne;
				} else if ((3 * tempB) < 2) {
					b = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempB) * 6));
				} else {
					b = tempTwo;
				}
				if (r < 0) r = 0;
				if (g < 0) g = 0;
				if (b < 0) b = 0;
				return {
					r: r * 255,
					g: g * 255,
					b: b * 255
				}
			}
			break;
		case "css-rgb":
			var rgb = convert("rgb", {
				h: value[0],
				s: value[1],
				l: value[2]
			});
			return "rgb(" + Math.round(rgb.r) + "," + Math.round(rgb.g) + "," + Math.round(rgb.b) + ")";
			break;
		case "hsl":
			return {
				h: value[0],
				s: value[1],
				l: value[2]
			};
			break;
		case "cmyk":
			var rgb = convert("rgb", value);
			var tempR = rgb['r']/255;
			var tempG = rgb['g']/255;
			var tempB = rgb['b']/255;
			var k = 1 - (Math.max(tempR, tempG, tempB));
			if (k != 1) {
				var c = ((1 - tempR) - k) / (1 - k);
				var m = ((1 - tempG) - k) / (1 - k);
				var y = ((1 - tempB) - k) / (1 - k);
			} else {
				var c = 0;
				var m = 0;
				var y = 0;
			}
			return {c: c, m: m, y: y, k: k};
			break;
		case "hsv":
			return convert("hsv", {
				h: value[0],
				s: value[1],
				l: value[2]
			});
			break;
	}
}
