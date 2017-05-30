function adapt( _dep, colourRef, illuminantDRef, illuminantSRef ) {

  var colour = _dep.operations.convert( _dep, "XYZ", colourRef );
  var illuminantD = _dep.operations.convert( _dep, "lms", illuminantDRef );
  if (illuminantSRef) {
    var illuminantS = _dep.operations.convert( _dep, "lms", illuminantSRef );
  } else {
    var illuminantS = _dep.operations.convert( _dep, "lms", _dep.helpers.getIlluminant("D65") );
  }

  // Bradford Transformation
  let Mb = _dep.helpers.getTransform('BRADFORD')

  // Inverse Bradford Transformation
  let Mbi = _dep.helpers.getTransform('INVERSE_BRADFORD')

  // Illuminant Ratio Matrix
  let Mir = [
    [ illuminantD.rho / illuminantS.rho, 0, 0 ],
    [ 0, illuminantD.gamma / illuminantS.gamma, 0 ],
    [ 0, 0, illuminantD.beta / illuminantS.beta ]
  ]

  // Illuminant ratio matrix, pre-inversion
  let MbiMir = _dep.helpers.matrixMultiply(Mbi, Mir)

  // Illuminant ratio matrix
  let M = _dep.helpers.matrixMultiply(MbiMir, Mb)

  let valueArray = [[ colour.X ], [ colour.Y ], [ colour.Z ] ]
  let resultArray = _dep.helpers.matrixMultiply(M, valueArray)

  let result = {
    X: resultArray[0][0],
    Y: resultArray[1][0],
    Z: resultArray[2][0]
  }

  return _dep.helpers.ready( _dep, result );
}

module.exports = adapt;
