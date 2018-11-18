// function cariModus(arr) {
//   // you can only write your code here!
//   var modus;
//   var max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     console.log('>>', arr[i]);
//     var counter = 0;
//     for (let j = i; j < arr.length; j++) {
//       if (i === j) {
//         // do nothing
//       } else if (arr[i] === arr[j]) {
//         counter++
//       }
//     }
//     console.log('>', counter);
//     if (counter > max) {
//       modus = arr[i];
//       max = counter
//     }
//   }
//   if (max === arr.length - 1 || max === 0) {
//     return -1
//   }
//   return modus
// }

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([1, 1, 1, 3, 3, 1])) // 1

function cariModus(arr) {
  let modus; // deklarasi var modus
  let array = []; // deklarasi array indeks untuk pengecekan angka sesuai indeks
  // [3 empty items, 1 (pada nilai 4), 1 (pada nilai 5), dst]
  let max = 0; // deklarasi var yg kuantitasnya paling banyak (modus)
  for (let i = 0; i < arr.length; i++) { // pengulangan
    if (array[arr[i]] === undefined) { // saat array pada indeks sesuai nilai belum terdefinisi
      array[arr[i]] = 1 // maka akan menambahkan nilai 1
    } else {
      array[arr[i]] += 1 // jika sudah terdefinisi maka menambahkan nilai +1 (kuantitasnya)
    }
    if (array[arr[i]] >= max) { // mengassign saat ada kuantitas yg lebih dari maxnya
      max = array[arr[i]]
      modus = arr[i] // mengassign baru saat ada nilai baru yg maxnya lebih banyak
    }
  } // selesai pengulangan
  if (max === 1 || max === arr.length) { // saat max memiliki nilai 1 atau max memiliki nilai sebanyak panjang arranya
    return -1 // maka modus tidak ditemukan
  } else return modus // jika tidak maka akan mereturn modus
}
