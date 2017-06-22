function contains (obj, test) {
  const set = new Set(Object.keys(obj))
  return test.every(val => set.has(val))
}
const stringStartsWith = (colour, test) => typeof colour === 'string' && colour.slice(0, test.length) === test

export default {
  hex: colour => stringStartsWith(colour, '#'),
  rgb: colour => contains(colour, [ 'r', 'g', 'b' ]),
  cssrgb: colour => stringStartsWith(colour, 'rgb('),
  hsl: colour => contains(colour, [ 'h', 's', 'l' ]),
  csshsl: colour => stringStartsWith(colour, 'hsl('),
  hsv: colour => contains(colour, [ 'h', 's', 'v' ]),
  cmyk: colour => contains(colour, [ 'c', 'm', 'y', 'k' ]),
  yiq: colour => contains(colour, [ 'y', 'i', 'q' ]),
  XYZ: colour => contains(colour, [ 'X', 'Y', 'Z' ]),
  xyY: colour => contains(colour, [ 'x', 'y', 'Y' ]),
  lms: colour => contains(colour, [ 'rho', 'gamma', 'beta' ]),
  cielab: colour => contains(colour, [ 'L', 'a', 'b' ]),
  cieluv: colour => contains(colour, [ 'L', 'u', 'v' ]),
  cielch: colour => contains(colour, [ 'L', 'C', 'h' ]),
  hsluv: colour => contains(colour, [ 'hu', 's', 'l' ])
}
