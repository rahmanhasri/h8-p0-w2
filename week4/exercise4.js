function cariModus(arr) {
  // you can only write your code here!
  var modus;
  var max = 0;
  for (let i = 0; i<arr.length;i++){
    var counter = 0;
    for (let j = i;j<arr.length; j++){
      if (i===j){
        // do nothing
      } else if (arr[i]===arr[j]){
        counter++
        if (counter > max){
          modus = arr[i];
          max = counter
        }
      }
    }
  }
  if (max === arr.length-1 || max === 0){
    return -1
  }
  return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([1, 1, 1, 3, 3, 1])) // 1
