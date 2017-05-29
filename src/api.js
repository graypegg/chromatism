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
        let deepMap = (function (colours) {
          let out = colours.map((colour) => {

            // If array, recurse...
            if (Array.isArray(colour)) {
              let branch = deepMap(colour);
              return branch.colours || branch.colour;
            }

            // Else run function on colour
            let colourObj = operation(dependencies, ...clone, colour);
            if (typeof colourObj === 'object') return colourObj.colours || colourObj.colour;
            return colourObj;
          });

          // Test first colour, if it is a number, don't try to make it a colour
          if (typeof out[0] !== 'number') return dependencies.helpers.ready(dependencies, out);
          return out;
        });
        return deepMap(chain.colours);

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
