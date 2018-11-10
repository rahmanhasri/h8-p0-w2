function kaliDigit(angka) {
  let angkaStr = String(angka)
  angka = 1;
  for (let i = 0; i<angkaStr.length; i++){
    angka = angka * angkaStr[i]
  }
  return angka
}

function kaliTerusRekursif(angka) {
  return (angka < 10) ? angka : kaliTerusRekursif(kaliDigit(angka))
}

// function kaliTerusRekursif(angka) {
//   var strNum = String(angka)
//   var hasil = 1
//   if (angka < 10) {
//     return angka
//   } else {
//     for (let i = 0; i < strNum.length; i++) {
//     hasil *= strNum[i]
//   }
//     return kaliTerusRekursif(hasil)
//   }
// }

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
