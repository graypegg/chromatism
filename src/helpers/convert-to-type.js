const determineType = require('./determine-type.js')
const conversions = require('../conversions').default

console.log(conversions)

function depthFirstSearchRecursive (fromType, toType, typesSoFar, stack) {
  const possibilities = conversions[fromType]
  if (possibilities[toType]) {
    return [ ...typesSoFar, toType ]
  } else {
    Object.keys(possibilities)
			.filter(type => typesSoFar.indexOf(type) === -1)
			.forEach(possibleType => {
  stack.push(
					() => depthFirstSearchRecursive(possibleType, toType, [ ...typesSoFar, possibleType ], stack)
				)
})
  }
}

function depthFirstSearch (fromType, toType) {
  const stack = []
  let workingPath = depthFirstSearchRecursive(fromType, toType, [], stack)

  while (!workingPath) {
    const nextStepFunction = stack.shift()
    workingPath = nextStepFunction()
  }

  return workingPath
}

function convert (toType, value) {
  if (value === undefined) {
    throw new Error('No value provided')
  }

  const fromType = determineType(value)

  if (fromType === toType) {
    return value
  }

  const conversionSteps = depthFirstSearch(fromType, toType)

  return conversionSteps.reduce(({ lastType, value }, nextType) => {
    const conversionFunction = conversions[lastType][nextType]

    return {
      lastType: nextType,
      value: conversionFunction(value)
    }
  }, {
    value,
    lastType: fromType
  }).value
}

module.exports = convert
