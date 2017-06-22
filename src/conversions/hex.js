export default {
  rgb: value => {
    const values = value
      .replace('#', '')
      .match(/.{2}/g)
      .map(value => parseInt(value, 16))

    return {
      r: values[0],
      g: values[1],
      b: values[2]
    }
  }
}
