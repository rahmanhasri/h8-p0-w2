/**
Count Missing Numbers
-------------------
Implementasikan function `countMissingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: 4 angka hilang
    karena angka yang tidak ada adalah 3, 5, 6 dan 7
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: 1
    karane angka yang tidak ada adalah 4
  - Input: [4, 2, 3, 1]
    Output: tidak ada angka hilang

  Dilarang menggunakan built-in function:
  - max()
  - min()
  - sort()
*/

function countMissingNumbers (numbers) {
  // Code disini
  let angkaFull = []

  if (numbers.length === 0){
    return 'data tidak bisa diproses'
  }

  // sorting
  let cekSort = true
  while (cekSort){
    cekSort = false
    for (let i = 0 ; i<numbers.length-1 ; i++){
      if (numbers[i] > numbers[i+1]){
        cekSort = true
        let tmp = numbers[i]
        numbers[i] = numbers[i+1]
        numbers[i+1] = tmp
      }
    }
  }

  for (let i = numbers[0] ; i<=numbers[numbers.length - 1] ; i++){
    angkaFull.push(numbers[i])
  }

  let counter = angkaFull.length - numbers.length
  if (counter === 0){
    return 'tidak ada angka yang hilang'
  } else {
    return counter + ' angka hilang'
  }
}

console.log(countMissingNumbers([1, 5, 10, 7, 6])); // 5 angka hilang
console.log(countMissingNumbers([10, 1])); // 8 angka hilang
console.log(countMissingNumbers([90, 92, 91])); // tidak ada angka hilang
console.log(countMissingNumbers([61, 54, 50])); // 9 angka hilang
console.log(countMissingNumbers([])); // data tidak bisa diproses
