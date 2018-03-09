'use strict';

module.exports = (input) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	var IPTable = [
	[58, 50, 42, 34, 26, 18, 10, 2],
	[60, 52, 44, 36, 28, 20, 12, 4],
	[62, 54, 46, 38, 30, 22, 14, 6],
	[64, 56, 48, 40, 32, 24, 16, 8],
	[57, 49, 41, 33, 25, 17, 9, 1],
	[59, 51, 43, 35, 27, 19, 11, 3],
	[61, 53, 45, 37, 29, 21, 13, 5],
	[63, 55, 47, 39, 31, 23, 15, 7]
	];

	if(input.length == 64){
		var output = '';
		
		for (var i = 0; i < IPTable.length; i++) {
			for (var j = 0; j < IPTable[i].length; j++) {
				output += input[IPTable[i][j] - 1];
			}
		}

		return output;
	}else{
		throw new TypeError(`Expected an 64-bit string`)
	}
};
