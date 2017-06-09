const helpers = require('../helpers')
const convert = require('./convert')

function hue(shift, colourRef) {
	const colour = convert("hsl", colourRef)

	colour.h = helpers.negMod((colour.h + shift), 360)

	return helpers.ready(colour)
}

module.exports = hue
