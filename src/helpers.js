const constants = require('./constants.js')

const helpers = {
	getIlluminant(ref) {
		return constants.ILLUMINANTS[ref]
	},

	getTransform(ref) {
		return constants.TRANSFORMS[ref]
	},

	matrixMultiply(a, b) {
		var result = []
		for (let i = 0; i < a.length; i++) {
			result[i] = []
			for (let j = 0; j < b[0].length; j++) {
				var sum = 0
				for (let k = 0; k < a[0].length; k++) {
					sum += a[i][k] * b[k][j]
				}
				result[i][j] = sum
			}
		}
		return result
	},

	cbrt(x) {
		if (!Math.cbrt) {
			var y = Math.pow(Math.abs(x), 1 / 3)
			return x < 0 ? -y : y
		} else {
			return Math.cbrt(x)
		}
	},

	toRad(angle) {
		return angle * (Math.PI / 180)
	},

	toDeg(angle) {
		return angle * (180 / Math.PI)
	},

	negMod(n, m) {
		return ((n % m) + m) % m
	},

	slopeMod(n, m) {
		if (n > (m * 2)) {
			return slopeMod(n - (m * 2), m)
		} else if (n > m){
			return (m * 2) - n
		} else if (n < 0){
			return slopeMod(n + (m * 2), m)
		} else {
			return n
		}
	},

	bounded(val, range) {
		if (val < range[0]) {
			val = range[0]
		} else if (val > range[1]) {
			val = range[1]
		}
		return val
	},

	boundedRgb(rgb) {
		let bounded = (val) => this.bounded(val, [ 0, 255 ])
		return {
			r: bounded(rgb.r),
			g: bounded(rgb.g),
			b: bounded(rgb.b)
		}
	},
}

module.exports = helpers
