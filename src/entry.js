var dependencies = {
  conversions: require('./conversions'),
  operations: require('./operations'),
  helpers: require('./helpers.js')
}

var apiFactory = require('./api.js');
module.exports = apiFactory(dependencies);
