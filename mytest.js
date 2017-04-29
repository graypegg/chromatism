var chroma = require('./src/entry.js')

//console.log(chroma.convert("#ff0000").LMS)
console.log(chroma.adapt("#ff0000", chroma.ILLUMINANTS.A).hex)
