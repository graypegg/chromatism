import getIlluminant from '../helpers/get-illuminant'
import getTransform from '../helpers/get-transform'
import boundedRgb from '../helpers/bounded-rgb'
import cubeRoot from '../helpers/cube-root'

const epsilon = 0.008856
const kappa = 903.3
const white = getIlluminant('D65')

export default {
  rgb: value => {
    let normalized = [ value.X, value.Y, value.Z ].map((v) => v / 100)

    // Observer is 2°
    // Whitepoint is D65
    // sRGB standard stuff eh!
    // [ Shamelessly stolen off Wikipedia ]
    let M = getTransform('INVERSE_SRGB_XYZ')

    let linear = M.map((m) => {
      return normalized.reduce((acc, v, key) => {
        return (m[key] * v) + acc
      }, 0)
    })

    let [ r, g, b ] = linear.map((C) => {
      if (C <= 0.0031308) {
        return C * 12.92
      }
      return 1.055 * Math.pow(C, 1 / 2.4) - 0.055
    }).map((o) => o * 255)

    return boundedRgb({ r, g, b })
  },

  lms: value => {
    let valueArray = [ value.X, value.Y, value.Z ].map((x) => x / 100)

    // Bradford Transformation
    let Mb = getTransform('BRADFORD')

    let resultArray = Mb.map((m) => {
      return valueArray.reduce((acc, v, key) => (m[key] * v) + acc, 0)
    })

    return {
      rho: resultArray[0],
      gamma: resultArray[1],
      beta: resultArray[2]
    }
  },

  cielab: value => {
    const Xr = value.X / white.X
    const Yr = value.Y / white.Y
    const Zr = value.Z / white.Z

    const toF = (x) => x > epsilon ? cubeRoot(x) : (kappa * x + 16) / 116
    const Fx = toF(Xr)
    const Fy = toF(Yr)
    const Fz = toF(Zr)

    return {
      L: ((116 * Fy) - 16),
      a: 500 * (Fx - Fy),
      b: 200 * (Fy - Fz)
    }
  },

  cieluv: value => {
    const yr = value.Y / white.Y

    const L = (yr > epsilon ? (116 * cubeRoot(yr)) - 16 : kappa * yr)

    const chromeCoordsU = (c) => (c.X * 4) / (c.X + (15 * c.Y) + (3 * c.Z))
    const chromeCoordsV = (c) => (c.Y * 9) / (c.X + (15 * c.Y) + (3 * c.Z))

    const u = 13 * L * (chromeCoordsU(value) - chromeCoordsU(white))
    const v = 13 * L * (chromeCoordsV(value) - chromeCoordsV(white))

    return {
      L,
      u,
      v
    }
  },

  xyY: value => {
    const x = value.X / (value.X + value.Y + value.Z)
    const y = value.Y / (value.X + value.Y + value.Z)

    return {
      x,
      y,
      Y: value.Y
    }
  }
}
