import convert from '../helpers/convert-to-type'
import testColorType from '../helpers/test-color-type'

const types = Object.keys(testColorType)

export default function makeColourObject (colour) {
  const object = {}

  types.forEach(type => {
    Object.defineProperty(object, type, {
      get: () => convertArrayOrColour(type, colour),
      enumerable: true
    })
  })

  return object
}

const convertArrayOrColour = (type, any) => Array.isArray(any)
  ? any.map(colour => convert(type, colour))
  : convert(type, any)
