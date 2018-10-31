// function targetTerdekat(arr) {
//   var target = arr.length;
//   if (arr.indexOf('x') !== -1 && arr.indexOf('o') !== -1) {
//     for (i = 0; i < arr.length; i++) {
//       var char = ' ';
//       if (arr[i] !== ' ' && (arr[i] === 'x' || arr[i] === 'o')) {
//         char = arr[i];
//         for (j = i; j < arr.length; j++) {
//           if (arr[j] !== char && arr[j] !== ' ') {
//             if (arr[j] === 'x' || arr[j] === 'o') {
//               if (j - i < target) {
//                 target = j - i
//               }
//             }
//           }
//         }
//       }
//     }
//   } else return 0
//   return target
// }


console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

function targetTerdekat(arr) {
  var char = [];
  var count = [];
  var count2 = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 'x' || arr[i] === 'o') {
      char.push(arr[i]);
      count.push(i)
    }
  }

  for (j=0;j<count.length-1; j++){
    if (char[j] !== char[j+1]){
      count2.push(count[j+1] - count[j])
    }
  }

  count2.sort();
  if (Boolean(count2) === undefined) {
    return 0
  } else return count2[0];
}
