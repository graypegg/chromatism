const { getIlluminant, matrixMultiply, getTransform } = require('../helpers')
const convert = require('../helpers/convert-to-type.js')
const makeColourObject = require('./convert.js')

function adapt(colourRef, illuminantDRef, illuminantSRef) {
	const colour = convert("XYZ", colourRef)
	const illuminantD = convert("lms", illuminantDRef)
	const illuminantS = illuminantSRef
		? convert("lms", illuminantSRef)
		: convert("lms", getIlluminant("D65"))

	// Bradford Transformation
	let Mb = getTransform('BRADFORD')

	// Inverse Bradford Transformation
	let Mbi = getTransform('INVERSE_BRADFORD')

	// Illuminant Ratio Matrix
	let Mir = [
		[ illuminantD.rho / illuminantS.rho, 0, 0 ],
		[ 0, illuminantD.gamma / illuminantS.gamma, 0 ],
		[ 0, 0, illuminantD.beta / illuminantS.beta ]
	]

	// Illuminant ratio matrix, pre-inversion
	let MbiMir = matrixMultiply(Mbi, Mir)

	// Illuminant ratio matrix
	let M = matrixMultiply(MbiMir, Mb)

	let valueArray = [ [ colour.X ], [ colour.Y ], [ colour.Z ] ]
	let resultArray = matrixMultiply(M, valueArray)

	let result = {
		X: resultArray[0][0],
		Y: resultArray[1][0],
		Z: resultArray[2][0]
	}

	return makeColourObject(result)
}

module.exports = adapt
