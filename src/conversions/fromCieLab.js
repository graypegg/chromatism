function fromCieLab( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "XYZ":
      const epsilon = 0.008856;
      const kappa = 903.3;
      const white = helpers.getIlluminant('D65');

      const Fy = (value.L + 16) / 116;
      const Fx = (value.a / 500) + Fy;
      const Fz = Fy - (value.b / 200);

      const toR = (f) => Math.pow(f, 3) > epsilon ? Math.pow(f, 3) : ((116 * f) - 16) / kappa;
      const Xr = toR(Fx), Zr = toR(Fz);
      const Yr = value.L > (kappa * epsilon) ? Math.pow(Fy, 3) : value.L / kappa;

      return {
        X: Xr * white.X,
        Y: Yr * white.Y,
        Z: Zr * white.Z
      };

    default:
      var XYZ = operations.convert({ conversions, operations, helpers }, "XYZ", value);
      return operations.convert({ conversions, operations, helpers }, to, XYZ);

  }
}

module.exports = fromCieLab;
