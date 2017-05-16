function fromHex( { conversions, operations, helpers }, to, value ) {
  value = value.replace('#','').match(/.{2}/g);
  for (var i=0;i<value.length;i++){
    value[i] = parseInt(value[i], 16);
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

module.exports = fromHex;
