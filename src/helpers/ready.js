const conversions = require('../conversions')
const convert = require('../operations/convert.js')

module.exports = function ready(colour) {
	console.log('conversions', Object.keys(conversions))
	let out = {}

	switch (Object.prototype.toString.call(colour)) {

	case "[object Object]":
	case "[object String]":
		out.colour = colour
		console.log('colour', colour)
		for (let model in conversions) {
			if (!conversions.hasOwnProperty(model)) {
				continue
			}
			(function(model) {
				out[model] = convert(model, colour)
				// Object.defineProperty(out, model, {
				// 	get: () => {
				// 		return convert(model, colour)
				// 	},
				// 	enumerable: true
				// })
			})(model)
		}

		return out

	case "[object Array]":
		out.colours = colour
		console.log('colours', colour)
		for (let model in conversions) {
			if (!conversions.hasOwnProperty(model)) {
				continue
			}
			(function(model) {
				Object.defineProperty(out, model, {
					get: () => {
						let deepMap = (function(colours) {
							return colours.map((colourItem) => {
								if (Array.isArray(colourItem)) {
									return deepMap(colourItem)
								}
								return convert(model, colourItem)
							})
						})
						return deepMap(colour)
					},
					enumerable: true
				})
			})(model)
		}

		return out

	default:
		return null

	}
}
