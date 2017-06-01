function fromCieLuv( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "XYZ":
      const epsilon = 0.008856;
      const kappa = 903.3;
      const white = helpers.getIlluminant('D65');

      const chromeCoordsU = (c) => (c.X * 4) / (c.X + (15 * c.Y) + (3 * c.Z))
      const chromeCoordsV = (c) => (c.Y * 9) / (c.X + (15 * c.Y) + (3 * c.Z))

      const u0 = chromeCoordsU(white)
      const v0 = chromeCoordsV(white)

      const a = (1/3) * (((52 * value.L) / (value.u + ((13 * value.L) * u0))) - 1)

      const Y = value.L > (kappa * epsilon) ? (Math.pow(((value.L + 16) / 116), 3)) : value.L / kappa

      const b = -5 * Y
      const d = Y * (((39 * value.L) / (value.v + ((13 * value.L) * v0))) - 5)

      const X = (d - b) / (a - (-1/3))
      const Z = (X * a) + b

      return {
        X: X * 100,
        Y: Y * 100,
        Z: Z * 100
      };

    case 'cielch':
      const C = Math.sqrt(Math.pow(value.u, 2) + Math.pow(value.v, 2))
      let h = Math.atan2(value.v, value.u)
      if (h < 0) h += (2 * Math.PI)
      h = helpers.toDeg(h)

      return {
        L: value.L,
        C,
        h
      }
      break;

    default:
      var XYZ = operations.convert({ conversions, operations, helpers }, "XYZ", value);
      return operations.convert({ conversions, operations, helpers }, to, XYZ);

  }
}

module.exports = fromCieLuv;
