exports.revert_array = function(arr){
	var count = arr.length-1; 
  for(var i = 0; i < (arr.length/2); i++ ) {
  	k = arr[i];
  	arr[i] = arr[count];
    arr[count] = k;
    count -= 1
  };
  var str='';
  arr.forEach(function(i){
  	str += i  + ' ';
  });
  console.log(str);
};