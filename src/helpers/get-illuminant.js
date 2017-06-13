const ILLUMINANTS = require('../constants/illuminants.js')

module.exports = function getIlluminant (ref) {
  return ILLUMINANTS[ref]
}
