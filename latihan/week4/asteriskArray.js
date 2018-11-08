function asterisk(num){
  var arr = [];

  for (let i = 0; i<num; i++){
    var isi = '';
    for (let j =0; j<= i; j++){
      isi = isi + '*'
    }
    arr.push(isi)
  }
  return arr
}

// console.log(asterisk(3));
// console.log(asterisk(5));
console.log();

function asteriskArr(num) {
  var arr = [];

  for (let i = 0; i<num; i++){
    var isi = [];
    for (let j = 0; j <=i; j++){
      isi.push('*')
    }
    arr.push(isi)
  }
  return arr
}

console.log(asteriskArr(5));
