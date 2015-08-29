function convert( from, to, value ) {
	switch (from){
		case "hex":
			return fromHex( to, value );
			break;
		case "rgb":
			return fromRgb( to, value );
			break;
		case "css-rgb":
			return fromCssRgb( to, value );
			break;
	}
}

function fromHex( to, value ) {
	value = value.replace('#','').match(/.{2}/g);
	for (i=0;i<value.length;i++){
		value[i] = parseInt(value[i], 16);
	}
	switch (to){
		case "rgb":
			return {
				r: value[0],
				g: value[1],
				b: value[2]
			};
			break;
		case "css-rgb":
			return "rgb(" + value[0] + "," + value[1] + "," + value[2] + ")";
			break;
	}
}

function fromRgb( to, value ) {
	switch (to){
		case "hex":
			var r = value['r'].toString(16);
			if (r.length == 1) r = "0"+r;
			var g = value['g'].toString(16);
			if (g.length == 1) g = "0"+g;
			var b = value['b'].toString(16);
			if (b.length == 1) b = "0"+b;
			return "#"+r+g+b;
			break;
		case "css-rgb":
			return "rgb(" + value['r'] + "," + value['g'] + "," + value['b'] + ")";
			break;
	}
}

function fromCssRgb( to, value ) {
	value = value.replace(/(rgb\(|\))/g,'').split(",");
	for (i=0;i<value.length;i++){
		value[i] = parseInt(value[i]);
	}
	switch (to){
		case "hex":
			var r = value[0].toString(16);
			if (r.length == 1) r = "0"+r;
			var g = value[1].toString(16);
			if (g.length == 1) g = "0"+g;
			var b = value[2].toString(16);
			if (b.length == 1) b = "0"+b;
			return "#"+r+g+b;
			break;
		case "rgb":
			return {
				r: value[0],
				g: value[1],
				b: value[2]
			};
			break;
	}
}

module.exports = {
	convert: convert
}