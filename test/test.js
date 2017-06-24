/* global describe, it */

import assert from 'assert'
import round from './rounding'
import consts from './consts'
import * as chroma from '../src/operations'

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

function close (numberA, numberB) {
  const difference = Math.abs(numberA - numberB)
  return difference < 0.0001
}

function closeXYZ (actual, expected) {
  return close(actual.X, expected.X) && close(actual.Y, expected.Y) && close(actual.Z, expected.Z)
}

function allAreCloseXYZ (arrayActual, arrayExpected) {
  return arrayExpected.every((expectedXYZ, i) => {
    const actualXYZ = arrayActual[i]
    return closeXYZ(actualXYZ, expectedXYZ)
  })
}

describe('Operations', function () {
  it('should match expected value for complementary', () => {
    assert(closeXYZ(chroma.complementary('#4fc7ff').XYZ,
      { X: 51.31525590295186,
        Y: 39.152459064169946,
        Z: 12.24970542237237 }
    ))
  })

  it('should match expected value for uniformComplementary', () => {
    assert(closeXYZ(chroma.uniformComplementary('#4fc7ff').XYZ,
      { X: 52.112337192985905,
        Y: 49.72911239090597,
        Z: 12.489177408160534 }
    ))
  })

  it('should match expected value for triad', () => {
    assert(allAreCloseXYZ(chroma.triad('#4fc7ff').XYZ,
      [ { X: 41.53626010469932,
        Y: 49.405886246485146,
        Z: 101.95483866723517 },
      { X: 54.22256483378904,
        Y: 30.926597459521155,
        Z: 56.503804537994384 },
      { X: 60.631173321886735,
        Y: 84.17853037790493,
        Z: 20.44961910775087 } ]
    ))
  })

  it('should match expected value for uniformTriad', () => {
    assert(allAreCloseXYZ(chroma.uniformTriad('#4fc7ff').XYZ,
      [ { X: 41.69787317690973,
        Y: 49.72911239090597,
        Z: 102.00870969130524 },
      { X: 53.4225834547738,
        Y: 40.913416822510236,
        Z: 35.27663235082702 },
      { X: 51.14408373744017,
        Y: 74.9924244853323,
        Z: 36.79881316661437 } ]
    ))
  })

  it('should match expected value for tetrad', () => {
    assert(allAreCloseXYZ(chroma.tetrad('#4fc7ff').XYZ,
      [ { X: 41.53626010469932,
        Y: 49.405886246485146,
        Z: 101.95483866723517 },
      { X: 51.16905708482478,
        Y: 28.4440830295141,
        Z: 97.40109044329289 },
      { X: 51.31525590295186,
        Y: 39.152459064169946,
        Z: 12.24970542237237 },
      { X: 43.682618932785076,
        Y: 75.44123003085592,
        Z: 19.65643991349854 } ]
    ))
  })

  it('should match expected value for uniformTetrad', () => {
    assert(allAreCloseXYZ(chroma.uniformTetrad('#4fc7ff').XYZ,
      [ { X: 41.69787317690973,
        Y: 49.72911239090597,
        Z: 102.00870969130524 },
      { X: 58.82032091119712,
        Y: 43.07251180507956,
        Z: 63.70072903963791 },
      { X: 72.21153579379627,
        Y: 80.07129763623777,
        Z: 36.668752823012454 },
      { X: 52.326683318488,
        Y: 75.19555888183191,
        Z: 55.22058814500378 } ]
    ))
  })

  it('should match expected value for mid', () => {
    assert(closeXYZ(chroma.mid('#4fc7ff', '#75c2e6').XYZ,
      { X: 40.799216394001505,
        Y: 48.39740922533037,
        Z: 91.19689637619237 }
    ))
  })

  it('should match expected value for invert', () => {
    assert(closeXYZ(chroma.invert('#4fc7ff').XYZ,
      { X: 19.318669329342615,
        Y: 12.058453052067094,
        Z: 1.3093076423159207 }
    ))
  })

  it('should match expected value for invertLightness', () => {
    assert(closeXYZ(chroma.invertLightness('#4fc7ff').XYZ,
      { X: 14.468583181643496,
        Y: 16.398809350560242,
        Z: 43.47700646797299 }
    ))
  })

  it('should match expected value for multiply', () => {
    assert(closeXYZ(chroma.multiply('#4fc7ff', '#75c2e6').XYZ,
      { X: 25.461157806545266,
        Y: 28.682628838331315,
        Z: 77.04915252759945 }
    ))
  })

  it('should match expected value for adjacent', () => {
    assert(allAreCloseXYZ(chroma.adjacent(60, 2, '#4fc7ff').XYZ,
      [ { X: 41.53626010469932,
        Y: 49.405886246485146,
        Z: 101.95483866723517 },
      { X: 30.781108042819238,
        Y: 17.933709687296894,
        Z: 96.44695024806809 } ]
    ))
  })

  it('should match expected value for fade', () => {
    assert(allAreCloseXYZ(chroma.fade(2, '#4fc7ff', '#75c2e6').XYZ,
      [ { X: 41.69787317690974,
        Y: 49.729112390905975,
        Z: 102.00870969130528 },
      { X: 40.91083262524179,
        Y: 48.07865190715945,
        Z: 81.98678938048923 } ]
    ))
  })

  it('should match expected value for shade', () => {
    assert(closeXYZ(chroma.shade(20, '#4fc7ff').XYZ,
      { X: 41.69787317690973,
        Y: 49.72911239090596,
        Z: 102.00870969130528 }
    ))
  })

  it('should match expected value for saturation', () => {
    assert(closeXYZ(chroma.saturation(20, '#4fc7ff').XYZ,
      { X: 41.53626010469932,
        Y: 49.405886246485146,
        Z: 101.95483866723517 }
    ))
  })

  it('should match expected value for brightness', () => {
    assert(closeXYZ(chroma.brightness(20, '#4fc7ff').XYZ,
      { X: 65.72636615483249,
        Y: 74.2843783908222,
        Z: 105.48191217236125 }
    ))
  })

  it('should match expected value for hue', () => {
    assert(closeXYZ(chroma.hue(60, '#4fc7ff').XYZ,
      { X: 30.781108042819238,
        Y: 17.933709687296894,
        Z: 96.44695024806809 }
    ))
  })

  it('should match expected value for contrast', () => {
    assert(closeXYZ(chroma.contrast(2, '#4fc7ff').XYZ,
      { X: 54.36013053099219,
        Y: 79.02360269371712,
        Z: 106.99574568197903 }
    ))
  })

  it('should match expected value for greyscale', () => {
    assert(closeXYZ(chroma.greyscale('#4fc7ff').XYZ,
      { X: 42.14029244103617,
        Y: 44.33486842823374,
        Z: 48.280671718346554 }
    ))
  })

  it('should match expected value for sepia', () => {
    assert(closeXYZ(chroma.sepia('#4fc7ff').XYZ,
      { X: 62.109119777183,
        Y: 64.36966501897096,
        Z: 42.94285971766853 }
    ))
  })

  it('should match expected value for contrastRatio', () => {
    assert(closeXYZ(chroma.contrastRatio('#4fc7ff').XYZ,
      { X: 0, Y: 0, Z: 0 }
    ))
  })

  it('should match expected value for adapt when using default D65 source illuminant', () => {
    assert(closeXYZ(chroma.adapt('#4fc7ff', 'D50').XYZ,
    { X: 39.71624372658961,
      Y: 48.74860966760767,
      Z: 77.08702260499929 }
    ))
  })

  it('should match expected value for adapt when using defined F2 source illuminant', () => {
    assert(closeXYZ(chroma.adapt('#4fc7ff', 'D50', 'F2').XYZ,
    { X: 43.73825385154716,
      Y: 51.0118924505256,
      Z: 125.37810305190011 }
    ))
  })

  it('should match expected value for difference', () => {
    assert(close(chroma.difference('#4fc7ff', '#75c2e6'), 202.64118553936103))
  })

  it('should be close to 6500K when temperature is passed the D65 illuminant', () => {
    assert(close(chroma.temperature({ X: 95.047, Y: 100, Z: 108.883 }), 6503.4619534794965))
  })
})
