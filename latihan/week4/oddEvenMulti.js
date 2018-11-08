function oddEvenMulti(num){
  var total = 1;
  for (let i = 0;i<num.length;i++){
    for (let j =0; j<num[i].length; j++){
      total = total * num[i][j]
    }
  }
  var hasil = (total % 2 === 0) ? 'genap' : 'ganjil';
  return hasil
}

console.log(oddEvenMulti([
  [1,2,3],
  [4,2],
  [1,2,3]
]))
