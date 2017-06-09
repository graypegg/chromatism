const conversions = require('../conversions')

module.exports = function determineMode(colour) {
	for (let model in conversions) {
		if (!conversions.hasOwnProperty(model)) {
			continue
		}
		if (conversions[model].test(colour)) {
			return model
		}
	}
	return null
}
