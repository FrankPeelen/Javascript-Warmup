reverse = function(str) {
	result = '';
	for (i = str.length - 1; i >= 0; i--) {
		result += str.charAt(i);
	};
	return result;
};

console.log(reverse("this is a string"));
