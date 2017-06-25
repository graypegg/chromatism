const convertable = {
  'rgb': ['XYZ', 'cmyk', 'yiq', 'hex', 'hsl', 'hsv', 'cssrgb'],
  'hex': ['rgb'],
  'hsl': ['rgb', 'csshsl', 'hsv'],
  'hsv': ['rgb', 'hsl'],
  'csshsl': ['hsl'],
  'cssrgb': ['rgb'],
  'cmyk': ['rgb'],
  'XYZ': ['rgb', 'cieluv', 'cielab', 'xyY', 'lms'],
  'xyY': ['XYZ'],
  'lms': ['XYZ'],
  'cieluv': ['XYZ', 'cielch'],
  'cielch': ['cieluv', 'hsluv'],
  'cielab': ['XYZ'],
  'yiq': ['rgb'],
  'hsluv': ['cielch']
}

export default function getChain (from, to, ignore) {
  ignore = ignore || [from]
  if (convertable[from].includes(to)) {
    return [from, to]
  } else {
    return convertable[from]
      .filter((mode) => !ignore.includes(mode))
      .map((mode) => {
        return [from].concat(getChain(mode, to, ignore.concat([mode])))
      })
      .filter((chain) => chain[chain.length - 1] === to)[0]
  }
}
