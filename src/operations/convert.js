import convert from '../helpers/convert-to-type'
import testColorType from '../helpers/test-color-type'

const types = Object.keys(testColorType)

export default function makeColourObject (colour) {
  const object = {}

  types.forEach(type => {
    Object.defineProperty(object, type, {
      get: () => convert(type, colour),
      enumerable: true
    })
  })

  return object
}
