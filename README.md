# Chromatism

A simple set of utility functions for colours.

[![NPM](https://nodei.co/npm/chromatism.png?compact=true)](https://nodei.co/npm/chromatism/)

## Installation

```bash
$ npm install --save chromatism
```

#### CommonJS
```javascript
var chromatism = require("chromatism");
```

#### Browser without bundling
```html
<script type="text/javascript" src="path-to-files/dist/chromatism.min.js"></script>
```

**_Note:_** The following examples return different types of values, (*hex*, *rgb*, *hsl*, etc) but you can use any of the available colour modes as seen in the colour modes table at the bottom of this README.

## Colour Functions

### Convert colour types
```javascript
var newColour = chromatism.convert( value ).hex;
```

Value can be any colour in any of the supported colour modes. (See chart at bottom of README) This is more of an identity operation, as it just returns an object containing all of the available colour modes of the result.

All colour modes supported can be converted to any other. This does however mean that some conversions will have intermediate values, which can cause small inconsistencies, especially when changing colour spaces. The path for each conversion is optimised as much as possible to avoid loss of colour information.

---

### Generate a complementary colour
```javascript
var newColour = chromatism.complementary( value ).rgb;
```

![Complementary](https://toi.sh/cdn/chromatism/complementary.png)

---

### Generate an array of triad colours
```javascript
var newColour = chromatism.triad( value ).hsl;
```

![Triad](https://toi.sh/cdn/chromatism/triad.png)

---

### Generate an array of tetrad colours
```javascript
var newColour = chromatism.tetrad( value ).cmyk;
```

![Tetrad](https://toi.sh/cdn/chromatism/tetrad.png)

---

### Find the mid point between two colours
```javascript
var newColour = chromatism.mid( colourOne, colourTwo ).cssrgb;
```

![Mid](https://toi.sh/cdn/chromatism/mid.png)

---

### Invert a colour
```javascript
var newColour = chromatism.invert( value ).hex;
```

![Invert](https://toi.sh/cdn/chromatism/invert.png)

---

### Invert a grey colour
```javascript
var newColour = chromatism.invertLightness( value ).hsl;
```

![Invert Lightness](https://toi.sh/cdn/chromatism/invertLightness.png)

---

### Blend two colours (Multiply)
```javascript
var newColour = chromatism.multiply( valueOne, valueTwo ).hsv;
```

![Blend](https://toi.sh/cdn/chromatism/blend.png)

---

### Generate an array of adjacent hue-shifted colours (rainbow effect)
```javascript
var newColour = chromatism.adjacent( shift, sections, value ).cmyk;
```

![Rainbow](https://toi.sh/cdn/chromatism/rainbow.png)

Shift should be in degrees. It can be either positive and negative.

---

### Generate an array of the fade between two colours
```javascript
var newColour = chromatism.fade( amount, from, to ).hsl;
```

![Fade](https://toi.sh/cdn/chromatism/fade.png)

---

### Generate a new shade of a colour
```javascript
var newColour = chromatism.shade( shift, value ).csshsl;
```

![Shade](https://toi.sh/cdn/chromatism/shade.png)

Shift should be a number between -100 and 100.

---

### Generate a new saturation of a colour
```javascript
var newColour = chromatism.saturation( shift, value ).hex;
```

![Saturation](https://toi.sh/cdn/chromatism/saturation.png)

Shift should be a number between -100 and 100.

---

### Shift the hue of a colour
```javascript
var newColour = chromatism.hue( shift, value ).hex;
```

![Hue](https://toi.sh/cdn/chromatism/hue.png)

Hue shift is measured in degrees, using the HSL colour model.

---

### Shift the contrast of a colour
```javascript
var newColour = chromatism.contrast( shift, value ).hsl;
```

![Contrast](https://toi.sh/cdn/chromatism/contrast.png)

Contrast shift is supplied in decimal form! You'll normally use a value between 0 and 4.

Imagine increasing (shift > 1) the contrast as making lighter colours lighter, and darker colours darker. Decreasing (shift < 1) the contrast does the opposite.

---

### Greyscale version of the colour
```javascript
var newColour = chromatism.greyscale( value ).cmyk;
```

![Greyscale](https://toi.sh/cdn/chromatism/greyscale.png)

---

### Sepia version of the colour
```javascript
var newColour = chromatism.sepia( value ).hsv;
```

![Sepia](https://toi.sh/cdn/chromatism/sepia.png)

---

### Determine accessible colour for foreground text
```javascript
var newColour = chromatism.contrastRatio( value ).rgb;
```

![Contrast Ratio](https://toi.sh/cdn/chromatism/contrastRatio.png)

Use this function to determine the colour of text needed to create a high contrast. Made according to the [W3C Standard on Web Accessibility](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

---

### Chromatic Adaptation (White point)
```javascript
var newColour = chromatism.adapt( value, illuminant, [source illuminant] ).XYZ;
```

![Illuminant Adaptation](https://toi.sh/cdn/chromatism/adapt.png)

Shifts the Illuminant (white-point) on the supplied colour. Use the ILLUMINANTS constant (shown below) to use a standard white-point. (Most colours in Chromatism are assumed to be illuminated by D65, so you can leave off the `source illuminant` property normally, it defaults to `CIE 2° D65` in XYZ format.)

## Constants:

Chromatism has some useful constants built in, you can access them using the imported chromatism object.

| Reference | Values | Description |
| --------- | ------ | ----------- |
| `chromatism.ILLUMINANTS` | `.A`, `.B`, `.C`, `.D50`, `.D55`, `.D65`, `.D75`, `.E`, `.F2`, `.F7`, `.F11` | Standard CIE illuminants in XYZ format

## Scales + Colour Spaces
| Mode                 | Scale                             | Colour Space |
| -------------------- | --------------------------------- | ------------ |
| `.hex`                | #000000 - #FFFFFF                 | sRGB         |
| `.rgb`                | (r, g, b) 0 - 255                 | sRGB         |
| `.cssrgb`             | (r, g, b) 0 - 255                 | sRGB         |
| `.hsl`                | (h) 0 - 365, (s, l) 0 - 100       | sRGB         |
| `.csshsl`             | (h) 0 - 365, (s, l) 0 - 100       | sRGB         |
| `.hsv`                | (h) 0 - 365, (s, v) 0 - 100       | sRGB         |
| `.cmyk`               | (c, m, y, k) 0 - 1                | CMYK         |
| `.yiq`                | (y, i, q) 0 - 1                   | YUV          |
| `.XYZ`                | (Y) 0 - 100, (X, Z) derived       | XYZ          |
| `.lms`                | (⍴, γ, β) 0 - 1                   | XYZ          |
| `.cielab` (L\*a\*b\*) | (L) 0 - 100, (a, b) -128 - 128 | CIE          |

## Colour Modes:

| Mode                 | Example Syntax                                    |
| -------------------- | ------------------------------------------------- |
| `.hex`                | `"#FFC837"`                                       |
| `.rgb`                | `{ r:255, g: 200, b: 55 }`                        |
| `.cssrgb`             | `"rgb(255,200,55)"`                               |
| `.hsl`                | `{ h: 44, s: 100, l: 61 }`                        |
| `.csshsl`             | `"hsl(44,100,61)"`                                |
| `.hsv`                | `{h: 44, s: 78, v: 100}`                          |
| `.cmyk`               | `{c: 0.5, m: 1, y: 0.2, k: 0.45}`                 |
| `.yiq`                | `{ y: 0.132, i: 0.0222, q: 0.195 }`               |
| `.XYZ`                | `{ X: 41.24, Y: 21.26, Z: 1.93 }`                 |
| `.lms`                | `{ rho: 42.266, gamma: 5.561, beta: 2.135 }`      |
| `.cielab (L\*a\*b\*)` | `{ L: 53.23, a: 80.11, b: 67.22 }`             |

All functions return an object containing all modes of the result. (In getters, so don't worry, Chromatism doesn't calculate *all* the versions of the result when you use a function!)

For example, if you need a string containing the hex code for the colour result, simply use `.hex`:

```javascript
var newColour = chromatism.invert("#5300FF").hex
```
