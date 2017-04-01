var assert = require('assert')
var chroma = require('../src/entry.js')
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
            chroma.convert(consts.red[fromKey])[toKey], /* === */ consts.red[toKey]
          )
        })
      })
    }

  }
})
