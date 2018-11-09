function angkaPrima(angka) {
  // you can only write your code here!
  let prima = true
  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) {
        return false
    }
  }
  return prima
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

function fpb(angka1, angka2) { // KALAH KEREN DIBANDING EXERCISE2.js
  // you can only write your code here!
  let fpb = 1
  for (let i = 1; i < angka1; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      fpb = i
    }
  }
  return fpb
}

// TEST CASES
// console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1

function cariMedian(arr) {
  // you can only write your code here!
  let i = Math.floor(arr.length / 2)
  if (arr.length % 2 === 0) {
    return ((arr[i] + arr[i - 1]) / 2)
  } else {
    return arr[i]
  }
}

// TEST CASES
// console.log(cariMedian([1, 2, 3, 4, 5])); // 3
// console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
// console.log(cariMedian([3, 4, 7, 6, 10])); // 7
// console.log(cariMedian([1, 3, 3])); // 3
// console.log(cariMedian([7, 7, 8, 8])); // 7.5


function cariModus(arr) {
  // you can only write your code here!
  var modus;
  var max = 1
  for (let i = 0; i < arr.length; i++) {
    var counter = 1
    for (let j = i; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        counter++
      }
    }
    if (max < counter) {
      max = counter;
      modus = arr[i]
    }
  }
  if (max === 1 || max === arr.length) {
    return -1
  }
  return modus
}

// TEST CASES
// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1

function ubahHuruf(kata) {
  // you can only write your code here!
  var kamus = 'abcdefghijklmnopqrstuvwxyza'
  string = '';
  let lanjut = true
  let i = 0;
  while (i < kata.length) {
    for (let j = 0; j < kamus.length - 1; j++) {
      if (kata[i] === kamus[j]) {
        string = string + kamus[j + 1];

      }
    }
    i++
  }
  return string
}

// TEST CASES
// console.log(ubahHuruf('wow')); // xpx
// console.log(ubahHuruf('developer')); // efwfmpqfs
// console.log(ubahHuruf('javascript')); // kbwbtdsjqu
// console.log(ubahHuruf('keren')); // lfsfo
// console.log(ubahHuruf('semangat')); // tfnbohbu



function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let arr = []
  for (let i = 1; i<=angka; i++){
    for (let j = 1; j<=angka; j++)
    if (i * j === angka){
      arr.push(i + '' + j)
    }
  }
  let min = arr[0].length;
  for (let i = 0; i<arr.length; i++){
    if (arr[i].length < min){
      min = arr[i].length
    }
  }
  console.log(arr);
  return min
}

// TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2

function urutkanAbjad(str) {
  // you can only write your code here!
  let string = ''
  let kamus = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0 ; i<kamus.length; i++){
    for (let j = 0 ; j<str.length; j++){
      if (kamus[i] === str[j]){
        string += kamus[i]
      }
    }
  }
  return string
}

// TEST CASES
// console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'

function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let string = ''
  for (let i = 0 ; i<kalimat.length; i++){
    if (kalimat[i] === kalimat[i].toLowerCase()){
      string += kalimat[i].toUpperCase()
    } else
    string += kalimat[i].toLowerCase()
  }
  return string
}

// TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

function checkAB(num) {
  // you can only write your code here!
  for (let i = 0; i<num.length-4; i++){
    if (num[i] === 'a' && num[i+4]=== 'b'){
      return true
    } else if (num[i] === 'b' && num[i+4]=== 'a'){
      return true
    }
  }
  return false
}

// TEST CASES
// console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
// console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false
