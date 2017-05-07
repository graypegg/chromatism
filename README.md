# Chromatism

A simple set of utility functions for colours that works on the server and the fronted.

[![NPM](https://nodei.co/npm/chromatism.png?compact=true)](https://nodei.co/npm/chromatism/)


## Installation

#### Node
```bash
$ npm install --save chromatism
```

```javascript
var chroma = require("chromatism");
```

#### Browser
```bash
$ bower install --save chromatism
```

```html
<script type="text/javascript" src="path-to-files/dist/chromatism.min.js"></script>
```


## Colour Functions

**_Note:_ The following examples return different types of values, (hex, rgb, hsl) but you can use any of the available colour modes as seen in the colour modes table at the bottom of this README.**

### Convert colour types
```javascript
var newColour = chroma.convert( value ).hex;
```

Value can be any colour in any of the supported colour modes. (See chart at bottom of README) This is more of an identity operation, as it just returns an object containing all of the available colour modes of the result.

---

### Generate a complementary colour
```javascript
var newColour = chroma.complementary( value ).rgb;
```

![Complementary](https://toi.sh/cdn/chromatism/complementary.png)

---

### Generate an array of triad colours
```javascript
var newColour = chroma.triad( value ).hsl;
```

![Triad](https://toi.sh/cdn/chromatism/triad.png)

---

### Generate an array of tetrad colours
```javascript
var newColour = chroma.tetrad( value ).cmyk;
```

![Tetrad](https://toi.sh/cdn/chromatism/tetrad.png)

---

### Find the mid point between two colours
```javascript
var newColour = chroma.mid( colourOne, colourTwo ).cssrgb;
```

![Mid](https://toi.sh/cdn/chromatism/mid.png)

---

### Invert a colour
```javascript
var newColour = chroma.invert( value ).hex;
```

![Invert](https://toi.sh/cdn/chromatism/invert.png)

---

### Invert a grey colour
```javascript
var newColour = chroma.invertLightness( value ).hsl;
```

![Invert Lightness](https://toi.sh/cdn/chromatism/invertLightness.png)

---

### Blend two colours (Multiply)
```javascript
var newColour = chroma.multiply( valueOne, valueTwo ).hsv;
```

![Blend](https://toi.sh/cdn/chromatism/blend.png)

---

### Generate an array of adjacent hue-shifted colours (rainbow effect)
```javascript
var newColour = chroma.adjacent( shift, number-of-colours, value ).cmyk;
```

Shift should be in degrees. It can be either positive and negative.

---

### Generate an array of the fade between two colours
```javascript
var newColour = chroma.fade( amount, from, to ).hsl;
```

From and To must be in the same colour mode, as dictated by Mode.

---

### Generate a new shade of a colour
```javascript
var newColour = chroma.shade( shift, value ).csshsl;
```

Shift should be a number between -100 and 100.

![Shade](https://toi.sh/cdn/chromatism/shade.png)

---

### Generate a new saturation of a colour
```javascript
var newColour = chroma.saturation( shift, value ).hex;
```

![Saturation](https://toi.sh/cdn/chromatism/saturation.png)

Shift should be a number between -100 and 100.

---

### Shift the hue of a colour
```javascript
var newColour = chroma.hue( shift, value ).hex;
```

![Hue](https://toi.sh/cdn/chromatism/hue.png)

Hue shift is measured in degrees, using the HSL colour model.

---

### Shift the contrast of a colour
```javascript
var newColour = chroma.contrast( shift, value ).hsl;
```

Contrast shift can be supplied in floating point form! You'll normally use a value between 0 and 4.

---

### Greyscale version of the colour
```javascript
var newColour = chroma.greyscale( value ).cmyk;
```

![Greyscale](https://toi.sh/cdn/chromatism/greyscale.png)

---

### Sepia version of the colour
```javascript
var newColour = chroma.sepia( value ).hsv;
```

![Sepia](https://toi.sh/cdn/chromatism/sepia.png)

---

### Determine accessible colour for foreground text
```javascript
var newColour = chroma.contrastRatio( value ).rgb;
```

![Contrast Ratio](https://toi.sh/cdn/chromatism/contrastRatio.png)

Use this function to determine the colour of text needed to create a high contrast. Made according to the [W3C Standard on Web Accessibility](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

---

### Chromatic Adaptation (White point)
```javascript
var newColour = chroma.adapt( value, illuminant ).XYZ;
```

Shifts the Illuminant (white-point) on the supplied colour. Use the ILLUMINANTS constant (shown below) to use a standard white-point. (Most colours in Chromatism are assumed to be illuminated by D65, to match the sRGB standard, thus if you export in a RGB like colour mode from this function, you're probably going to get the same thing)

## Constants:

Chromatism has some useful constants built in!

| Reference | Values | Description |
| --------- | ------ | ----------- |
| `chroma.ILLUMINANTS` | `.A`, `.B`, `.C`, `.D50`, `.D55`, `.D65`, `.D75`, `.E`, `.F2`, `.F7`, `.F11` | Standard CIE illuminants in XYZ format

## Colour Modes:

| Mode    | Example Syntax                                 |
|---------|------------------------------------------------|
| hex     | `"#FFC837"`                                    |
| rgb     | `{ r:255, g: 200, b: 55 }`                     |
| cssrgb  | `"rgb(255,200,55)"`                            |
| hsl     | `{ h: 44, s: 100, l: 61 }`                     |
| csshsl  | `"hsl(44,100,61)"`                             |
| hsv     | `{h: 44, s: 78, v: 100}`                       |
| cmyk    | `{c: 0.5, m: 1, y: 0.2, k: 0.45}`              |
| yiq     | `{ y: 0.132, i: 0.0222, q: 0.195 }`            |
| XYZ     | `{ X: 41.24, Y: 21.26, Z: 1.93 }`              |
| LMS     | `{ rho: 42.266, gamma: 5.561, beta: 2.135 }`   |

All functions return an object containing all modes of the result. (In getters, so don't worry, Chromatism doesn't calculate *all* the versions of the result when you use a function!)

For example, if you need a string containing the hex code for the colour result, simply use `.hex`:

```javascript
var newColour = chroma.invert("#5300FF").hex
```
