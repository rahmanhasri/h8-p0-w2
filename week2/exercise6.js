// SOAL NO.1
// var i = 0;
// var j = 20;
//
// while (i <= 20) {
//   if (i === 0) {
//     console.log('LOOPING PERTAMA');
//   } else {
//     console.log(i + ' - ' + 'I love coding')
//   }
//   i += 2;
// }
//
// while (j > 0) {
//   if (j === 20) {
//     console.log('LOOPING KEDUA' + '\n' + j + ' - ' + 'I will become fullstack developer')
//   } else {
//     console.log(j + ' - ' + 'I will become fullstack developer')
//   }
//   j -= 2;
// }
//
//
// SOAL NO.2
// for (i = 0; i <= 20; i++) {
//   if (i === 0) {
//     console.log('LOOPING PERTAMA')
//   } else {
//     console.log(i + ' - ' + 'I love coding')
//   }
// }
//
// for (j=20; j > 0 ; j--) {
//   if (j === 20) {
//     console.log('LOOPING KEDUA' + '\n' + j + ' - ' + 'I will become fullstack developer')
//   } else {
//     console.log(j + ' - ' + 'I will become fullstack developer');
//   }
// }
//

// SOAL NO. 3
for (i=1 ; i<=100 ; i++) {
  if (i % 2 == 0) {
    console.log(i + ': GENAP')
  } else {
    console.log(i + ': GANJIL');
  }
}

for (i=1 ; i<=100; i+=2) {
  if (i % 3 == 0){
    console.log(i + ' KELIPATAN 3');
  }
}

for (i=1 ; i<=100 ; i += 5) {
  if (i % 6 == 0){
    console.log(i + ' KELIPATAN 6');
  }
}

for (i=1 ; i <=100 ; i += 9) {
  if (i % 10 == 0) {
    console.log(i + ' KELIPATAN 10');
  }
}
