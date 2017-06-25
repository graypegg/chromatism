import determineType from './determine-type'
import getChain from './get-chain'
import * as conversions from '../conversions'

export default function convert (toType, value) {
  if (value === undefined) {
    throw new Error('No value provided')
  }

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

    let conversionFunction = conversions[fromType][toType]
    if (conversionFunction) return conversionFunction(value)

    conversionFunction = (colour) => {
      const chain = getChain(fromType, toType)
      const functionChain = chain.slice(1).reduce((acc, mode) => {
        acc.fns.push(conversions[acc.last][mode])
        acc.last = mode
        return acc
      }, {last: fromType, fns: []}).fns
      return functionChain.reduce((acc, fn) => fn(acc), colour)
    }

    return conversionFunction(value)
  }

}
