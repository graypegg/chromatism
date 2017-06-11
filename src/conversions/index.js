import fromHex from './fromHex'
import fromRgb from './fromRgb'
import fromCssRgb from './fromCssRgb'
import fromHsl from './fromHsl'
import fromCssHsl from './fromCssHsl'
import fromHsv from './fromHsv'
import fromCmyk from './fromCmyk'
import fromYiq from './fromYiq'
import fromXYZ from './fromXYZ'
import fromxyY from './fromxyY'
import fromLms from './fromLms'
import fromCieLab from './fromCieLab'
import fromCieLuv from './fromCieLuv'
import fromCieLch from './fromCieLch'
import fromHsluv from './fromHsluv'

export const hex = fromHex
export const rgb = fromRgb
export const cssrgb = fromCssRgb
export const hsl = fromHsl
export const csshsl = fromCssHsl
export const hsv = fromHsv
export const cmyk = fromCmyk
export const yiq = fromYiq
export const XYZ = fromXYZ
export const xyY = fromxyY
export const lms = fromLms
export const cielab = fromCieLab
export const cieluv = fromCieLuv
export const cielch = fromCieLch
export const hsluv = fromHsluv

export default {
  hex: fromHex,
  rgb: fromRgb,
  cssrgb: fromCssRgb,
  hsl: fromHsl,
  csshsl: fromCssHsl,
  hsv: fromHsv,
  cmyk: fromCmyk,
  yiq: fromYiq,
  XYZ: fromXYZ,
  xyY: fromxyY,
  lms: fromLms,
  cielab: fromCieLab,
  cieluv: fromCieLuv,
  cielch: fromCieLch,
  hsluv: fromHsluv
}
