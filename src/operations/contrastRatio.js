const convert = require('../helpers/convert-to-type.js')
const makeColourObject = require('./convert.js')

function contrastRatio(colourRef) {
	var colour = convert("rgb", colourRef)

	var yiq = ((colour.r * 299) + (colour.g * 587) + (colour.b * 114)) / 1000
	if (yiq >= 128) {
		colour = { r: 0, g: 0, b: 0 }
	} else {
		colour = { r: 255, g: 255, b: 255 }
	}

	return makeColourObject(colour)
}

module.exports = contrastRatio
