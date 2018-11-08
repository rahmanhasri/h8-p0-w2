// function kaliTerusRekursif(angka) {
//   var str = String(angka)
//   if (str.length === 1){
//     return str
//   } else {
//     return kaliTerusRekursif(str[0] * kaliTerusRekursif(str.slice(1)))
//   }
// }

function kaliTerusRekursif(angka) {
  var str = String(angka)
  var hasil = 1
  for (let i = 0; i<str.length; i++){
    hasil *= str[i]
  }
  if (String(hasil).length === 1) {
    return hasil
  } else {
    return kaliTerusRekursif(hasil)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
