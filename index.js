var fizz_buzz = require('./fizz_buzz');
var get_adjustment = require('./get_adjustment');
var revert = require('./revert');

console.log('----------------------------');
console.log('Результат работы функции FizzBuzz:')
fizz_buzz.fizzbuzz_string();
console.log('----------------------------');
console.log('Результат работы функции, определяющей направление движения:')
get_adjustment.fn(1, 1, 2, 1);
console.log('----------------------------');
console.log('Результат работы функции, разворачивающей массив:')
revert.revert_array([1, 2, 3, 4, 5, 6, 7, 8, 9]);



