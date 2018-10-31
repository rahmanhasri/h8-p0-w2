// function hitungJumlahKata(kalimat) {
//   // you can only write your code here!
//   var counter = 1;
//   if (kalimat.length === 0) {
//     return 0
//   } else
//     for (i = 0; i < kalimat.length; i++) {
//       if (kalimat[i] === ' ') {
//         counter++
//       }
//     }
//   return counter
// }

function hitungJumlahKata(kalimat) {
  var counter = 0;
  var kata = '';
  for (i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== ' ') {
      kata += kalimat[i]
    } else if (!!kata && kalimat[i] === ' ') { // saat looping, check jika memiliki 1 kata (true) dan bertemu dengan spasi
      kata = '';
      counter++ // menambah counter karena 1 kata itu berakhir
    }
  }
  if (!!kata) { // setelah looping berakhir pada length terakhir maka 1 kata (true) tsb direset dan ditambah counter 1
    counter++
  }
  return counter
}

// TEST CASES
console.log(hitungJumlahKata(' I have a dream ')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake ')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata(' I ')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
