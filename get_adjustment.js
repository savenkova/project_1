exports.fn = function (a, b, x, y) {
	if (b == y) {
  	if (x > a) {console.log('двигаемся направо')} else {console.log('двигаемся налево')}
  } else if (a == x) {
  	if (y > b) {console.log('двигаемся вверх')} else {console.log('двигаемся вниз')}
  } else if (b > y) {
  	if (x > a) {console.log('двигаемся напрво и вверх')} else {console.log('двигаемся налево и вверх')}
  } else if (b < y) {
  	if (x > a) {console.log('двигаемся направо и вниз')} else {console.log('двигаемся налево и вниз')}
  }
};