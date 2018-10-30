/**
 Buatlah sebuah function drawPattern yang menerima 1 parameter berupa angka
 Angka tersebut mewakili panjang dan lebar pattern yang akan dibuat
 pada setiap baris ganjil maka kolom genapnya akan dicetak pola `/`
 pada setiap baris genap maka kolom ganjilnya dicetak pola '\'

 contoh 1:
 ----------------------------
 drawPattern(3)

 Output
 ---
  /
 \ \
  /

 contoh 2:
 ----------------------------
 drawPattern(2)
 /
\

 */


//Put your code here


//Test case
//drawPattern(5)
/*
Output:
---
 / /
\ \ \
 / /
\ \ \
 / /
*/

//drawPattern(6)
/*
Output:
---
 / / /
\ \ \
 / /
\ \ \
 / / /
\ \ \
*/

//drawPattern(7)
/*
Output:
---
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
\ \ \ \
 / / /
*/


drawPattern = (n) => {
  for (i = 1; i <= n; i++) {
    var hasil = '';
    for (j = 1; j <= n; j++) {
      if (i%2 === 1 && j%2 === 0){
        // ini baris ganjil
        hasil += '/'
      } else if (i%2 === 0 && j%2 === 1) {
        // ini baris genap
        hasil += '\\'
      } else hasil += ' '
    }
  console.log(hasil)
}
}

console.log(drawPattern(7))
