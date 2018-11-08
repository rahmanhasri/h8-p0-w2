var input = [ 2, 2, 3, 5, 2, 5, 3];
console.log(cekDuplikat(input));

// function cekDuplikat(arr){
//   var newArr = [];
//   for (let i = 0; i<arr.length ; i++){
//     var bukanDuplikat = true;
//     for (let j = 0; j<newArr.length ; j++){
//       if (arr[i] === newArr[j]){
//         bukanDuplikat = false;
//       }
//     }
//     if (bukanDuplikat){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

function cekDuplikat(arr){
  let tampil = {}
  let output = []
  for (let i = 0 ; i<arr.length; i++){
    let item = arr[i];
    if (tampil[item] === undefined){
      tampil[item] = 1
      output.push(item)
    } else tampil[item] += 1
  }
  console.log(tampil)
  return output
}
