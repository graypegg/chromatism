function fromXYZ( { conversions, operations, helpers }, to, value ) {
  const epsilon = 0.008856;
  const kappa = 903.3;
  const white = helpers.getIlluminant('D65');

  switch (to) {

    case "rgb":
      let normalized = [value.X, value.Y, value.Z].map((v) => v / 100);

      // Observer is 2°
      // Whitepoint is D65
      // sRGB standard stuff eh!
      // [ Shamelessly stolen off Wikipedia ]
      let M = helpers.getTransform('INVERSE_SRGB_XYZ')

      let linear = M.map((m) => {
        return normalized.reduce((acc, v, key) => {
          return (m[key] * v) + acc
        }, 0)
      })

      let [ r, g, b ] = linear.map((C) => {
        if (C <= 0.0031308) return C * 12.92
        return 1.055 * Math.pow(C, 1 / 2.4) - 0.055
      }).map((o) => o * 255)

      return helpers.boundedRgb({ r, g, b })

    case "lms":
      let valueArray = [ value.X, value.Y, value.Z ].map((x) => x / 100)

      // Bradford Transformation
      let Mb = helpers.getTransform('BRADFORD')

      let resultArray = Mb.map((m) => {
        return valueArray.reduce((acc, v, key) => {
          return (m[key] * v) + acc
        }, 0)
      })

      return {
        rho: resultArray[0],
        gamma: resultArray[1],
        beta: resultArray[2]
      }

    case "cielab":
      const Xr = value.X / white.X;
      const Yr = value.Y / white.Y;
      const Zr = value.Z / white.Z;

      const toF = (x) => x > epsilon ? helpers.cbrt(x) : (kappa * x + 16) / 116;
      const Fx = toF(Xr), Fy = toF(Yr), Fz = toF(Zr);

      return {
        L: ((116 * Fy) - 16),
        a: 500 * (Fx - Fy),
        b: 200 * (Fy - Fz)
      };

    case "cieluv":

      const yr = value.Y / white.Y

      const L = (yr > epsilon ? (116 * helpers.cbrt(yr)) - 16 : kappa * yr)

      const chromeCoordsU = (c) => (c.X * 4) / (c.X + (15 * c.Y) + (3 * c.Z))
      const chromeCoordsV = (c) => (c.Y * 9) / (c.X + (15 * c.Y) + (3 * c.Z))

      const u = 13 * L * (chromeCoordsU(value) - chromeCoordsU(white))
      const v = 13 * L * (chromeCoordsV(value) - chromeCoordsV(white))

      return {
        L,
        u,
        v
      };

    case "xyY":
      const x = value.X / (value.X + value.Y + value.Z);
      const y = value.Y / (value.X + value.Y + value.Z);

      return {
        x,
        y,
        Y: value.Y
      };

    default:
      var rgb = helpers.boundedRgb(operations.convert({ conversions, operations, helpers }, "rgb", value));
      return operations.convert({ conversions, operations, helpers }, to, rgb);

  }
}

module.exports = fromXYZ;
