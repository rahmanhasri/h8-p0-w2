function sorting(arrNumber) {
  // code di sini
  let done = true;
  while (done) {
    done = false;
    for (let i = 0; i<arrNumber.length-1; i++){
      if (arrNumber[i] > arrNumber[i+1]){
        let sort = arrNumber[i];
        arrNumber[i] = arrNumber[i+1];
        arrNumber[i+1] = sort
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  let max = 0;
  let obj = {};
  if (arrNumber.length === 0) {
    return '';
  } else {
    for (let i = 0; i < arrNumber.length; i++) {
      if (obj[arrNumber[i]] === undefined) {
        obj[arrNumber[i]] = 1;
      } else obj[arrNumber[i]] += 1;
      if (arrNumber[i] > max) {
        max = arrNumber[i]
      }
    }
    // console.log(obj);
    return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${obj[max]} kali`
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
//
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
//
console.log(mostFrequentLargestNumbers([]));
//''
