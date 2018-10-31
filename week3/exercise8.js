function pasanganTerbesar(num) {
  // you can only write your code here!
  num = String(num);
  let tampung = 0;
  for (i=0;i<num.length-1;i++){
    if (tampung < num[i] + num[i+1])
      tampung = num[i] + num[i+1]
  }
  return tampung
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
