function fromRgb( { conversions, operations, helpers }, to, value ) {
  switch (to){

    case "hex":
      var r = Math.round(value['r']).toString(16);
      if (r.length == 1) r = "0"+r;
      var g = Math.round(value['g']).toString(16);
      if (g.length == 1) g = "0"+g;
      var b = Math.round(value['b']).toString(16);
      if (b.length == 1) b = "0"+b;
      return "#"+r+g+b;
      break;

    case "cssrgb":
      return "rgb(" + Math.round(value['r']) + "," + Math.round(value['g']) + "," + Math.round(value['b']) + ")";
      break;

    case "hsl":
      var r = value['r'] / 255;
      var g = value['g'] / 255;
      var b = value['b'] / 255;
      var rgbOrdered = [r,g,b].sort();
      var l = ((rgbOrdered[0] + rgbOrdered[2]) / 2) * 100;
      var s, h;
      if (rgbOrdered[0] == rgbOrdered[2]) {
        s = 0;
        h = 0;
      } else {
        if (l >= 50) {
          s = ((rgbOrdered[2] - rgbOrdered[0])/((2.0 - rgbOrdered[2]) - rgbOrdered[0])) * 100;
        } else {
          s = ((rgbOrdered[2] - rgbOrdered[0])/(rgbOrdered[2] + rgbOrdered[0])) * 100;
        }
        if (rgbOrdered[2] == r) {
          h = ((g-b)/(rgbOrdered[2] - rgbOrdered[0])) * 60;
        } else if (rgbOrdered[2] == g) {
          h = (2+((b-r)/(rgbOrdered[2] - rgbOrdered[0]))) * 60;
        } else {
          h = (4+((r-g)/(rgbOrdered[2] - rgbOrdered[0]))) * 60;
        }
        if (h < 0) {
          h += 360;
        } else if (h > 360) {
          h = h % 360;
        }
      };
      return {
        h: h,
        s: s,
        l: l
      };
      break;

    case "csshsl":
      var hsl = operations.convert({ conversions, helpers }, "hsl", value);
      return "hsl(" + Math.round(hsl.h) + "," + Math.round(hsl.s) + "%," + Math.round(hsl.l) + "%)";
      break;

    case "cmyk":
      var tempR = value['r']/255;
      var tempG = value['g']/255;
      var tempB = value['b']/255;
      var k = 1 - (Math.max(tempR, tempG, tempB));
      if (k != 1) {
        var c = ((1 - tempR) - k) / (1 - k);
        var m = ((1 - tempG) - k) / (1 - k);
        var y = ((1 - tempB) - k) / (1 - k);
      } else {
        var c = 0;
        var m = 0;
        var y = 0;
      }
      return {c: c, m: m, y: y, k: k};
      break;

    case "hsv":
      var r = ( value.r / 255 );
      var g = ( value.g / 255 );
      var b = ( value.b / 255 );

      var min = Math.min( r, g, b );
      var max = Math.max( r, g, b );
      var maxDelta = max - min;

      var v = max
      var h, s;

      if ( maxDelta == 0 ) {
        h = 0
        s = 0
      } else {
        s = maxDelta / max;

        var rDelta = ( ( ( max - r ) / 6 ) + ( maxDelta / 2 ) ) / maxDelta;
        var gDelta = ( ( ( max - g ) / 6 ) + ( maxDelta / 2 ) ) / maxDelta;
        var bDelta = ( ( ( max - b ) / 6 ) + ( maxDelta / 2 ) ) / maxDelta;

        if      ( r == max ) h = bDelta - gDelta;
        else if ( g == max ) h = ( 1 / 3 ) + rDelta - bDelta;
        else if ( b == max ) h = ( 2 / 3 ) + gDelta - rDelta;

        if ( h < 0 ) h += 1;
        if ( h > 1 ) h -= 1;
      }
      return {h: h*360, s: s*100, v: v*100};
      break;

    case "yiq":
      var y = (0.299 * (value.r / 255)) + (0.587 * (value.g / 255)) + (0.114 * (value.b / 255));
      var i = (0.596 * (value.r / 255)) + (-0.274 * (value.g / 255)) + (-0.322 * (value.b / 255));
      var q = (0.211 * (value.r / 255)) + (-0.523 * (value.g / 255)) + (0.312 * (value.b / 255));
      /* YIQ is not a transformation of RGB, so it's pretty lossy */
      i = helpers.bounded(i, [-0.5957, 0.5957]);
      q = helpers.bounded(q, [-0.5226, 0.5226]);
      return {y:y, i:i, q:q};
      break;

    /**
     * XYZ, used for XYZ dependants below as well
     */
    case "XYZ":
      let normalized = [value.r, value.g, value.b].map((v) => v / 255);

      let linear = normalized.map((V) => {
        if (V <= 0.04045) return V / 12.92
        return Math.pow(((V + 0.055) / 1.055), 2.4)
      })

      // Observer is 2°
      // Whitepoint is D65
      // sRGB standard stuff eh!
      // [ Shamelessly stolen off Wikipedia ]
      let M = helpers.getTransform('SRGB_XYZ')

      let [ X, Y, Z ] = M.map((m) => {
        return linear.reduce((acc, v, key) => {
          return (m[key] * v) + acc
        }, 0)
      }).map((o) => o * 100)

      return { X, Y, Z }
      break;

    /**
     * XYZ dependants
     */
    case "lms":
    case "cielab":
    case "cieluv":
    case "xyY":
      var XYZ = operations.convert({ conversions, operations, helpers }, "XYZ", value);
      return operations.convert({ conversions, operations, helpers }, to, XYZ);
      break;

    /**
     * CIELUV dependants
     */
    case "cielch":
      var CieLuv = operations.convert({ conversions, operations, helpers }, "cieluv", value);
      return operations.convert({ conversions, operations, helpers }, to, CieLuv);
      break;

    /**
     * CIELCh dependants
     */
    case "hsluv":
      var CieLCh = operations.convert({ conversions, operations, helpers }, "cielch", value);
      return operations.convert({ conversions, operations, helpers }, to, CieLCh);
      break;
  }
}

module.exports = fromRgb;
