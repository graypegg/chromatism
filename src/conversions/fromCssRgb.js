function fromCssRgb( { conversions, operations, helpers }, to, value ) {
  value = value.replace(/((rgb\(|\))|[\s]*)/g,'').split(",");
  for (var i=0;i<value.length;i++){
    value[i] = parseInt(value[i]);
  }
  switch (to) {

    case "rgb":
      return {
        r: value[0],
        g: value[1],
        b: value[2]
      };

    /* This colour mode is just an expression of RGB */
    default:
      return operations.convert({ conversions, operations, helpers }, to, {
        r: value[0],
        g: value[1],
        b: value[2]
      });

  }
}

module.exports = fromCssRgb;
