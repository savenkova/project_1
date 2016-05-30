var arr = [];
for (var i = 0; i < 100; i++) {
		arr.push(i+1);
	};
var str = '';
exports.fizzbuzz_string = function() {
	arr.forEach(function(i){
	(i%15 == 0) ? str += 'FizzBuzz' : (i%5 == 0) ? str += 'Buzz':
		(i%3 == 0) ? str += 'Fizz': (str += i);
	str += ' ';
	});
	console.log(str);
};  