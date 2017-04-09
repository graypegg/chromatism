var dependencies = {
  conversions: require('./conversions'),
  operations: require('./operations'),
  helpers: require('./helpers.js')
}

var api = Object.keys(dependencies.operations).reduce((acc, key) => {
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

module.exports = api;
