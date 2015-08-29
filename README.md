#Chromatism
A simple set of utility functions for colours.

##How to use

```javascript
chroma = require("./chromatism.js");
```

###Convert colour types
```javascript
var newColour = chroma.convert( from, to, value );
```

Insert a colour mode in the from and two properties, and put your colour to convert as a string or object in value.

####Colour Modes:
- hex
- rgb
- css-rgb
- hsl
- css-hsl