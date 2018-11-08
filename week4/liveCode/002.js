/**
Graduates Count

Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.

Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong

Aturan coding:
  - WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
  - Dilarang menggunakan built-in function:
    - .map()
    - .filter()
    - .reduce()
*/

/*
// PSEUDOCODE
STORE `scores` with any value inside of an array
STORE `counter` with value of 0
IF length of `scores` is same as 0
  THEN RETURN 'Data kosong',
FOR every value length of `scores`, STORE `i` with 0, ADD `i` by 1 for every LOOP
  IF `scores` value with index `i` is more than 74
    THEN ADD `counter` by 1
IF `counter` is same as 0
  RETURN 'Tidak ada yang lulus'
IF `counter` has same value as length character of `scores`
  RETURN 'Semua orang lulus'
ELSE RETURN `counter` , 'orang lulus'
*/

function graduatesCount(scores) {
  // Code disini
  var counter = 0;
  if (scores.length === 0) {
    return 'Data kosong'
  }
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > 74) {
      counter++
    }
  }
  if (counter === 0) {
    return 'Tidak ada yang lulus'
  } else if (counter === scores.length) {
    return 'Semua orang lulus'
  } else
    return counter + ' orang lulus'
}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
