// function perkalianUnik(arr) {
//   var newArr = [];
//   for (i=0;i<arr.length;i++){
//     var total = 1;
//     var tampung = arr[i];
//     arr[i] = arr[i] ** 0;
//     for (j=0;j<arr.length;j++){
//       total = total * arr[j]
//     }
//     newArr.push(total)
//     arr[i] = tampung;
//   }
//   return newArr
// }

function perkalianUnik(arr) {
  var newArr = [];
  for (i=0;i<arr.length;i++){
    var result = 1;
    for (j=0;j<arr.length;j++){
      if (i === j){
        // do nothing
      } else result = result * arr[j];
    }
    newArr.push(result)
  }
  return newArr
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
