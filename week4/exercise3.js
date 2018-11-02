function cariMedian(arr) {
  // you can only write your code here!
  var midGenap = arr.length/2-1;
  if (arr.length % 2 === 0){
    return (arr[midGenap] + arr[midGenap+1]) / 2
  } else {
    return arr[(arr.length-1)/2]
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
