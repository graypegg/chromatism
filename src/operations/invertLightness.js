const helpers = require('../helpers')
const convert = require('./convert')

function invertLightness(colourRef) {
	var colour = convert("hsl", colourRef)

	colour.l  = 100 - colour.l

	return helpers.ready(colour)
}

module.exports = invertLightness
