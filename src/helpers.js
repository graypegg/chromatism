function negMod( n, m ) {
	return ((n % m) + m) % m;
}

function slopeMod( n, m ) {
	if (n > (m*2)) {
		return slopeMod( n-(m*2), m );
	} else if (n > m){
		return (m*2) - n;
	} else if (n < 0){
		return slopeMod( n+(m*2), m );
	} else {
		return n;
	}
}

function determineMode( colour ) {
	switch (typeof colour) {
		case "object":
			if (typeof colour.r != "undefined") {
				return "rgb";
			} else if (typeof colour.l != "undefined") {
				return "hsl";
			} else if (typeof colour.c != "undefined") {
				return "cmyk";
			} else if (typeof colour.v != "undefined") {
				return "hsv";
			} else {
				return null;
			}
			break;
		case "string":
			if (colour[0] === "#") {
				return "hex";
			} else if (colour.indexOf("rgb(") == 0) {
				return "css-rgb";
			} else if (colour.indexOf("hsl(") == 0) {
				return "css-hsl";
			} else {
				return null;
			}
			break;
		default:
			return null;
			break;
	}
}

function ready( colour ) {
	switch (Object.prototype.toString.call(colour)) {
		case "[object Object]":
		case "[object String]":
			return {
				colour: colour,
				get rgb() { return convert("rgb", this.colour) },
				get hsl() { return convert("hsl", this.colour) },
				get hex() { return convert("hex", this.colour) },
				get cmyk() { return convert("cmyk", this.colour) },
				get cssrgb() { return convert("css-rgb", this.colour) },
				get csshsl() { return convert("css-hsl", this.colour) },
				get hsv() { return convert("hsv", this.colour) }
			}
			break;
		case "[object Array]":
			return {
				colours: colour,
				get rgb() { return this.colours.map( function(colour) {
					return convert("rgb", colour)
				}) },
				get hsl() { return this.colours.map( function(colour) {
					return convert("hsl", colour)
				}) },
				get hex() { return this.colours.map( function(colour) {
					return convert("hex", colour)
				}) },
				get cmyk() { return this.colours.map( function(colour) {
					return convert("cmyk", colour)
				}) },
				get cssrgb() { return this.colours.map( function(colour) {
					return convert("css-rgb", colour)
				}) },
				get csshsl() { return this.colours.map( function(colour) {
					return convert("css-hsl", colour)
				}) },
				get hsv() { return this.colours.map( function(colour) {
					return convert("hsv", colour)
				}) }
			}
			break;
		default:
			return null;
			break;
	}
}