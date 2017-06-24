import determineType from './determine-type'
import * as conversions from '../conversions'

export default function convert (toType, value) {
  if (value === undefined) {
    throw new Error('No value provided')
  }

  console.log(value)

  if (Array.isArray(value)) {
    // If value passed in is an array, then recurse over the array.

    value.map((colour) => (
      convert(toType, colour)
    ))
    return colour

  } else {
    // If value is NOT an array, convert to new colour mode as long as
    // source + destination colour modes are different.

    const fromType = determineType(value)

    if (fromType === toType) {
      return value
    }

    const conversionFunction = conversions[fromType][toType]

    return conversionFunction(value)
  }

}
