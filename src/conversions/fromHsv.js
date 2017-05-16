function fromHsv( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "rgb":
      var r, g, b;
      value.h = value.h/360;
      value.s = value.s/100;
      value.v = value.v/100;

      var hsix = value.h * 6
      if ( hsix == 6 ) hsix = 0
      var i = Math.round( hsix );
      var var_1 = value.v * ( 1 - value.s )
      var var_2 = value.v * ( 1 - value.s * ( hsix - i ) )
      var var_3 = value.v * ( 1 - value.s * ( 1 - ( hsix - i ) ) )

      var r2, g2, b2;

      if ( i == 0 ) {
        r2 = value.v;
        g2 = var_3;
        b2 = var_1
      }
      else if ( i == 1 ) {
        r2 = var_2;
        g2 = value.v;
        b2 = var_1
      }
      else if ( i == 2 ) {
        r2 = var_1;
        g2 = value.v;
        b2 = var_3;
      }
      else if ( i == 3 ) {
        r2 = var_1;
        g2 = var_2;
        b2 = value.v;
      }
      else if ( i == 4 ) {
        r2 = var_3;
        g2 = var_1;
        b2 = value.v;
      }
      else {
        r2 = value.v;
        g2 = var_1;
        b2 = var_2;
      }

      r = r2 * 255
      g = g2 * 255
      b = b2 * 255

      return {r: r, g: g, b: b};

    case "hsl":
      value.h = value.h/360;
      value.s = value.s/100;
      value.v = value.v/100;
      var h = value.h;
      var s;
      if ((2 - value.s) * value.v < 1) {
        s = value.s * value.v / ((2 - value.s) * value.v);
      } else {
        s = value.s * value.v / (2 - (2 - value.s) * value.v);
      }
      var l = ((2 - value.s) * value.v) / 2;
      return {h: h*360, s: s*100, l: l*100};

    default:
      var rgb = operations.convert({ conversions, operations, helpers }, "rgb", value);
      return operations.convert({ conversions, operations, helpers }, to, rgb);

  }
}

module.exports = fromHsv;
