function fromCieLab( { conversions, operations, helpers }, to, value ) {
	switch (to){
    case "XYZ":
      const epsilon = 0.008856;
      const kappa = 903.3;
      const white = helpers.getIlluminant('D65');

      const Xr = value.X / white.X;
      const Yr = value.Y / white.Y;
      const Zr = value.Z / white.Z;

      const toF = (x) => x > epsilon ? helpers.cbrt(x) : (kappa * x + 16) / 116;
      const Fx = toF(Xr), Fy = toF(Yr), Fz = toF(Zr);

      return {
        L: (116 * Fy) − 16,
        a: 500 * (Fx - Fy),
        b: 200 * (Fy - Fz)
      };
		default:
      var XYZ = operations.convert({ conversions, operations, helpers }, "XYZ", value);
      return operations.convert({ conversions, operations, helpers }, to, XYZ);
      break;
	}
}

module.exports = fromXYZ;
