var assert = require('assert')
var chroma = require('../src/entry.js')

describe('RGB Conversion', function() {
  describe('RGB > HSL', function() {
    it('Return { h: 0, s: 100, l: 50 } (pure red)', function() {
      assert.deepEqual(
        chroma.convert({ r: 255, g: 0, b: 0 }).hsl, /* === */ { h: 0, s: 100, l: 50 }
      )
    });
  });
  describe('RGB > HSV', function() {
    it('Return { h: 0, s: 100, v: 100 } (pure red)', function() {
      assert.deepEqual(
        chroma.convert({ r: 255, g: 0, b: 0 }).hsv, /* === */ { h: 0, s: 100, v: 100 }
      )
    });
  });
  describe('RGB > HEX', function() {
    it('Return #ff0000 (pure red)', function() {
      assert.equal(
        chroma.convert({ r: 255, g: 0, b: 0 }).hex, /* === */ '#ff0000'
      )
    });
  });
  describe('RGB > CSS-RGB', function() {
    it('Return rgb(255,0,0) (pure red)', function() {
      assert.equal(
        chroma.convert({ r: 255, g: 0, b: 0 }).cssrgb, /* === */ 'rgb(255,0,0)'
      )
    });
  });
  describe('RGB > CSS-HSL', function() {
    it('Return hsl(0,100%,50%) (pure red)', function() {
      assert.equal(
        chroma.convert({ r: 255, g: 0, b: 0 }).csshsl, /* === */ 'hsl(0,100%,50%)'
      )
    });
  });
  describe('RGB > CMYK', function() {
    it('Return { c: 0, m: 1, y: 1, k: 0 } (pure-ish red, within gamut of CMYK)', function() {
      assert.deepEqual(
        chroma.convert({ r: 255, g: 0, b: 0 }).cmyk, /* === */ { c: 0, m: 1, y: 1, k: 0 }
      )
    });
  });
  describe('RGB > YIQ', function() {
    it('Return { y: 0.299, i: 0.5957, q: 0.211 } (pure-ish red, within gamut of YIQ)', function() {
      assert.deepEqual(
        chroma.convert({ r: 255, g: 0, b: 0 }).yiq, /* === */ { y: 0.299, i: 0.5957, q: 0.211 }
      )
    });
  });
});
