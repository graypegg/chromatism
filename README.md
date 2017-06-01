# Chromatism :rainbow:

A simple set of utility functions for colours.

[![NPM](https://nodei.co/npm/chromatism.png?compact=true)](https://nodei.co/npm/chromatism/)

**Awesome resources for colour stuff.**
- [Bruce Lindbloom](http://www.brucelindbloom.com/)
- [Colormine](http://colormine.org/)
- [EasyRGB](http://www.easyrgb.com/en/math.php)

## Table of Contents
- [Chromatism](#chromatism-rainbow)
  * [Table of Contents](#table-of-contents)
  * [Contributing](#contributing)
  * [Installation](#installation)
      - [CommonJS](#commonjs)
      - [Browser without bundling](#browser-without-bundling)
  * [Functions](#functions)
    + [Colour Transformations](#currency_exchange-colour-transformations)
      - [Convert colour types](#convert-colour-types)
      - [Generate a complementary colour](#generate-a-complementary-colour)
      - [Generate an array of triad colours](#generate-an-array-of-triad-colours)
      - [Generate an array of tetrad colours](#generate-an-array-of-tetrad-colours)
      - [Find the mid point between two colours](#find-the-mid-point-between-two-colours)
      - [Invert a colour](#invert-a-colour)
      - [Invert a grey colour](#invert-a-grey-colour)
      - [Blend two colours (Multiply)](#blend-two-colours-multiply)
      - [Generate an array of adjacent hue-shifted colours (rainbow effect)](#generate-an-array-of-adjacent-hue-shifted-colours-rainbow-effect)
      - [Generate an array of the fade between two colours](#generate-an-array-of-the-fade-between-two-colours)
      - [Generate a new shade of a colour](#generate-a-new-shade-of-a-colour)
      - [Generate a new saturation of a colour](#generate-a-new-saturation-of-a-colour)
      - [Change colour's brightness](#change-colours-brightness)
      - [Shift the hue of a colour](#shift-the-hue-of-a-colour)
      - [Shift the contrast of a colour](#shift-the-contrast-of-a-colour)
      - [Greyscale version of the colour](#greyscale-version-of-the-colour)
      - [Sepia version of the colour](#sepia-version-of-the-colour)
      - [Determine accessible colour for foreground text](#determine-accessible-colour-for-foreground-text)
      - [Chromatic Adaptation (White point)](#chromatic-adaptation-white-point)
    + [Colour Metering Functions](#1234-colour-metering-functions)
      - [Colour Difference](#colour-difference)
      - [Colour Temperature](#colour-temperature)
  * [Constants](#constants)
  * [Scales + Colour Spaces](#scales--colour-spaces)
  * [Colour Modes](#colour-modes)

## Contributing
First off, thanks so much for helping out! Colour modes + functions contributing info will be added soon.

*Note:* The type definitions file (/index.d.ts) must be updated as part of your pull request. (If you're not familiar with typescript, I can update it for ya.) It contains definitions for colour modes AND colour functions. (Special thanks to @bdoss on GitHub for adding the inital TS definitions!)

## Installation

```bash
$ npm install --save chromatism
```

#### CommonJS
```javascript
var chromatism = require('chromatism');
```

#### ES Modules
```javascript
import chromatism from 'chromatism';
```

#### Browser without bundling
```html
<script type="text/javascript" src="path-to-files/dist/chromatism.js"></script>
```


## Functions
All functions can take any colour type. **You can even mix colour types** if a function takes more than one. [A list of colour types are available here](#colour-modes). Return values are also not bound by the function. Any functions that return colours, return a colour object, which contains getters for each colour type. If you take the return value of one of these functions and get `returnValue.hex` for example, you will get the hexadecimal equivalent value.

You can also chain these functions. The last parameter will be piped in from the output of the parent function.

:warning: **_Note:_** The following examples return different types of values, (*hex*, *rgb*, *hsl*, etc) but you can use any of the available colour modes as seen in the colour modes table at the [bottom of this README.](#colour-modes)

### :currency_exchange: Colour Transformations
The following functions return a Colour Object, which contains getters to get a return value of any colour mode. See [Colour Mode](#Colour Modes) table for a list of all the available colour modes.

#### Convert colour types
```javascript
var newColour = chromatism.convert( colour ).hex;
```

Value can be any colour in any of the supported colour modes. [(See chart at bottom of README)](#colour-modes) **This is an identity operation**, as it just returns an object containing all of the available colour modes of the result.

All colour modes supported can be converted to any other. This does however mean that some conversions will have intermediate values, which can cause small inconsistencies, especially when changing colour spaces. The path for each conversion is optimised as much as possible to avoid loss of colour information.

---

#### Generate a complementary colour
```javascript
var newColour = chromatism.complementary( colour ).rgb;
```

![Complementary](https://toi.sh/cdn/chromatism/complementary.png)

---

#### Generate an array of triad colours
```javascript
var newColour = chromatism.triad( colour ).hsl;
```

![Triad](https://toi.sh/cdn/chromatism/triad.png)

---

#### Generate an array of tetrad colours
```javascript
var newColour = chromatism.tetrad( colour ).cmyk;
```

![Tetrad](https://toi.sh/cdn/chromatism/tetrad.png)

---

#### Find the mid point between two colours
```javascript
var newColour = chromatism.mid( colourOne, colourTwo ).cssrgb;
```

![Mid](https://toi.sh/cdn/chromatism/mid.png)

---

#### Invert a colour
```javascript
var newColour = chromatism.invert( colour ).hex;
```

![Invert](https://toi.sh/cdn/chromatism/invert.png)

---

#### Invert a grey colour
```javascript
var newColour = chromatism.invertLightness( colour ).hsl;
```

![Invert Lightness](https://toi.sh/cdn/chromatism/invertLightness.png)

---

#### Blend two colours (Multiply)
```javascript
var newColour = chromatism.multiply( colourOne, colourTwo ).hsv;
```

![Blend](https://toi.sh/cdn/chromatism/blend.png)

---

#### Generate an array of adjacent hue-shifted colours (rainbow effect)
```javascript
var newColour = chromatism.adjacent( degrees, sections, colour ).cmyk;
```

![Rainbow](https://toi.sh/cdn/chromatism/rainbow.png)

Shift should be in degrees. It can be either positive and negative.

---

#### Generate an array of the fade between two colours
```javascript
var newColour = chromatism.fade( amount, colourFrom, colourTo ).hsl;
```

![Fade](https://toi.sh/cdn/chromatism/fade.png)

---

#### Generate a new shade of a colour
```javascript
var newColour = chromatism.shade( percent, colour ).csshsl;
```

![Shade](https://toi.sh/cdn/chromatism/shade.png)

Percent should be a number between -100 and 100.

---

#### Generate a new saturation of a colour
```javascript
var newColour = chromatism.saturation( percent, colour ).hex;
```

![Saturation](https://toi.sh/cdn/chromatism/saturation.png)

Percent should be a number between -100 and 100.

---

#### Change colour's brightness
```javascript
var newColour = chromatism.brightness( percent, colour ).hsl;
```

![Brightness](https://toi.sh/cdn/chromatism/brightness.png)

This essentially acts as a sum of [saturation](#generate-a-new-saturation-of-a-colour) and [shade](#generate-a-new-shade-of-a-colour), and thus does not adjust luminosity. Brightness works for 99% of most scenarios though.

Percent should be a number between -100 and 100.

---

#### Shift the hue of a colour
```javascript
var newColour = chromatism.hue( degrees, colour ).hex;
```

![Hue](https://toi.sh/cdn/chromatism/hue.png)

Hue shift is measured in degrees, using the HSL colour model.

---

#### Shift the contrast of a colour
```javascript
var newColour = chromatism.contrast( contrastCoeff, colour ).hsl;
```

![Contrast](https://toi.sh/cdn/chromatism/contrast.png)

Contrast coefficient is supplied in decimal form! You'll normally use a value between 0 and 4.

Imagine increasing the contrast *(shift > 1)* as making lighter colours lighter, and darker colours darker. Decreasing *(shift < 1)* makes all colours more similar.

---

#### Greyscale version of the colour
```javascript
var newColour = chromatism.greyscale( colour ).cmyk;
```

![Greyscale](https://toi.sh/cdn/chromatism/greyscale.png)

---

#### Sepia version of the colour
```javascript
var newColour = chromatism.sepia( colour ).hsv;
```

![Sepia](https://toi.sh/cdn/chromatism/sepia.png)

---

#### Determine accessible colour for foreground text
```javascript
var newColour = chromatism.contrastRatio( colour ).rgb;
```

![Contrast Ratio](https://toi.sh/cdn/chromatism/contrastRatio.png)

Use this function to determine the colour of text needed create a high contrast between text and a solid background of the supplied colour. Made according to the [W3C Standard on Web Accessibility](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

---

#### Chromatic Adaptation (White point)
```javascript
var newColour = chromatism.adapt( colour, illuminantColour, [source illuminant] ).XYZ;
```

![Illuminant Adaptation](https://toi.sh/cdn/chromatism/adapt.png)

Shifts the Illuminant (white-point) on the supplied colour. Supply a value from the [ILLUMINANTS constant](#constants) to use a standard white-point. (Most colours in Chromatism are assumed to be illuminated by D65, so you can leave off the `source illuminant` property normally, it defaults to `CIE 2° D65` in XYZ format.)

---

### :1234: Colour Metering Functions
These functions do not return a colour, but instead return some aspect or measure of the colour(s).

#### Colour Difference
```javascript
var diff = chromatism.difference( colourOne, colourTwo, [luminance weight], [chroma weight] );
```
Returns a measure of how different the two supplied colours are. Luminance and Chroma weight are equal to *l* and *c* in the [CMC l:c](http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html) Delta-E equation. By default they are both set to 1. (Thus testing imperceptibility)

#### Colour Temperature
```javascript
var diff = chromatism.temperature( colour );
```
Returns the [correlated colour temperature](https://en.wikipedia.org/wiki/Color_temperature) of the supplied colour in Kelvin. (A higher number indicates a blue-er colour; a lower number indicates a red-er colour.) This should only be used when working with colours that could actually be emitted by a black-body radiator (think glowing stuff, such as tungsten in incandescent lightbulbs), [as colour temperature is only an approximation of the colour to a narrow strip of the XYZ gamut.](https://en.wikipedia.org/wiki/Color_temperature#/media/File:PlanckianLocus.png) (Note the thin line in the middle of this chart.)

Colour temperature is calculated via [McCamy's CCT fomula. ](ttp://onlinelibrary.wiley.com/doi/10.1002/col.5080170211/abstract;jsessionid=D127570AD1D0FEF9A18424F5C0E987C5.f02t04)(DOI: 10.1002/col.5080170211) **Which may mean that colours temperatures beyond 6500K (CIE Illuminant D65) are not entirely accurate**

## Constants

Chromatism has some useful constants built in, you can access them using the imported chromatism object.

| Reference | Values | Description |
| --------- | ------ | ----------- |
| `chromatism.ILLUMINANTS` | `.A`, `.B`, `.C`, `.D50`, `.D55`, `.D65`, `.D75`, `.E`, `.F2`, `.F7`, `.F11` | Standard CIE illuminants in XYZ format
| `chromatism.TRANSFORMS` | `.BRADFORD`, `.INVERSE_BRADFORD`, `.SRGB_XYZ`, `.INVERSE_SRGB_XYZ` | Transformation matrices

## Scales + Colour Spaces
| Mode                  | Scale                             | Colour Space |
| --------------------- | --------------------------------- | ------------ |
| `.hex`                | #000000 - #FFFFFF                 | sRGB         |
| `.rgb`                | (r, g, b) 0 - 255                 | sRGB         |
| `.cssrgb`             | (r, g, b) 0 - 255                 | sRGB         |
| `.hsl`                | (h) 0 - 365, (s, l) 0 - 100       | sRGB         |
| `.csshsl`             | (h) 0 - 365, (s, l) 0 - 100       | sRGB         |
| `.hsv`                | (h) 0 - 365, (s, v) 0 - 100       | sRGB         |
| `.cmyk`               | (c, m, y, k) 0 - 1                | CMYK         |
| `.yiq`                | (y, i, q) 0 - 1                   | YUV          |
| `.XYZ`                | (Y) 0 - 100, (X, Z) derived       | XYZ          |
| `.xyY`                | (Y) 0 - 100, (x, y) 0 - 1         | XYZ          |
| `.lms`                | (⍴, γ, β) 0 - 1                   | XYZ          |
| `.cielab` (L\*a\*b\*) | (L) 0 - 100, (a, b) -128 - 128    | CIELAB       |
| `.cieluv` (L\*u\*v\*) | (L) 0 - 100, (u, v) -128 - 128    | CIELUV       |
| `.cielch` (L\*C\*h\*) | (L) 0 - 100, (C, h) -128 - 128    | CIELCh       |
| `.hsluv`              | (hu) 0 - 365, (s, l) 0 - 10       | CIELCh       |

## Colour Modes

| Mode                  | Example Syntax                                    |
| --------------------- | ------------------------------------------------- |
| `.hex`                | `"#FFC837"`                                       |
| `.rgb`                | `{ r:255, g: 200, b: 55 }`                        |
| `.cssrgb`             | `"rgb(255,200,55)"`                               |
| `.hsl`                | `{ h: 44, s: 100, l: 61 }`                        |
| `.csshsl`             | `"hsl(44,100,61)"`                                |
| `.hsv`                | `{h: 44, s: 78, v: 100}`                          |
| `.cmyk`               | `{c: 0.5, m: 1, y: 0.2, k: 0.45}`                 |
| `.yiq`                | `{ y: 0.132, i: 0.0222, q: 0.195 }`               |
| `.XYZ`                | `{ X: 41.24, Y: 21.26, Z: 1.93 }`                 |
| `.xyY`                | `{ x: 0.64, y: 0.33, Y: 21.26 }`                  |
| `.lms`                | `{ rho: 42.266, gamma: 5.561, beta: 2.135 }`      |
| `.cielab` (L\*a\*b\*) | `{ L: 53.23, a: 80.11, b: 67.22 }`                |
| `.cieluv` (L\*u\*v\*) | `{ L: 53.23, u: 175.05, v: 37.75 }`               |
| `.cielch` (L\*C\*h\*) | `{ L: 53.23, C: 179.08, h: 12.17 }`               |
| `.hsluv`              | `{ hu: 12.17, s: 99.99, l: 53.23 }`               |

:warning: **A note about CIELUV + CIELCH**: Conversion to CIELUV (and by extension, CIELCH) requires defining the illuminant, which can skew results slightly. By default, Chromatism assumes all colours are illuminated by `CIE D65`, which means that you may get differing chrominance values (±~10) if you are comparing against a CIELUV/CIELCH colour illuminated by anything other than D65.

All functions return an object containing all modes of the result. (In getters, so don't worry, Chromatism doesn't calculate *all* the versions of the result when you use a function!)

For example, if you need a string containing the hex code for the colour result, simply use `.hex`:

```javascript
var newColour = chromatism.invert("#5300FF").hex
```
