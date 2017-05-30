// Require dependencies
const dependencies = {
  conversions: require('./conversions'),
  operations: require('./operations'),
  helpers: require('./helpers.js') };
const constants = require('./constants.js');
const api = require('./api.js');

// Export the api object with inject dependencies
module.exports = api(dependencies, constants);
