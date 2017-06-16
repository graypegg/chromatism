const TRANSFORMS = require('../constants/transforms.js')

module.exports = function getTransform (ref) {
  return TRANSFORMS[ref]
}
