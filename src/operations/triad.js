const helpers = require('../helpers')
const convert = require('./convert')

function triad(colourRef) {
	var colour = convert("hsl", colourRef)

	var colours = [{ h: colour.h, s: colour.s, l: colour.l }]
	for (var i = 0;i < 2;i++) {
		colour.h = (colour.h + 120) % 360
		colours.push({ h: colour.h, s: colour.s, l: colour.l })
	}

	return helpers.ready(colours)
}

module.exports = triad
