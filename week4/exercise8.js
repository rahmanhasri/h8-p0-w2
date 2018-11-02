// function urutkanAbjad(str) {
//   // you can only write your code here!
//   var array = [];
//   var string = '';
//   var alfabet = 'abcdefghijklmnopqrstuvwxyz'
//   for (i=0;i<str.length;i++){
//     for (j=0;j<alfabet.length;j++){
//       if (str[i] === alfabet[j]){
//         array.push(j)
//       }
//     }
//   }
//
//   array = array.sort(function(a,b){return a > b})
//   for (z=0; z<array.length;z++){
//     string = string + alfabet[array[z]]
//   }
//   return string
// }

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

function urutkanAbjad(str) {
  var array = [];
  var string = '';
  // split ke array
  for (let i = 0 ; i<str.length; i++){
    array.push(str[i])
  }
  // sort array
  var belom = true;
  while(belom) {
    belom = false;
    for (let j = 0;j<array.length-1;j++){
      if (array[j] > array[j+1]){
        var tmp = '';
        tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
        belom = true;// belom beres
      }
    }
  }
  // console.log(array)
  // join array
  for (let k = 0; k<array.length; k++){
    string += array[k]
  }
  return string
}
