const helpers = require('../helpers')
const convert = require('./convert')

function mid(colourOneRef, colourTwoRef) {
	var colourOne = convert("hsl", colourOneRef)
	var colourTwo = convert("hsl", colourTwoRef)

	var midHue = (colourOne.h + colourTwo.h) / 2
	var midSat = (colourOne.s + colourTwo.s) / 2
	var midLight = (colourOne.l + colourTwo.l) / 2
	var colour = { h: midHue, s: midSat, l: midLight }

	return helpers.ready(colour)
}

module.exports = mid
