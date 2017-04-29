// Require dependencies
const dependencies = {
  conversions: require('./conversions'),
  operations: require('./operations'),
  helpers: require('./helpers.js') }
const constants = require('./constants.js')

// Apply transforms to API object
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

// Apply constants to API object
api = Object.assign(api, constants)

module.exports = api;
