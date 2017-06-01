function fromCieLch( { conversions, operations, helpers }, to, value ) {
  switch (to) {

    case "cielch":
      if (value.L > 99.9999999) {
          return { L: 100, C: 0, h: value.hu }
      }
      if (value.L < 0.00000001) {
          return { L: 0, C: 0, h: value.hu }
      }

      const epsilon = 0.008856
      const kappa = 903.3

      const s1 = (value.l + 16) / 1560896
      const s2 = s1 > epsilon ? s1 : value.l / kappa

      const m = helpers.getTransform('INVERSE_SRGB_XYZ')
      let rays = []

      for (let c = 0; c < 3; c++) {
        let m1 = m[c][0];
        let m2 = m[c][1];
        let m3 = m[c][2];

        for (let t = 0; t < 2; t++) {
          let top1 = (284517 * m1 - 94839 * m3) * s2
          let top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * value.l * s2 - 769860 * t * value.l
          let bottom = (632260 * m3 - 126452 * m2) * s2 + 126452 * t

          rays.push({
            m: top1 / bottom,
            b: top2 / bottom
          });
        }
      }

      var min = Number.MAX_VALUE
      let hrad = helpers.toRad(value.hu)

      rays.forEach((ray) => {
        let length = ray.b / (Math.sin(hrad) - ray.m * Math.cos(hrad));
        if (length >= 0) min = Math.min(min, length)
      })

      let max = min

      return {
        L: value.l,
        C: max / 100 * value.s,
        h: value.hu
      };

    default:
      var CieLCh = operations.convert({ conversions, operations, helpers }, "cielch", value);
      return operations.convert({ conversions, operations, helpers }, to, CieLCh);

  }
}

module.exports = fromCieLch;
