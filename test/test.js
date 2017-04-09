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
        it('Return ' + consts.red[toKey].value +  ' (pure red)', function() {
          //console.log('\n', fromKey, consts.red[fromKey], '\n---\n', consts.red, '\n---')
          let accuracy = (consts.red[fromKey].accuracy ? consts.red[fromKey].accuracy[toKey] : 0)
          assert.deepEqual(
            round(chroma.convert(consts.red[fromKey].value)[toKey], accuracy), /* === */ round(consts.red[toKey].value, accuracy)
          )
        })
      })
    }

  }
})
