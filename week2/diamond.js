// SEGITIGA ALIGN KANAN
var count = 5;
var bintang ='';
for(i=count ; i>0 ; i--){
  bintang = '';
  for(j=0 ; j<count ; j++){
    if (j<i-1) {
        bintang += ' '
    } else bintang += '*'
  }
  console.log(bintang)
}

// SEGITIGA SAMA KAKI
// var tinggi = 5;
// var lebar = tinggi*2-1;
// var bintang ='';
//
// for(i=tinggi ; i>0 ; i--){
//   bintang = '';
//   for(j=0 ; j<lebar ; j++){
//     if (j<i-1 || j>lebar-i) {
//         bintang += ' '
//     } else bintang += '*'
//   }
//   console.log(bintang)
// }


// var tinggi = 9;
// var lebar = 9;
// var tengah = Math.ceil(tinggi/2);
// var bintang ='';
//
// for (i=tinggi; i > 0; i--){
//   bintang = '';
//   for (j=0; j<lebar; j++){
//     if (j<tengah || j>lebar-i){
//       bintang += ' '
//     } else bintang += '*'
//   }
//   console.log(bintang);
// }
