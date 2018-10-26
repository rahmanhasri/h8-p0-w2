var n = 5;
var bintang = '';

//bintang kotak
for (i = 0; i < n; i++) {
  bintang = '';
  for (j = 0; j < n; j++) {
    bintang += '*'
  }
  console.log(bintang)
}

//bintang segitiga atas hadep kanan /w no spasi
for (i = 0; i < n; i++) {
  bintang = '';
  for (j = 0; j <= i; j++) {
    bintang += '*'
  }
  console.log(bintang)
}

//bintang segitiga bawah hadep kiri (print bintang makin bawh diganti dengan spasi)
// for (i=0; i < n; i++){
//   bintang = '';
//   for (j=0; j<n; j++){
//     if (j>=i){
//       bintang += '*'
//     } else bintang += ' '
//   }
//   console.log(bintang);
// }

// bintang segitiga bawah hadep kanan
// for (i=0; i < n; i++){
//   bintang ='';
//   for (j=n; j>=0; j--){
//     if (j>i){
//       bintang += '*'
//     } else bintang += ' '
//   }
//   console.log(bintang)
// }

// bintang segitiga atas hadep kiri
// for (i=0; i < n; i++){
//   bintang = '';
//   for (j=n; j>=0; j--){
//     if (j>i){
//       bintang += ' '
//     } else bintang += '*'
//   }
//   console.log(bintang);
// }

// segitiga kaki hadep bawah
var tinggi = 5;
var lebar = tinggi * 2 - 1
var mid = 5;
//
// for (i = 0; i < n; i++) {
//   bintang = ''
//   for (j = lebar; j > 0; j--) {
//     // if (j<i || j>lebar-i-1){
//     if (j<i+1 || j>lebar-i) {
//       bintang += ' '
//     } else bintang += '*'
//   }
//   console.log(bintang)
// }

// segitiga kaki hadep atas
// for (i = 0; i < n; i++) {
//   bintang = ''
//   for (j = lebar; j > 0; j--) {
//     if (i < j - mid || j < mid - i) {
//       bintang += ' '
//     } else bintang += '*'
//   }
//   console.log(bintang)
// }

// Diamond

for (i = 1; i <= 9; i++) {
  bintang = ''
  for (j = 1; j <= 9; j++) {
    if (j <= Math.abs(mid - i) || j >= mid * 2 - Math.abs(mid - i)) {
      bintang += ' '
    } else bintang += '*'
  }
  console.log(bintang);
}

// Segitiga Kaki hadep kiri
for (i = 1; i <= n * 2 - 1; i++) {
  bintang = '';
  for (j = 1; j <= 5; j++) {
    if (j <= Math.abs(mid - i)) {
      bintang += ' '
    } else bintang += '*'
  }
  console.log(bintang)
}

// Segitiga Kaki hadep kanan
for (i = 1; i <= n * 2 - 1; i++) {
  bintang = '';
  for (j = 1; j <= 5; j++) {
    if (j > n - Math.abs(mid - i)) {
      bintang += ' '
    } else bintang += '*'
  }
  console.log(bintang)
}
