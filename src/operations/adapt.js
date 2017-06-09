const convert = require('./convert')
const helpers = require('../helpers')

function adapt(colourRef, illuminantDRef, illuminantSRef) {
	const colour = convert("XYZ", colourRef)
	const illuminantD = convert("lms", illuminantDRef)
	const illuminantS = illuminantSRef
		? convert("lms", illuminantSRef)
		: convert("lms", helpers.getIlluminant("D65"))

	// Bradford Transformation
	let Mb = helpers.getTransform('BRADFORD')

	// Inverse Bradford Transformation
	let Mbi = helpers.getTransform('INVERSE_BRADFORD')

	// Illuminant Ratio Matrix
	let Mir = [
		[ illuminantD.rho / illuminantS.rho, 0, 0 ],
		[ 0, illuminantD.gamma / illuminantS.gamma, 0 ],
		[ 0, 0, illuminantD.beta / illuminantS.beta ]
	]

	// Illuminant ratio matrix, pre-inversion
	let MbiMir = helpers.matrixMultiply(Mbi, Mir)

	// Illuminant ratio matrix
	let M = helpers.matrixMultiply(MbiMir, Mb)

	let valueArray = [ [ colour.X ], [ colour.Y ], [ colour.Z ] ]
	let resultArray = helpers.matrixMultiply(M, valueArray)

	let result = {
		X: resultArray[0][0],
		Y: resultArray[1][0],
		Z: resultArray[2][0]
	}

	return helpers.ready(result)
}

module.exports = adapt
