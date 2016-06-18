#Chromatism

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

### Generate a complementary colour
```javascript
var newColour = chroma.complementary( value ).rgb;
```

### Generate an array of triad colours
```javascript
var newColour = chroma.triad( value ).hsl;
```

### Generate an array of tetrad colours
```javascript
var newColour = chroma.tetrad( value ).cmyk;
```

### Find the mid point between two colours
```javascript
var newColour = chroma.mid( colourOne, colourTwo ).cssrgb;
```

### Invert a colour
```javascript
var newColour = chroma.invert( value ).hex;
```

### Invert a grey colour
```javascript
var newColour = chroma.invertLightness( value ).hsl;
```

### Generate an array of adjacent hue-shifted colours (rainbow effect)
```javascript
var newColour = chroma.adjacent( shift, number-of-colours, value ).cmyk;
```

Shift should be in degrees. It can be either positive and negative.

### Generate an array of the fade between two colours
```javascript
var newColour = chroma.fade( amount, from, to ).hsl;
```

From and To must be in the same colour mode, as dictated by Mode.

### Generate a new shade of a colour
```javascript
var newColour = chroma.shade( shift, value ).csshsl;
```

Shift should be a number between -100 and 100.

### Generate a new saturaton of a colour
```javascript
var newColour = chroma.saturation( shift, value ).hex;
```

Shift should be a number between -100 and 100.

### Shift the hue of a colour
```javascript
var newColour = chroma.hue( shift, value ).hex;
```

Hue shift is measured in degrees, using the HSL colour model.

### Shift the contrast of a colour
```javascript
var newColour = chroma.contrast( shift, value ).hsl;
```

Contrast shift can be supplied in floating point form! You'll normally use a value between 0 and 4.

### Greyscale version of the colour
```javascript
var newColour = chroma.greyscale( value ).cmyk;
```

### Sepia version of the colour
```javascript
var newColour = chroma.sepia( value ).hsv;
```

### Determine accessible colour for foreground text.
```javascript
var newColour = chroma.contrastRatio( value ).rgb;
```

Use this function to determine the colour of text needed to create a high contrast. Made according to the [W3C Standard on Web Accessibility](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

---

## Colour Modes:

| Mode    | Example Syntax                    |
|---------|-----------------------------------|
| hex     | `"#FFC837"`                       |
| rgb     | `{ r:255, g: 200, b: 55 }`        |
| cssrgb  | `"rgb(255,200,55)"`               |
| hsl     | `{ h: 44, s: 100, l: 61 }`        |
| csshsl  | `"hsl(44,100,61)"`                |
| hsv     | `{h: 44, s: 78, v: 100}`          |
| cmyk    | `{c: 0.5, m: 1, y: 0.2, k: 0.45}` |

All functions return an object containing all modes of the result. (In getters, so don't worry, Chromatism doesn't calculate *all* the versions of the result when you use a function!)

For example, if you need a string containing the hex code for the colour result, simply use `.hex`:

```javascript
var newColour = chroma.invert("#5300FF").hex
```
