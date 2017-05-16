function fromCmyk( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "rgb":
      var r = 255 * (1-value.c) * (1-value.k);
      var g = 255 * (1-value.m) * (1-value.k);
      var b = 255 * (1-value.y) * (1-value.k);
      return {r: r, g: g, b: b};

    case "cssrgb":
      var r = 255 * (1-value.c) * (1-value.k);
      var g = 255 * (1-value.m) * (1-value.k);
      var b = 255 * (1-value.y) * (1-value.k);
      return "rgb(" + Math.round(r) + "," + Math.round(g) + "," + Math.round(b) + ")";

    default:
      var rgb = operations.convert({ conversions, operations, helpers }, "rgb", value);
      return operations.convert({ conversions, operations, helpers }, to, rgb);
  }
}

module.exports = fromCmyk;
