# Chromatism
A simple set of utility functions for colours.

## How to use

```javascript
chroma = require("chromatism");
```

### Convert colour types
```javascript
var newColour = chroma.convert( from, to, value );
```

Insert a colour mode in the from and two properties, and put your colour to convert as a string or object in value.

### Generate a complementary colour
```javascript
var newColour = chroma.complementary( mode, value );
```

### Generate an array of triad colours
```javascript
var newColour = chroma.triad( mode, value );
```

### Generate an array of tetrad colours
```javascript
var newColour = chroma.tetrad( mode, value );
```

### Invert a colour
```javascript
var newColour = chroma.invert( mode, value );
```

### Generate an array of adjacent hue-shifted colours (rainbow effect)
```javascript
var newColour = chroma.adjacent( mode, shift, number-of-colours, value );
```

Shift should be in degrees. It can be either positive and negative.

### Generate an array of the fade between two colours
```javascript
var newColour = chroma.fade( mode, amount, from, to );
```

From and To must be in the same colour mode, as dictated by Mode.

### Generate a new shade of a colour
```javascript
var newColour = chroma.shade( mode, shift, value );
```

Shift should be a number between -100 and 100.

### Generate a new saturaton of a colour
```javascript
var newColour = chroma.saturation( mode, shift, value );
```

Shift should be a number between -100 and 100.

### Shift the hue of a colour
```javascript
var newColour = chroma.hue( mode, shift, value );
```

### Greyscale version of the colour
```javascript
var newColour = chroma.greyscale( mode, value );
```

### Determine accessible colour for foreground text.
```javascript
var newColour = chroma.contrastRatio( mode, value );
```

Use this function to determine the colour of text needed to create a high contrast. Made according to the [W3C Standard on Web Accessibility](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

----------------

## Colour Modes:
- hex     ---> "#FFC837"
- rgb     ---> { r:255, g: 200, b: 55 }
- css-rgb ---> "rgb(255,200,55)"
- hsl     ---> { h: 44, s: 100, l: 61 }
- css-hsl ---> "hsl(44,100,61)"
- cmyk    ---> {c: 0.5, m: 1, y: 0.2, k: 0.45}
