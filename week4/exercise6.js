function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let perhitungan = []
  for (let i = 1; i<=angka; i++){
    for (let j = 1; j<=angka; j++){
      if (i * j === angka){
        let tmp = i + '' + j;
        perhitungan.push(tmp)
      }
    }
  }

  let min = perhitungan[0].length; // 3
  for (let k = 0; k < perhitungan.length; k++){
    if (perhitungan[k].length < min){
      min = perhitungan[k].length;
    }
  }
  return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
