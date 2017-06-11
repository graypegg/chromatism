import { getIlluminant } from '../helpers'

const epsilon = 0.008856
const kappa = 903.3
const white = getIlluminant('D65')
const toR = f => Math.pow(f, 3) > epsilon ? Math.pow(f, 3) : ((116 * f) - 16) / kappa

export default {
  XYZ: value => {
    const Fy = (value.L + 16) / 116
    const Fx = (value.a / 500) + Fy
    const Fz = Fy - (value.b / 200)

    const Xr = toR(Fx), Zr = toR(Fz)
    const Yr = value.L > (kappa * epsilon) ? Math.pow(Fy, 3) : value.L / kappa

    return {
      X: Xr * white.X,
      Y: Yr * white.Y,
      Z: Zr * white.Z
    }
  }
}
