import colorTypeTests from './test-color-type'

const types = Object.keys(colorTypeTests)

export default function determineType (colour) {
  const type = types.find(type => colorTypeTests[type](colour))

  if (!type) {
    throw new Error('No type found for color ' + colour)
  }

  return type
}
