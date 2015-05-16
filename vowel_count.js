vowel_count = function(str) {
	count = 0;
	str.split('').forEach(function(chr) {
		if (['A', 'E', 'I', 'O', 'U', 'Y'].indexOf(chr.toUpperCase()) >= 0 ) {
			count++;
		};
	});
	return count;
};

console.log(vowel_count("abcdefghijklmnopqrstuvwxyz"));
