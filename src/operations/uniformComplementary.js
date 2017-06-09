const helpers = require('../helpers')
const convert = require('./convert')

function complementary(colourRef) {
	var colour = convert("hsluv", colourRef)

	colour.hu = (colour.hu + 180) % 360

	return helpers.ready(colour)
}

module.exports = complementary
