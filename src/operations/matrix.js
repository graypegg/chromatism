function matrix( mode, data ) {
	this.mode = mode;
	this.data = (typeof data[0] == "object" ? data : [data]);

	this.map = function( func ) {
		for (var x=0;x<this.data.length;x++){
			for (var y=0;y<this.data[x].length;y++){
				this.data[x][y] = func(this.data[x][y]);
			}
		}
	}
	this.change = function( x, y, value ) {
		this.data[y][x] = value;
	}
}
