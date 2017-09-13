import getIlluminant from '../helpers/get-illuminant'
import matrixMultiply from '../helpers/matrix-multiply'
import getTransform from '../helpers/get-transform'
import convert from '../helpers/convert-to-type'
import makeColourObject from './convert'

export default function adapt (colourRef, illuminantDRef, illuminantSRef) {
  const colour = convert('XYZ', colourRef)

  // Source + Destination illuminant must be supplied as CIE Stanard Illuminant labels.
  // Otherwise assuming CIE-D65
  const illuminantD = convert('lms', getIlluminant(illuminantDRef) || getIlluminant('D65'))
  const illuminantS = convert('lms', getIlluminant(illuminantSRef) || getIlluminant('D65'))

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
