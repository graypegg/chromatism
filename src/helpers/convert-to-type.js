import determineType from './determine-type'
import * as conversions from '../conversions'

const conversionSteps = {
  rgb: {
    default: 'XYZ',
    csshsl: 'hsl',
    hsv: 'hsl'
  },
  hex: 'rgb',
  hsl: 'rgb',
  hsv: 'rgb',
  csshsl: 'hsl',
  cssrgb: 'rgb',
  cmyk: 'rgb',
  XYZ: {
    default: 'rgb',
    cielch: 'cieluv',
    hsluv: 'cieluv'
  },
  xyY: 'XYZ',
  lms: 'XYZ',
  cieluv: {
    default: 'XYZ',
    hsluv: 'cielch'
  },
  cielch: 'cieluv',
  cielab: 'XYZ',
  yiq: 'rgb',
  hsluv: 'cielch'
}

export default function convert (toType, value, currentType) {
  if (value === undefined) {
    throw new Error('No value provided')
  }

  const fromType = currentType || determineType(value)

  if (fromType === toType) {
    return value
  }

  if (conversions[fromType][toType]) {
    return convertNow(fromType, toType, value)
  }

  const possibleSteps = conversionSteps[fromType]
  const nextStepType = typeof possibleSteps === 'string'
    ? possibleSteps
    : (possibleSteps[toType] || possibleSteps.default)

  const convertedToNextStep = convertNow(fromType, nextStepType, value)
  return convert(toType, convertedToNextStep, nextStepType)
}

const convertNow = (fromType, toType, value) => conversions[fromType][toType](value)
