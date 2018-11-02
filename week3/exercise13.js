function targetTerdekat(arr) {
  var indexAwal = 0,
    min = 0,
    jarak = 0,
    i = 0;
  var awal = ''

// LOOPING Hanya 1
  while (i < arr.length) {
    // Mengecek awal saat masih kosong dan array[0] bukan spasi
    if (awal === '' && arr[i] !== ' ') {
      awal = arr[i];
    }
    // Cek kedua saat string awal u/ memberi index pada char pertama atau char kedua yg sama
    if (awal === arr[i]) {
      indexAwal = i;
    // Saat char berbeda dan bukan X maka (saat x bertemu o / kebalikannya) maka menghitung jarak tersebut
    } else if (awal !== arr[i] && arr[i] !== ' ') {
      jarak = i - indexAwal;
      if (min === 0) {
        min = jarak;
      // cek terakhir apakah jarak yg dihitung lebih sedikit
      } else if (jarak < min) {
        min = jarak;
      }
    }
    i++
  }
  return min;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', 'o', ' ','x', 'o',' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// function targetTerdekat(arr) {
//   let jarak = arr.length; // deklarasi jarak maksimal
//   let xIndex = []; // Deklarasi array xIndex u/ menghitung index tiap x
//   let oIndex; // Deklarasi oIndex
//
//   for (let i=0; i<arr.length ; i++){ // Looping i 0 hingga kurang dari panjang array
//     if (arr[i] === 'x'){ // Jika array sama denga x, maka input push i ke array xIndex
//       xIndex.push(i)
//     } else if (arr[i] === 'o'){ // Jika array sama dengan o, maka input push i ke array oIndex
//       oIndex = i
//     }
//   }
//   // console.log(xIndex);
//   // console.log(oIndex);
//   for (let j = 0; j<xIndex.length; j++){ // Looping j 0 hingga kurang dari panjang array xIndex
//     let tmp = Math.abs(xIndex[j] - oIndex); // Deklarasi nilai tmp yang menghitung tiap xIndex dikurangi oIndex
//     if (tmp < jarak){ // Jika nilai tmp lebih kecil dari jarak, maka jarak diassign dengan nilai tmp
//       jarak = tmp;
//     }
//   }
//   if (jarak === arr.length){ // Jika jarak masih sama saat deklarasi assign jarak maksimal
//     return 0 // maka return 0
//   } else return jarak // jika Bukan, maka return nilai jarak
//
// }
