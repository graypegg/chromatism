const helpers = require('../helpers.js')

const bound = v => helpers.bounded(v, [ 0, 255 ])

module.exports = {
  rgb: value => {
    const i = helpers.bounded(value.i, [ -0.5957, 0.5957 ])
    const q = helpers.bounded(value.q, [ -0.5226, 0.5226 ])

    const r = 255 * bound(value.y + (0.956 * i) + (0.621 * q))
    const g = 255 * bound(value.y + (-0.272 * i) + (-0.647 * q))
    const b = 255 * bound(value.y + (-1.106 * i) + (-1.703 * q))

    return { r, g, b }
  }
}
