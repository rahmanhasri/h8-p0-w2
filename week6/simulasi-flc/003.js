/*
Array Filter 🐼

Array filter adalah sebuah function yang menerima 2 parameter
Parameter pertama merupakan sebuah array of number dan parameter kedua berupa perintah filter.

Function ini memiliki tiga jenis perintah filter yang bisa digunakan
  - ganjil
    Akan mengembalikan array dengan isi angka-angka ganjil saja.
  - genap
    Akan mengembalikan array dengan isi angka-angka genap saja.
  - kelipatan(angka)
    Bentuk perintahnya disini merupakan string, dan akan diikuti dengan angka
      Contoh perintah:
        kelipatan3 => akan mereturn array dengan isi angka yang merupakan kelipatan 3 saja
        kelipatan4 => akan mereturn array dengan isi angka yang merupakan kelipatan 4 saja
        kelipatan10 => akan mereturn array dengan isi angka yang merupakan kelipatan 10 saja
  - prima
    Akan mengembalikan array dengan isi angka-angka prima saja

Happy coding!🚀

RULES:
  - dilarang menggunakan built in function .filter(), .reduce() dan .map()
  - dilarang menggunakan regex

*/

function ganjilGenap (numbers, command){
  let output = []
  for (let i = 0 ; i<numbers.length ; i++){
    if (command === 'genap'){
      if (numbers[i] % 2 == 0){
        output.push(numbers[i])
      }
    } else {
      if (numbers[i] % 2 !== 0){
        output.push(numbers[i])
      }
    }
  }
  return output
}

function kelipatanX (numbers, x){
  let output = []
  for (let i = 0 ; i<numbers.length ; i++){
    if (numbers[i] % x === 0){
      output.push(numbers[i])
    }
  }
  return output
}

function primaX(numbers){
  let output = []
  for (let i = 0 ; i<numbers.length ; i++){
    let counter = 0
    for (let j = 1 ; j<= numbers[i] ; j++){
      if (numbers[i] % j === 0){
        counter ++
      }
    }
    if (counter === 2){
      output.push(numbers[i])
    }
  }
  return output
}

function arrayFilter (numbers, command) {
  //your code here
  let kelipatan = ''
  // console.log(command[command.length-1] % 2)
  for (let i = 0 ; i<command.length ; i++){
    if (command[command.length-1-i] % 2 || command[command.length-1-i] % 2 == 0){
      kelipatan = command[command.length-1-i] + kelipatan
    } else break;
  }
  if (command === 'ganjil' || command === 'genap'){
    let output = ganjilGenap(numbers, command)
    return output
  } else if (kelipatan > 0){
    kelipatan = Number(kelipatan)
    let output = kelipatanX(numbers, kelipatan)
    return output
  } else if (command === 'prima'){
    let output = primaX(numbers)
    return output
  } else if (numbers.length === 0 || command === '' || command === undefined){
    return 'Invalid Input'
  }
  // console.log(kelipatan > 0)
}

console.log(arrayFilter([ 1, 2, 3, 4, 5, 6, 7, 8 ],  'ganjil')); // [ 1, 3, 5, 7 ]
console.log(arrayFilter([ 123, 770, 322, 619, 777, 666, 400 ], 'ganjil')); // [ 123, 619, 777 ]
console.log(arrayFilter([ 1, 2, 3, 4, 5, 6, 7, 8 ], 'genap')); // [ 2, 4, 6, 8 ]
console.log(arrayFilter([ 123, 770, 322, 619, 777, 666, 400 ], 'genap')); // [ 770, 322, 666, 400 ]
console.log(arrayFilter([ 6, 9, 20, 60, 90, 33, 336, 370 ], 'kelipatan3')); // [ 6, 9, 60, 90, 33, 336]
console.log(arrayFilter([ 9, 10, 100, 1001, 120, 555 ],  'kelipatan10')); // [ 10, 100, 120 ]
console.log(arrayFilter([2, 7, 5, 10, 11, 12], 'prima')); //[ 2, 7, 5, 11 ]
