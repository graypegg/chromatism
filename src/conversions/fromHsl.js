function fromHsl( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "rgb":
      if (value.s == 0) {
        var grey = (value.l / 100) * 255;
        return {
          r: grey,
          g: grey,
          b: grey
        }
      } else {
        var tempOne, tempTwo, tempHue;
        if (value.l >= 50) {
          tempOne = ((value.l/100) + (value.s/100)) - ((value.l/100) * (value.s/100));
        } else {
          tempOne = (value.l/100) * (1 + (value.s/100));
        }
        tempTwo = (2 * (value.l/100)) - tempOne;
        tempHue = value.h / 360;
        var tempR = (tempHue + 0.333) % 1;
        var tempG = tempHue;
        var tempB = helpers.negMod((tempHue - 0.333), 1);
        var r,g,b;
        if ((6 * tempR) < 1) {
          r = tempTwo + ((tempOne - tempTwo) * 6 * tempR);
        } else if ((2 * tempR) < 1) {
          r = tempOne;
        } else if ((3 * tempR) < 2) {
          r = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempR) * 6));
        } else {
          r = tempTwo;
        }
        if ((6 * tempG) < 1) {
          g = tempTwo + ((tempOne - tempTwo) * 6 * tempG);
        } else if ((2 * tempG) < 1) {
          g = tempOne;
        } else if ((3 * tempG) < 2) {
          g = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempG) * 6));
        } else {
          g = tempTwo;
        }
        if ((6 * tempB) < 1) {
          b = tempTwo + ((tempOne - tempTwo) * 6 * tempB);
        } else if ((2 * tempB) < 1) {
          b = tempOne;
        } else if ((3 * tempB) < 2) {
          b = tempTwo + ((tempOne - tempTwo) * ((0.666 - tempB) * 6));
        } else {
          b = tempTwo;
        }
        if (r < 0) r = 0;
        if (g < 0) g = 0;
        if (b < 0) b = 0;
        return {
          r: r * 255,
          g: g * 255,
          b: b * 255
        }
      }

    case "csshsl":
      return "hsl(" + Math.round(value.h) + "," + Math.round(value.s) + "%," + Math.round(value.l) + "%)";

    case "hsv":
      value.s = value.s / 100;
      value.l = value.l / 100;
      var i = value.s * (value.l < .5 ? value.l : 1 - value.l);

      var h = value.h;
      var s = 2 * i / (value.l + i);
      var v = value.l + i;

      return {h: h, s: s*100, v: v*100};

    default:
      var rgb = operations.convert({ conversions, operations, helpers }, "rgb", value);
      return operations.convert({ conversions, operations, helpers }, to, rgb);

  }
}

module.exports = fromHsl;
