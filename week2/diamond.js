// SEGITIGA ALIGN KANAN
// var count = 5;
// var bintang ='';
// for(i=count ; i>0 ; i--){
//   bintang = '';
//   for(j=0 ; j<count ; j++){
//     if (j<i-1) {
//         bintang += ' '
//     } else bintang += '*'
//   }
//   console.log(bintang)
// }

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

// Segitiga Kebalik
// var n = 5;
// var lebar = 2*n-1;
// var bintang ='';
//
// for(i=0 ; i<n ; i++){
//   bintang = '';
//   for(j=lebar ; j>0 ; j--){
//     if (j<i+1 || j>lebar-i) {
//       bintang += ' '
//     } else bintang += '*'
//   }
//   console.log(bintang)
// }

var n = 5*2;
var mid = 5;
var lebar = n-1;
var bintang ='';

for(i=0 ; i<n ; i++){
  bintang = '';
  for(j=lebar ; j>0 ; j--){
    if (j>i+mid /*|| j<i-n/2+1*/|| j<i-mid+1 || i<mid-j || i>lebar-j+mid) {
        bintang += ' '
    } else bintang += '*'
  }
  console.log(bintang)
}
