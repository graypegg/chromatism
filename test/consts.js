const red = {
  rgb: {
    value: { r: 255, g: 0, b: 0 },
    accuracy: {
      rgb: 0,
      cssrgb: null,
      hex: null,
      hsl: 0,
      csshsl: null,
      hsv: 0,
      cmyk: 0.25,
      yiq: 0.25,
      XYZ: 0,
      xyY: 0,
      lms: 0.1,
      cielab: 0.25,
      cieluv: 0.000001,
      cielch: 0.025,
      hsluv: 0.025
    }
  },
  hex: {
    value: '#ff0000',
    accuracy: {
      cielab: 0.000000001
    }
  },
  cssrgb: {
    value: 'rgb(255,0,0)',
    accuracy: {
      cielab: 0.000000001
    }
  },
  hsl: {
    value: { h: 0, s: 100, l: 50 },
    accuracy: {
      rgb: 0,
      cssrgb: null,
      hex: null,
      hsl: 0,
      csshsl: null,
      hsv: 0,
      cmyk: 0.25,
      yiq: 0.25,
      XYZ: 0,
      xyY: 0,
      lms: 0.1,
      cielab: 0.25,
      cieluv: 0.000001,
      cielch: 0.025,
      hsluv: 0.025
    }
  },
  csshsl: {
    value: 'hsl(0,100%,50%)',
    accuracy: {
      cielab: 0.000000001
    }
  },
  hsv: {
    value: { h: 0, s: 100, v: 100 },
    accuracy: {
      rgb: 0,
      cssrgb: null,
      hex: null,
      hsl: 0,
      csshsl: null,
      hsv: 0,
      cmyk: 0.5,
      yiq: 0.25,
      XYZ: 0,
      xyY: 0,
      lms: 0.1,
      cielab: 0.25,
      cieluv: 0.000001,
      cielch: 0.025,
      hsluv: 0.025
    }
  },
  cmyk: {
    value: { c: 0, m: 1, y: 1, k: 0 },
    accuracy: {
      rgb: 0,
      cssrgb: null,
      hex: null,
      hsl: 0,
      csshsl: null,
      hsv: 0,
      cmyk: 0,
      yiq: 0.25,
      XYZ: 0,
      xyY: 0,
      lms: 0.1,
      cielab: 0.25,
      cieluv: 0.000001,
      cielch: 0.025,
      hsluv: 0.025
    }
  },
  yiq: {
    value: { y: 0.299, i: 0.5957, q: 0.211 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0,
      XYZ: 0.25,
      xyY: 0.25,
      lms: 0.1,
      cielab: 0.25,
      cieluv: 0.25,
      cielch: 0.25,
      hsluv: 0.25
    }
  },
  XYZ: {
    value: { X: 41.24, Y: 21.26, Z: 1.9300000000000002 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0.25,
      XYZ: 0,
      xyY: 0,
      lms: 0.5,
      cielab: 0.5,
      cieluv: 0.000001,
      cielch: 0.025,
      hsluv: 0.25
    }
  },
  xyY: {
    value: { x: 0.6400744994567747, y: 0.3299705106316933, Y: 21.26 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0.25,
      XYZ: 0.0000000001, // God damn floating point numbers
      xyY: 0,
      lms: 0.5,
      cielab: 0.5,
      cieluv: 0.000001,
      cielch: 0.025,
      hsluv: 0.25
    }
  },
  lms: {
    value: { rho: 0.42266086, gamma: 0.05561592999999999, beta: 0.02135054 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0.25,
      XYZ: 0.5,
      xyY: 0.25,
      lms: 0,
      cielab: 0.5,
      cieluv: 0.0001,
      cielch: 0.025,
      hsluv: 0.25
    }
  },
  cielab: {
    value: { L: 53.23288178584244, a: 80.10930952982204, b: 67.22006831026425 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0.5,
      XYZ: 0.25,
      xyY: 0.25,
      lms: 0.5,
      cielab: 0,
      cieluv: 0.000001,
      cielch: 0.025,
      hsluv: 0.25
    }
  },
  cieluv: {
    value: { L: 53.23288178584245, u: 175.05303573649485, v: 37.750505032665004 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0.5,
      XYZ: 0.25,
      xyY: 0.25,
      lms: 0.5,
      cielab: 0.000001,
      cieluv: 0,
      cielch: 0.025,
      hsluv: 0.25
    }
  },
  cielch: {
    value: { L: 53.23288178584245, C: 179.077262517562, h: 12.169571625677895 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0.5,
      XYZ: 0.25,
      xyY: 0.25,
      lms: 0.5,
      cielab: 0.001,
      cieluv: 0.001,
      cielch: 0,
      hsluv: 0.025
    }
  },
  hsluv: {
    value: { hu: 12.169571625677895, s: 99.98979433290384, l: 53.23288178584245 },
    accuracy: {
      rgb: 0.25,
      cssrgb: null,
      hex: null,
      hsl: 0.25,
      csshsl: null,
      hsv: 0.25,
      cmyk: 0.25,
      yiq: 0.5,
      XYZ: 0.25,
      xyY: 0.25,
      lms: 0.5,
      cielab: 0.001,
      cieluv: 0.001,
      cielch: 0.025,
      hsluv: 0
    }
  },
}

module.exports = { red }
