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
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
