function totalDigitRekursif(arr){
  arr = String(arr)
  if (arr.length === 0){
    return 0
  } else {
    let depan = arr[0];
    arr = arr.slice(1)
    return Number(depan) + totalDigitRekursif(arr);
  }
}


console.log(totalDigitRekursif(512)) //8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
