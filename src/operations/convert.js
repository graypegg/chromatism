const determineMode = require('../helpers/determine-mode.js')
const conversions = require('../conversions')
const ready = require('../helpers/ready.js')

function convert(to, value) {
	if (value === undefined) {
		value = to
		to = undefined
	}
	console.log('converting', value, 'to', to)

	if (to && conversions[to]) {
		if (value.colour) {
			value = value.colour
		} else if (value.colours) {
			value = value.colours
		}
		const from = determineMode(value)
		if (from != to) {
			return conversions[from].convert(to, value)
		} else {
			return value
		}
	} else {
		console.log('returning', ready(value).hex)
		return ready(value)
	}
}

module.exports = convert
