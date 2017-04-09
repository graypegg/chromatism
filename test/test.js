var assert = require('assert')
var chroma = require('../src/entry.js')
var round = require('./rounding.js')
var consts = require('./consts.js')

describe('Conversion', function() {
  for (let fromKey in consts.red) {
    if (!consts.red.hasOwnProperty(fromKey)) continue

    for (let toKey in consts.red) {
      if (!consts.red.hasOwnProperty(toKey)) continue
      if (toKey === fromKey) continue

      describe(fromKey.toUpperCase() + ' > ' + toKey.toUpperCase(), function() {
        it('Return ' + consts.red[toKey] +  ' (pure red)', function() {
          assert.deepEqual(
            round(chroma.convert(consts.red[fromKey])[toKey], 0.05), /* === */ round(consts.red[toKey], 0.05)
          )
        })
      })
    }

  }
})
