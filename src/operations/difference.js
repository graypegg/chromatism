function difference( _dep, colourRefOne, colourRefTwo, l, c ) {
  l = l || 1;
  c = c || 1;

  const Lab1 = _dep.operations.convert( _dep, "cielab", colourRefOne );
  const Lab2 = _dep.operations.convert( _dep, "cielab", colourRefTwo );

  const C1 = Math.sqrt(Math.pow(Lab1.a, 2) + Math.pow(Lab1.b, 2));
  const C2 = Math.sqrt(Math.pow(Lab2.a, 2) + Math.pow(Lab2.b, 2));
  const dC = C1 - C2;

  const dL = Lab1.L - Lab2.L;
  const da = Lab1.a - Lab2.a;
  const db = Lab1.b - Lab2.b;

  const dH = Math.sqrt(Math.pow(da, 2) + Math.pow(db, 2) - Math.pow(dC, 2));

  const SL = Lab1.L < 16 ? 0.511 : (0.040975 * Lab1.L) / (1.01765 * Lab1.L);
  const SC = (0.0638 * C1) / (1.0131 * C1);

  const H = Math.atan2(Lab1.b, Lab1.a);
  const H1 = H >= 0 ? H : H + 360;

  const T = (164 <= H1) && (H1 <= 345) ? (0.56 + Math.abs(0.2 * Math.cos(_dep.helpers.toRad(H1 + 168)))) : (0.36 + Math.abs(0.4 * Math.cos(_dep.helpers.toRad(H1 + 35))));
  const F = Math.pow(C1, 4) / (Math.pow(C1, 4) + 1900);

  const SH = SC * (((F * T) + 1) - F);

  const EqPrt1 = Math.pow((dL / (l * SL)), 2);
  const EqPrt2 = Math.pow((dC / (c * SC)), 2);
  const EqPrt3 = Math.pow((dH / (SH)), 2);

  return Math.sqrt(EqPrt1 + EqPrt1 + EqPrt1);
}

module.exports = difference;
