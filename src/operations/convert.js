const convert = require('../helpers/convert-to-type.js').default
const types = Object.keys(require('../helpers/test-color-type.js').default)

module.exports = function makeColourObject (colour) {
  const object = {}

  types.forEach(type => {
    Object.defineProperty(object, type, {
      get: () => convert(type, colour),
      enumerable: true
    })
  })

  return object
}
