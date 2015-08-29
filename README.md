# Chromatism
A simple set of utility functions for colours.

## How to use

```javascript
chroma = require("./chromatism.js");
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
var newColour = chroma.tetrad( mode, shift, number-of-colours, value );
```

Shift should be in degrees. It can be either positive and negative.

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

----------------

## Colour Modes:
- hex     ---> "#FFC837"
- rgb     ---> { r:255, g: 200, b: 55 }
- css-rgb ---> "rgb(255,200,55)"
- hsl     ---> { h: 44, s: 100, l: 61 }
- css-hsl ---> "hsl(44,100,61)"