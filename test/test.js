import assert from 'assert'
import chroma from '../src/entry'
import round from './rounding'
import consts from './consts'

describe('Conversion', function () {
  for (let fromKey in consts.red) {
    if (!consts.red.hasOwnProperty(fromKey)) {
      continue
    }

    for (let toKey in consts.red) {
      if (!consts.red.hasOwnProperty(toKey)) {
        continue
      }

      let accuracy = consts.red[fromKey].accuracy[toKey] || 0

      describe(fromKey.toUpperCase() + ' > ' + toKey.toUpperCase(), function () {
        it(`should return ${accuracy !== 0 ? 'a value close to' : 'the value'} ${JSON.stringify(consts.red[toKey].value)}`, function () {
          assert.deepEqual(
            round(chroma.convert(consts.red[fromKey].value)[toKey], accuracy), /* === */ round(consts.red[toKey].value, accuracy)
          )
        })
      })
    }
  }
})
