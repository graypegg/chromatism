var assert = require('assert')
var chroma = require('../src/entry.js')
var round = require('./rounding.js')
var consts = require('./consts.js')

describe('Conversion', function() {
  for (let fromKey in consts.red) {
    if (!consts.red.hasOwnProperty(fromKey)) continue

    for (let toKey in consts.red) {
      if (!consts.red.hasOwnProperty(toKey)) continue

      let accuracy = consts.red[fromKey].accuracy[toKey] || 0

      describe(fromKey.toUpperCase() + ' > ' + toKey.toUpperCase(), function() {
        it(`should return ${ accuracy !== 0 ? 'a value close to' : 'the value' } ${ JSON.stringify(consts.red[toKey].value) }`, function() {
          assert.deepEqual(
            round(chroma.convert(consts.red[fromKey].value)[toKey], accuracy), /* === */ round(consts.red[toKey].value, accuracy)
          )
        })
      })
    }
  }
})

describe('Chaining', function () {
  describe('Single to Single', function () {
    it('should return the same lightness as the colour passed in', function () {
      let colour = { h: 0, s: 0, l: 0 }
      let out = chroma.brightness(10, colour).brightness(-10).colour
      assert.equal(out.l, colour.l)
    })
  })

  describe('Multiple to Single', function () {
    it('should return the same lightness as the colour passed in', function () {
      let colour1 = { h: 90, s: 100, l: 50 }
      let colour2 = { h: 180, s: 100, l: 50 }
      let colour3 = { h: 120, s: 100, l: 97 }
      let out = chroma.fade(10, colour1, colour2).brightness(30).hsl[3]
      assert.equal(Math.round(out.l), Math.round(colour3.l))
    })
  })
})
