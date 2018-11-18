function rekursif1(num) {
  if (num === 1) { // the base of recursion,
    return num
  } else return num * rekursif1(num - 1) // the recursive step
}

// console.log(rekursif1(5))

function tambahTerus(num) {
  if (num === 1) { // the base of recursion,
    return num
  } else return num + tambahTerus(num - 1) // the recursive step
}

// console.log(tambahTerus(10))



function tambahTerus(num) {
  while (num > 9) {
    str = String(num)
    num = 0
    for (let i = 0; i < str.length; i++) {
      num += Number(str[i])
    }
  }
  return num
}

// console.log(tambahTerus(418));

function tambahTerusRec(num) {
  if (num < 10) {
    return num
  } else {
    var numStr = String(num)
    num = 0;
    for (let i = 0; i < numStr.length; i++) {
      num += Number(num[i])
    }
    return tambahTerusRec(num)
  }
}

function digitRec(num) {
  let numStr = String(num)
  num = 0;
  for (let i = 0; i < numStr.length; i++) {
    num += Number(numStr[i])
  }
  return num
}

function tambahTerusRec(num) {
  if (num < 10) {
    return num
  } else {
    return tambahTerus(digitRec(num))
  }
}

// console.log(tambahTerus(408));

// function kaliFunction(num){
//   var total = 1;
//   for (let i =0; i<String(num).length ;i++){
//     total *= String(num)[i]
//   }
//   return total
// }

function kaliFunction(num){
  var numStr = String(num);
  if (!num){
    return 1
  } else {
    return numStr[0] * kaliFunction(numStr.slice(1))
  }
}

console.log(kaliFunction(1234));

// function digiKaliRekursif(num){
//   if (num < 10){
//     return num
//   } else {
//     return digiKaliRekursif(kaliFunction(num))
//   }
// }
// console.log(digiKaliRekursif(5231));
