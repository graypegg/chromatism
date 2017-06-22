import bounded from './bounded'

const bounded255 = val => bounded(val, [ 0, 255 ])

export default function boundedRgb (rgb) {
  return {
    r: bounded255(rgb.r),
    g: bounded255(rgb.g),
    b: bounded255(rgb.b)
  }
}
