/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/


function uniqueDuplicateFinder(sentence) {
  // only code here!
  sentence = sentence.toLowerCase()
  sentence = sentence.split(' ')
  // console.log(sentence)
  let obj = {}
  obj.unique = []
  obj.duplicate = []
  if (sentence.length === 1){
    return obj
  }

  let arrayUnik = []
  for (let i = 0 ; i<sentence.length ;i++){
    let cek = true
    for (let j = 0 ; j<arrayUnik.length ; j++){
      if (sentence[i] === arrayUnik[j]){
        cek = false
      }
    }
    if (cek){
      arrayUnik.push(sentence[i])
    }
  }
  let unik = []
  let dupli = []
  for (let i = 0 ; i<arrayUnik.length ; i++){
    let counter = 0
    for (let j = 0 ; j<sentence.length ; j++){
      if (arrayUnik[i] === sentence[j]){
        counter++
      }
    }
    if (counter === 1){
      unik.push(arrayUnik[i])
    } else dupli.push(arrayUnik[i])
  }

  obj.unique = unik
  obj.duplicate = dupli
  return obj

}

console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// {
//   unique: [ 'hlloe' ],
//   duplicate: [ 'hello' ]
// }
//
console.log(uniqueDuplicateFinder('john is coding'));
// {
//   unique: [ 'john', 'is', 'coding' ],
//   duplicate: []
// }

console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// {
//   unique: [],
//   duplicate: [ 'blue', 'red', 'violet']
// }

console.log(uniqueDuplicateFinder(''));
// {
//   unique: [],
//   duplicate: []
// }
