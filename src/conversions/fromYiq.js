function fromYiq( { conversions, operations, helpers }, to, value ) {
  /* YIQ is not a transformation of RGB, so it's pretty lossy */
  value.i = helpers.bounded(value.i, [-0.5957, 0.5957]);
  value.q = helpers.bounded(value.q, [-0.5226, 0.5226]);

  switch (to) {

    case "rgb":
      var r = 255 * (value.y + (0.956 * value.i) + (0.621 * value.q));
      var g = 255 * (value.y + (-0.272 * value.i) + (-0.647 * value.q));
      var b = 255 * (value.y + (-1.106 * value.i) + (-1.703 * value.q));
      r = helpers.bounded(r, [0, 255]);
      g = helpers.bounded(g, [0, 255]);
      b = helpers.bounded(b, [0, 255]);
      return {r: r, g: g, b: b};

    default:
      var rgb = operations.convert({ conversions, operations, helpers }, "rgb", value);
      return operations.convert({ conversions, operations, helpers }, to, rgb);

  }
}

module.exports = fromYiq;
