let constants = require('./constants.js')

var helpers = {
  getIlluminant (ref) {
    return constants.ILLUMINANTS[ref];
  },

  matrixMultiply(a, b) {
    if (a[0].length != b.length) {
      throw "error: incompatible sizes";
    }

    var result = [];
    for (var i = 0; i < a.length; i++) {
      result[i] = [];
      for (var j = 0; j < b[0].length; j++) {
        var sum = 0;
        for (var k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  },

  negMod( n, m ) {
  	return ((n % m) + m) % m;
  },

  slopeMod( n, m ) {
  	if (n > (m*2)) {
  		return slopeMod( n-(m*2), m );
  	} else if (n > m){
  		return (m*2) - n;
  	} else if (n < 0){
  		return slopeMod( n+(m*2), m );
  	} else {
  		return n;
  	}
  },

  bounded( val, range ) {
  	if (val < range[0]) {
  		val = range[0]
  	} else if (val > range[1]) {
  		val = range[1]
  	}
  	return val;
  },

  determineMode( colour ) {
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
  			} else if (typeof colour.q != "undefined") {
  				return "yiq";
  			} else if (typeof colour.X != "undefined") {
  				return "XYZ";
  			} else if (typeof colour.gamma != "undefined") {
  				return "LMS";
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
  },

  ready( { conversions, operations, helpers }, colour ) {
  	switch (Object.prototype.toString.call(colour)) {
  		case "[object Object]":
  		case "[object String]":
  			return {
  				colour: colour,
  				get rgb() { return operations.convert({ conversions, operations, helpers }, "rgb", this.colour) },
  				get hsl() { return operations.convert({ conversions, operations, helpers }, "hsl", this.colour) },
  				get hex() { return operations.convert({ conversions, operations, helpers }, "hex", this.colour) },
  				get cmyk() { return operations.convert({ conversions, operations, helpers }, "cmyk", this.colour) },
  				get cssrgb() { return operations.convert({ conversions, operations, helpers }, "css-rgb", this.colour) },
  				get csshsl() { return operations.convert({ conversions, operations, helpers }, "css-hsl", this.colour) },
  				get hsv() { return operations.convert({ conversions, operations, helpers }, "hsv", this.colour) },
  				get yiq() { return operations.convert({ conversions, operations, helpers }, "yiq", this.colour) },
  				get XYZ() { return operations.convert({ conversions, operations, helpers }, "XYZ", this.colour) },
  				get LMS() { return operations.convert({ conversions, operations, helpers }, "LMS", this.colour) }
  			}
  			break;
  		case "[object Array]":
  			return {
  				colours: colour,
  				get rgb() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "rgb", colour)
  				}) },
  				get hsl() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "hsl", colour)
  				}) },
  				get hex() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "hex", colour)
  				}) },
  				get cmyk() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "cmyk", colour)
  				}) },
  				get cssrgb() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "css-rgb", colour)
  				}) },
  				get csshsl() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "css-hsl", colour)
  				}) },
  				get hsv() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "hsv", colour)
  				}) },
  				get yiq() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "yiq", colour)
  				}) },
  				get XYZ() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "XYZ", colour)
  				}) },
  				get LMS() { return this.colours.map( function(colour) {
  					return operations.convert({ conversions, operations, helpers }, "LMS", colour)
  				}) }
  			}
  			break;
  		default:
  			return null;
  			break;
  	}
  }
}

module.exports = helpers;
