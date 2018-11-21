/**
  Diberikan sebuah function bernama findRowPrime
  Function tersebut akan menerima sebuah parameter number.
  Function akan me-return deret prima ke berapa parameter tersebut (asumsi input
  parameter pasti bilangan prima)

  RULES
  -----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

**/

// PSEUDOCODE
/*
STORE `arrPrima` with empty array
STORE `prima` with value 2 (karena angka prima dimulai dari angka)
STORE `loop` with value boolean true
WHILE `loop` equals to true
  STORE `counter` with value 0
  FOR `i` is 1 , 1 is less than equals to `prima` , ADD `i` plus by 1 every loop
    IF `prima` modulus `i` is equals to 0
      THEN ADD `counter` plus by 1
  END FOR
  IF `counter` is equals to 2
    THEN ADD value of `prima` to array of `arrPrima`
  IF `arrPrima` with last index equals to `n`
    THEN SET `loop` to false, END PROGRAM
  ELSE ADD `prima` plus by 1
*/

function findRowPrime(n){
  //write your code here

  let arrPrima = []
  let prima = 2
  let loop = true
  while (loop === true){
    let counter = 0
    for (let i = 1 ; i<=prima ; i++){
      if (prima % i === 0){
        counter++
      }
    }

    if (counter === 2){
      arrPrima.push(prima)
    }
    if (arrPrima[arrPrima.length -1] === n){
      loop = false
    } else {
      prima++
    }
  }

  // console.log(arrPrima)
  return arrPrima.length
}

console.log(findRowPrime(7)); //4
console.log(findRowPrime(229)); //50
console.log(findRowPrime(37)); //12
