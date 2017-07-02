export default {
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
