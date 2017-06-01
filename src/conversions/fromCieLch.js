function fromCieLch( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "cieluv":
      const h = helpers.toRad(value.h)

      const u = value.C * Math.cos(h)
      const v = value.C * Math.sin(h)

      return {
        L: value.L,
        u,
        v
      };

    default:
      var CieLuv = operations.convert({ conversions, operations, helpers }, "cieluv", value);
      return operations.convert({ conversions, operations, helpers }, to, CieLuv);

  }
}

module.exports = fromCieLch;
