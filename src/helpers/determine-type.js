const colorTypeTests = require('./test-color-type.js')

const types = Object.keys(colorTypeTests)

module.exports = function determineType(colour) {
	const type = types.find(type => colorTypeTests[type](colour))

	if (!type) {
		throw new Error('No type found for color ' + colour)
	}

	return type
}
