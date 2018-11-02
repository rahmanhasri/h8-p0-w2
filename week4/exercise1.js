function angkaPrima(angka) {
  // you can only write your code here!
  var i = 1; //index mulai modulus
  while (i<=angka){
    i++;
    if (angka % i === 0 && i === angka){
      return true
    } else if (angka % i === 0 && i !== angka){
      return false
    }
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
