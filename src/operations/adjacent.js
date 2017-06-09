const helpers = require('../helpers')
const convert = require('./convert')

function adjacent(deg, amount, colourRef) {
	const colour = convert("hsl", colourRef)
	const colours = [{ h: colour.h, s: colour.s, l: colour.l }]

	for (let i = 0;i < (amount - 1);i++) {
		colour.h = helpers.negMod((colour.h + deg), 360)
		colours.push({ h: colour.h, s: colour.s, l: colour.l })
	}

	return helpers.ready(colours)
}

module.exports = adjacent
