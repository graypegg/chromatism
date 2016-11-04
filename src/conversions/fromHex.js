function fromHex( to, value ) {
	value = value.replace('#','').match(/.{2}/g);
	for (var i=0;i<value.length;i++){
		value[i] = parseInt(value[i], 16);
	}
	switch (to){
		case "rgb":
			return {
				r: value[0],
				g: value[1],
				b: value[2]
			};
			break;
		case "css-rgb":
			return "rgb(" + Math.round(value[0]) + "," + Math.round(value[1]) + "," + Math.round(value[2]) + ")";
			break;
		case "hsl":
			var r = value[0] / 255;
			var g = value[1] / 255;
			var b = value[2] / 255;
			var rgbOrdered = [r,g,b].sort();
			var l = ((rgbOrdered[0] + rgbOrdered[2]) / 2) * 100;
			var s, h;
			if (rgbOrdered[0] == rgbOrdered[2]) {
				s = 0;
				h = 0;
			} else {
				if (l >= 50) {
					s = (rgbOrdered[2] - rgbOrdered[0])/((2.0 - rgbOrdered[2]) - rgbOrdered[0]) * 100;
				} else {
					s = (rgbOrdered[2] - rgbOrdered[0])/(rgbOrdered[2] + rgbOrdered[0]) * 100;
				}
				if (rgbOrdered[2] == r) {
					h = ((g-b)/(rgbOrdered[2] - rgbOrdered[0])) * 60;
				} else if (rgbOrdered[2] == g) {
					h = ((2+b-r)/(rgbOrdered[2] - rgbOrdered[0])) * 60;
				} else {
					h = ((4+r-g)/(rgbOrdered[2] - rgbOrdered[0])) * 60;
				}
				if (h < 0) {
					h += 360;
				} else if (h > 360) {
					h = h % 360;
				}
			};
			return {
				h: h,
				s: s,
				l: l
			};
			break;
		case "css-hsl":
			var hsl = convert("hsl", {
				r: value[0],
				g: value[1],
				b: value[2]
			});
			return "hsl(" + Math.round(hsl.h) + "," + Math.round(hsl.s) + "%," + Math.round(hsl.l) + "%)";
			break;
		case "cmyk":
			var tempR = value[0]/255;
			var tempG = value[1]/255;
			var tempB = value[2]/255;
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
				r: value[0],
				g: value[1],
				b: value[2]
			});
			break;
	}
}
