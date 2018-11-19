/*
  Halang Rintang

  Diberikan sebuah function halangRintang yang menerima 2 parameter yaitu:
   - parameter pertama adalah string menggambarkan arena perlombaan dimana symbol `_` menandakan arena datar
     dan symbol `n` menandakan rintangan.
   - parameter kedua adalah number daya lompat kuda yang menentukan berapa banyak rintangan yang dapat dilewati
     dalam sekali lompat

  function ini akan mengembalikan jarak yang dapat di tempuh oleh kuda tersebut sebelum akhirnya menabrak rintangan

  example:
  halangRintang('__n__nn__nnn__n', 2)

  proses:
  karakter ke-1 dan 2 adalah arena datar sehingga dapat dilewati
  karakter ke-3 terdapat satu rintangan sehingga dapat dilewati
  karakter ke-4 dan 5 adalah arena datar sehingga dapat dilewati
  karakter ke-6 dan 7 terdapat dua rintangan sehinga dapat dilewati
  karakter ke-8 dan 9 adalah arena datar sehingga dapat dilewati
  karakter ke-10 sampai 11 terdapat 3 rintangan sedangkan daya lompat hanya 2 sehingga tidak dapat dilewati dan berhenti di 9

  output:
  9

  RULES:
  - WAJIB menyertakan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .slice(), .indexOf()
  - DILARANG menggunakan regex

*/

//PSEUDOCODE
// FOR `i` is 0 ; `i` is less than character length of `arena`, ADD `i` plus by 1 every loop
//  STORE `loncat` with value 0
//  IF value of `arena` with index `i` equals to string 'n'
//    FOR `j` is 0 , `arena` with index `i` + `j` equals to 'n', ADD `j` every loop
//      ADD `loncat` plus by 1
//    IF `loncat` is more than `dayaLompat`
//      RETURN `i`, END PROGRAM
// RETURN `i`, END PROGRAM

function halangRintang(arena, dayaLompat) {
  // you can only write your code here!
  for (let i = 0 ; i<arena.length ; i++){
    let loncat = 0
    if (arena[i] === 'n'){
      for (let j = 0 ; arena[i+j] === 'n'; j++){
        loncat++
      }
      if (loncat > dayaLompat){
        return i
      }
    }
  }
  return i
}

// TEST CASES
console.log(halangRintang('___n__nn', 1)); // 6
console.log(halangRintang('___n__nn_nnn', 2)); // 9
console.log(halangRintang('_nnnnn___', 1)); // 1
console.log(halangRintang('____nnnn__nnnnn', 4)); // 10
console.log(halangRintang('nnnnn____', 2)); // 0
