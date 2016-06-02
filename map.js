var map = [
    [null, 1, null, null, null, null, null, 1], 
    [null, null, null, 1, null, null, 1, null], 
    [null, 1, null, null, 1, null, null, null],
    [null, null, 1, null, null, 1, null, null],
    [null, null, null, 1, null, null, 1, null],
    [1, null, null, null, null, null, 1, null],
    [1, null, null, null, 1, null, null, null],
    [null, null, 1, null, null, 1, null, null]
];
for(var x = 0; x < 8; x++ ){
	for(var y = 7; y > 0; y-- ){
  	if(map[y][x] == null){
    	if(map[y-1][x] != null){ 
      	map[y][x] = map[y-1][x];
        map[y-1][x] = null;
        y += (7 - y + 1);
      }
    }
  }
};
var str;
for(var y = 0; y < 8; y++ ){
	str = '';
    for(var x = 0; x < 8; x++ ){
        if(map[y][x] == 1){
            str += (map[y][x] + ' '+' '+' '+' ')
        }else{str += (map[y][x] + ' ')}; 
    };
    console.log(str);
}