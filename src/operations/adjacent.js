const { negMod } = require('../helpers')
const convert = require('../helpers/convert-to-type.js')
const makeColourObject = require('./convert.js')

function adjacent(deg, amount, colourRef) {
	const colour = convert("hsl", colourRef)
	const colours = [{ h: colour.h, s: colour.s, l: colour.l }]

	for (let i = 0;i < (amount - 1);i++) {
		colour.h = negMod((colour.h + deg), 360)
		colours.push({ h: colour.h, s: colour.s, l: colour.l })
	}

	return makeColourObject(colours)
}

module.exports = adjacent
