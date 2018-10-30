// function konversiMenit(menit) {
//   // you can only write your code here!
//   var menits = menit % 60;
//   var jam = Math.floor(menit / 60);
//   if (menits < 10) {
//     menits = '0' + menits;
//   } else {}
//   return jam + ':' + menits
// }

function konversiMenit(menit) {
  // you can only write your code here!
  var detik = menit % 60;
  var menit = Math.floor(menit / 60);
  if (detik === 0){
    return menit + ' menit'
  } else if (menit === 0){
    return detik + ' detik'
  } else return menit + ' menit ' + detik + ' detik'
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03 1 menit 3 detik
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53 53 detik
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00 2 menit
