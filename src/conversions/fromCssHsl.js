module.exports = {
	hsl: value => {
		const values = value
			.replace(/(hsl\(|\)|%|[\s]*)/g, '')
			.split(",")
			.map(value => parseInt(value, 10))

		return {
			h: values[0],
			s: values[1],
			l: values[2]
		}
	}
}
