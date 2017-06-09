const helpers = require('../helpers')
const convert = require('./convert')

function invert(colourRef) {
	var colour = convert("rgb", colourRef)

	colour.r = helpers.negMod((255 - colour.r), 255)
	colour.g = helpers.negMod((255 - colour.g), 255)
	colour.b = helpers.negMod((255 - colour.b), 255)

	return helpers.ready(colour)
}

module.exports = invert
