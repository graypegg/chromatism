function adjacent( _dep, deg, amount, colourRef ) {
  var colour = _dep.operations.convert( _dep, "hsl", colourRef );
  var colours = [{h:colour.h, s:colour.s, l:colour.l}];

  for(var i=0;i<(amount-1);i++) {
    colour.h = _dep.helpers.negMod((colour.h + deg), 360);
    colours.push({h:colour.h, s:colour.s, l:colour.l});
  }

  return _dep.helpers.ready( _dep, colours );
}

module.exports = adjacent;
