const helpers = require('../helpers')
const convert = require('./convert')

function complementary(colourRef) {
	var colour = convert("hsl", colourRef)

	colour.h = (colour.h + 180) % 360

	return helpers.ready(colour)
}

module.exports = complementary
