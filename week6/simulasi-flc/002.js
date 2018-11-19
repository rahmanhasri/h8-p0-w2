/**
  Diberikan sebuah function bernama indexPrima
  Function tersebut akan menerima sebuah parameter number, kemudian menghasilkan
  angka prima ke -x (sesuai yang diinput).

  Syarat dari soal ini harus menggunakan 1 function saja.

**/

function indexPrima(n){
  //write your code here
  let angkaPrima = []
  let i = 0
  while (angkaPrima.length < n){
    i++
    let counter = 0;
    for (let j = 1 ; j<=i ; j++){
      if (i % j === 0){
        counter++
      }
    }
    if (counter === 2){
      angkaPrima.push(i)
    }
  }
  return angkaPrima[n-1]
}

console.log(indexPrima(4)); //7
console.log(indexPrima(50)); //229
console.log(indexPrima(12)); //37
