function temperature( _dep, colourRef ) {
  const colour = _dep.operations.convert( _dep, "xyY", colourRef );

  // McCamy's CCT fomula.
  // DOI: 10.1002/col.5080170211
  // http://onlinelibrary.wiley.com/doi/10.1002/col.5080170211/abstract;jsessionid=D127570AD1D0FEF9A18424F5C0E987C5.f02t04
  const n = (colour.x - 0.3320) / (colour.y - 0.1858)
  const out = (-449 * Math.pow(n, 3)) + (3525 * Math.pow(n, 2)) - (6823.3 * n) + 5520.33

  return out;
}

module.exports = temperature;
