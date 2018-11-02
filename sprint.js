// //input "hello world!"
// //output
// console.log(balikKata("!dlrow olleh"));
//
// function balikKata(str) {
//   let balik = ''
//   for (let i = 0; i<str.length ; i++){
//     balik = str[i] + balik
//   }
//   return balik
// }
//
// function palindrome(kata) {
//   // you can only write your code here!
//   var tampung = ''
//   for (let i = 0; i<kata.length; i++){
//     tampung = kata[i] + tampung
//   }
//   if (tampung === kata){
//     return true
//   } else false
// }
//
// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false
//
// function angkaPalindrome(num) {
//   // you can only write your code here!
//   while (num) {
//     num++
//     String(num);
//     let tampung = ''
//     for (let i = 0; i<num.length; i++){
//       tampung = num[i] + tampung
//     }
//     if (tampung === num){
//       return true
//     } else false
//   }
// }
//
// // TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001


// function hitungJumlahKata(kalimat) {
//   // you can only write your code here!
//   var kata = ''
//   var counter = 0
//   for (let i = 0; i<kalimat.length;i++){
//     if (kalimat[i] !== ' '){
//       kata += kalimat[i]
//     } else if (kata.length >= 1 && kalimat[i] === ' '){
//       counter++
//       kata =''
//     }
//   }
//   if (kata.length >=1){
//     counter++
//   }
//   return counter
// }
//
// // TEST CASES
// console.log(hitungJumlahKata(' I have a dream ')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I believe I can code')); // 5
// console.log(hitungJumlahKata('I')); // 1

// function pasanganTerbesar(num) {
//   // you can only write your code here!
//   num = String(num);
//   let max = 0;
//   for (let i =0 ; i<num.length-1; i++){
//     var tampung = '';
//     tampung += num[i] + num[i+1]
//     if (num[i] + num[i+1] > max){
//       max = num[i] + num[i+1]
//     }
//   }
//   return max
//   // for (let i = 0; i<num.length; i++){
//   //   if (num[i]+num[i+1] > max){
//   //     max = num[i]+num[i+1]
//   //   }
//   // }
//   // return max
// }
//
// // TEST CASES
// console.log(pasanganTerbesar(641573)); // 73
// console.log(pasanganTerbesar(12783456)); // 83
// console.log(pasanganTerbesar(910233)); // 91
// console.log(pasanganTerbesar(71856421)); // 85
// console.log(pasanganTerbesar(79918293)); // 99


// function cariMean(arr) {
//   // you can only write your code here!
//   var hasil = 0;
//   for (i=0;i<arr.length; i++){
//     hasil += arr[i]
//   }
//   return Math.round(hasil/arr.length)
// }
//
// // TEST CASES
// console.log(cariMean([1, 2, 3, 4, 5])); // 3
// console.log(cariMean([3, 5, 7, 5, 3])); // 5
// console.log(cariMean([6, 5, 4, 7, 3])); // 5
// console.log(cariMean([1, 3, 3])); // 2
// console.log(cariMean([7, 7, 7, 7, 7])); // 7

// function perkalianUnik(arr) {
//   // you can only write your code here!
//   var multiply = 1;
//   for (let i =0 ; i<arr.length; i++){
//     multiply *= arr[i]
//   }
//   for (let j = 0; j<arr.length; j++){
//     arr[j] = multiply/arr[j]
//   }
//   return arr
// }
//
// // TEST CASES
// console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

// function tentukanDeretAritmatika(arr) {
//   // you can only write your code here!
//   var selisih = arr[1] - arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] !== selisih) {
//       return false
//     }
//   }
//   return true
// }
//
// // TEST CASES
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

// function tentukanDeretGeometri(arr) {
//   // you can only write your code here!
//   var selisih = arr[1] / arr[0];
//   for (let i = 0; i <arr.length-1; i++){
//     if (arr[i+1] / arr[i] !== selisih)
//       return false
//   }
//   return true
// }
//
// // TEST CASES
// console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
// console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
// console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
// console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
// console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

// function targetTerdekat(arr) {
//   // you can only write your code here!
//   var xIndex = []
//   var oIndex;
//   var min = arr.length;
//
//   for (let i = 0 ; i<arr.length;i++) {
//     if (arr[i] === 'o'){
//       oIndex = i
//     } else if (arr[i] === 'x'){
//       xIndex.push(i)
//     }
//   }
//
//   for (let j = 0; j<xIndex.length ; j++){
//     if (Math.abs(xIndex[j] - oIndex) < min){
//       min = Math.abs(xIndex[j] - oIndex)
//     }
//   }
//   if (min === arr.length){
//     return 0
//   }
//   return min
// }
//
// // TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2



// function mengelompokkanAngka(arr) {
//   // you can only write your code here!
//   var genap = [], ganjil = [], kelipatan3 = [];
//   for (let i = 0; i<arr.length; i++){
//     if (arr[i] % 3 === 0){
//       kelipatan3.push(arr[i])
//     } else if (arr[i] % 2 !== 0){
//       ganjil.push(arr[i])
//     } else genap.push(arr[i])
//   }
//   return [genap,ganjil,kelipatan3]
// }
//
// // TEST CASES
// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// function groupAnimals(animals) {
//   // you can only write your code here!
//   animals.sort()
//   var tampung = []
//   var newArr = []
//   var cariHuruf = animals[0][0]
//   for (let i =0; i<animals.length; i++){
//     if (animals[i][0] === cariHuruf){
//       tampung.push(animals[i])
//     } else {
//       cariHuruf = animals[i][0];
//       newArr.push(tampung)
//       tampung = []
//       tampung.push(animals[i])
//     }
//   }
//   return newArr
// }
//
// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
