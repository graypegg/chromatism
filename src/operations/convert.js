function convert( _dep, to, value ) {
  if (Object.keys(_dep.conversions).indexOf(to) > -1) {
    if (value.colour) value = value.colour
    else if (value.colours) value = value.colours
    let from = _dep.helpers.determineMode(value);
    if (from != to) {
      return _dep.conversions[from].convert( _dep, to, value );
    } else {
      return value;
    }
  } else {
    return _dep.helpers.ready( _dep, to );
  }
}

module.exports = convert;
