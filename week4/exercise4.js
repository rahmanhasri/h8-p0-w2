// function cariModus(arr) {
//   // you can only write your code here!
//   for (i = 0; i < arr.length; i++) {
//     var cari = arr[i];
//     var tampung = [];
//     for (j = 0; j < arr.length; j++) {
//       if (cari === arr[j]) {
//         tampung.push(arr[j])
//         //console.log(tampung)
//       }
//       if (j === arr.length - 1) {
//         if (tampung.length !== arr.length && tampung.length === 2) {
//           return tampung[0]
//         }
//       }
//     }
//     }
//     if (tampung.length<2 || tampung.length === arr.length){
//       return -1
//   }
// }


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

function cariModus(arr) {
  var modus;
  var count;
  // you can only write your code here!
  for (i = 0; i < arr.length; i++) {
    count = 0;
    for (j = 0; j < arr.length; j++) {
      if (i === j) {
        //do nothing
      } else if (arr[i] == arr[j]) {
        count++;
      } else if (count > 0) {
        modus = arr[i];
      }
    }
  }

  if (modus == undefined) {
    return -1
  } else if (count == arr.length - 1) {
    return -1
  } else return modus
}
