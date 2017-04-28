function makeApi (dependencies) {
  return Object.keys(dependencies.operations).reduce((acc, key) => {
    let operation = dependencies.operations[key];
    acc[key] = (...args) => {
      let clone = args.slice(0).map(v => {
        if (typeof v === 'object') return Object.assign({}, v);
        return v;
      });
      return operation(dependencies, ...clone);
    }
    return acc;
  }, {});
}

module.exports = makeApi;
