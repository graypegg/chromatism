function applyFactor (inp, factor) {
  return Math.round(inp * factor) / factor
}

function round (inp, step) {
  if (step === 0) return inp
  let factor = 1.0 / step
  let out

  if (typeof inp === 'object') {
    out = {}
    for (let key in inp) {
      out[key] = applyFactor(inp[key], factor)
    }
  } else if (typeof inp === 'number') {
    out = applyFactor(inp, factor)
  } else {
    out = inp
  }

  return out
}

module.exports = round
