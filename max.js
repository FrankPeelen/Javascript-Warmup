run = function(arr) {
	if (!arr || arr.length == 0) {
		return null;
	};
	max = arr[0];
	for(i = 1; i < arr.length; i++) {
		val = arr[i];
		if (val > max) {
			max = val;
		};
	};
	return max;
};

console.log(run([0, 3, 125, 55, 8934, 3, -5, -53525, 321]));
