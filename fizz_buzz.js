var arr = [];
for (var i = 0; i < 100; i++) {
		arr.push(i+1);
	};
var str = '';
exports.fizzbuzz_string = function() {
	arr.forEach(function(i){
	if (i%15 == 0) {str += (' ' + 'FizzBuzz' + ' ')}
		else if(i%5 == 0) {str += (' ' + 'Buzz' + ' ')}
			else if(i%3 == 0) {str += (' ' + 'Fizz' + ' ')}
			else {str += (' ' + i + ' ')};
	});
	console.log(str);
};  