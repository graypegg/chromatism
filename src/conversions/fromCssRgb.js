module.exports = {
	rgb: value => {
		const values = value
			.replace(/((rgb\(|\))|[\s]*)/g, '')
			.split(",")
			.map(value => parseInt(value, 10))

		return {
			r: values[0],
			g: values[1],
			b: values[2]
		}
	}
}
