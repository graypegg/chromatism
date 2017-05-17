var api = (function (dependencies, constants, chain) {
  // Apply colour functions to API object
  let out = Object.keys(dependencies.operations).reduce((acc, key) => {
    let operation = dependencies.operations[key];
    acc[key] = (...args) => {
      let clone = args.slice(0).map(v => {
        if (typeof v === 'object') return Object.assign({}, v);
        return v;
      });

      if (chain && chain.colours) {
        // Process a list of colours
        return dependencies.helpers.ready(dependencies, chain.colours.map((colour) => {
          let colourObj = operation(dependencies, ...clone, colour);
          return (colourObj.colour || colourObj.colours);
        }));

      } else {
        // Process a single colour
        return operation(dependencies, ...clone, (chain ? chain.colour : undefined));
      }
    }
    return acc;
  }, {});

  // Apply constants to API object if not chained
  if (!chain) out = Object.assign(out, constants)

  return out;
});

module.exports = api;
