// function totalDigitRekursif(angka){
//   if (angka < 10){
//     return angka
//   } else {
//     angka = String(angka);
//     return Number(angka[0]) + totalDigitRekursif(+angka.slice(1))
//   }
// }


console.log(totalDigitRekursif(512)) //8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

function totalDigitRekursif(angka) {
  let numStr = String(angka)
  return angka < 10 ? angka : +numStr[0] + totalDigitRekursif(+numStr.slice(1))
}
