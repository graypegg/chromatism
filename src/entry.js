var dependencies = {
  conversions: require('./conversions'),
  operations: require('./operations'),
  helpers: require('./helpers.js')
}

var api = Object.keys(dependencies.operations).reduce((acc, key) => {
  let operation = dependencies.operations[key];
  acc[key] = (...args) => operation(dependencies, ...args);
  return acc;
}, {});

module.exports = api;
