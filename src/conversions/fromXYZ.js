function fromXYZ( { conversions, operations, helpers }, to, value ) {
	switch (to){
    case "rgb":
    let normalized = [value.X, value.Y, value.Z].map((v) => v / 100);

    // Observer is 2°
    // Whitepoint is D65
    // sRGB standard stuff eh!
    // [ Shamelessly stolen off Wikipedia ]
    let M = [
      [ 3.2406, -1.5372, -0.4986 ],
      [ -0.9689, 1.8758, 0.0415 ],
      [ 0.0557, -0.2040, 1.0570 ]
    ]

    let linear = M.map((m) => {
      return normalized.reduce((acc, v, key) => {
        return (m[key] * v) + acc
      }, 0)
    })

    let [ r, g, b ] = linear.map((C) => {
      if (C <= 0.0031308) return C * 12.92
      return 1.055 * Math.pow(C, 1 / 2.4) - 0.055
    }).map((o) => o * 255)

      return { r, g, b }

      break;
		default:
      var rgb = operations.convert({ conversions, operations, helpers }, "rgb", value);
      return operations.convert({ conversions, operations, helpers }, to, rgb);
      break;
	}
}

module.exports = fromXYZ;
