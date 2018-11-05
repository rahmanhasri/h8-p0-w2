function targetTerdekat(arr) {
  let jarak = arr.length; // deklarasi jarak maksimal
  let xIndex = []; // Deklarasi array xIndex u/ menghitung index tiap x
  let oIndex; // Deklarasi oIndex

  for (let i=0; i<arr.length ; i++){ // Looping i 0 hingga kurang dari panjang array
    if (arr[i] === 'x'){ // Jika array sama denga x, maka input push i ke array xIndex
      xIndex.push(i)
    } else if (arr[i] === 'o'){ // Jika array sama dengan o, maka input push i ke array oIndex
      oIndex = i
    }
  }
  // console.log(xIndex);
  // console.log(oIndex);
  for (let j = 0; j<xIndex.length; j++){ // Looping j 0 hingga kurang dari panjang array xIndex
    let tmp = Math.abs(xIndex[j] - oIndex); // Deklarasi nilai tmp yang menghitung tiap xIndex dikurangi oIndex
    if (tmp < jarak){ // Jika nilai tmp lebih kecil dari jarak, maka jarak diassign dengan nilai tmp
      jarak = tmp;
    }
  }
  if (xIndex.length == 0){ // Jika jarak masih sama saat deklarasi assign jarak maksimal
    return 0 // maka return 0
  } else return jarak // jika Bukan, maka return nilai jarak

}


console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// function targetTerdekat(arr) {
//   // you can only write your code here!
//   var indexO = arr.indexOf("o")
//   var jarakTerdekat = arr.length
//   if (arr.indexOf("x") === -1) {
//     return 0
//   }
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "x") {
//       let jarak = Math.abs(i - indexO)
//       if (jarak < jarakTerdekat) {
//         jarakTerdekat = jarak
//       }
//     }
//   }
//   return jarakTerdekat
// }
