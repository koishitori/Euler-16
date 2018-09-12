var nums = [ 1 ];
for(var i = 0; i < 1000; i++ ){
  for( var j = 0; j < nums.length; j++ )
    nums[ j ] *= 2;
  for( var j = 0; j < nums.length; j++)
    if( nums[ j ] >= 10 ){
      if( nums[ j + 1] === undefined )
        nums[ j + 1 ] = 0;
      nums[ j + 1 ] ++;
      nums[ j ] = nums[ j ] % 10;
    }
}
ans = 0;
for( var j = 0; j < nums.length; j++)
  ans += nums[ j ];
ans;
