function bubbleSort(array) {
  var done = false;
  while(!done){
    done = true;
    for (i=0; i<array.length-1; i++){
      if (array[i] > array[i+1]){
        done = false;
        var tmp = array[i];
        array[i] = array[i+1];
        array[i+1] = tmp;
        console.log('==>',array)
      }
    }
  }
  return array
}


var numbers = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
var array = bubbleSort(numbers);
console.log(array);
