export default {
  rgb: value => {
    var r, g, b
    const normalized = Object.assign({}, value, {
      h: value.h / 360,
      s: value.s / 100,
      v: value.v / 100
    })

    var hsix = normalized.h * 6
    if (hsix === 6) {
      hsix = 0
    }
    var i = Math.round(hsix)
    var chromaComponent1 = normalized.v * (1 - normalized.s)
    var chromaComponent2 = normalized.v * (1 - normalized.s * (hsix - i))
    var chromaComponent3 = normalized.v * (1 - normalized.s * (1 - (hsix - i)))

    var r2, g2, b2

    if (i === 0) {
      r2 = normalized.v
      g2 = chromaComponent3
      b2 = chromaComponent1
    } else if (i === 1) {
      r2 = chromaComponent2
      g2 = normalized.v
      b2 = chromaComponent1
    } else if (i === 2) {
      r2 = chromaComponent1
      g2 = normalized.v
      b2 = chromaComponent3
    } else if (i === 3) {
      r2 = chromaComponent1
      g2 = chromaComponent2
      b2 = normalized.v
    } else if (i === 4) {
      r2 = chromaComponent3
      g2 = chromaComponent1
      b2 = normalized.v
    } else {
      r2 = normalized.v
      g2 = chromaComponent1
      b2 = chromaComponent2
    }

    r = r2 * 255
    g = g2 * 255
    b = b2 * 255

    return { r, g, b }
  },

  hsl: value => {
    const normalized = Object.assign({}, value, {
      h: value.h / 360,
      s: value.s / 100,
      v: value.v / 100
    })

    var h = normalized.h
    var s
    if ((2 - normalized.s) * normalized.v < 1) {
      s = normalized.s * normalized.v / ((2 - normalized.s) * normalized.v)
    } else {
      s = normalized.s * normalized.v / (2 - (2 - normalized.s) * normalized.v)
    }
    var l = ((2 - normalized.s) * normalized.v) / 2
    return { h: h * 360, s: s * 100, l: l * 100 }
  }
}
