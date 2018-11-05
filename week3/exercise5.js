// Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome,
// dan false jika bukan. Kata palindrome adalah sebuah kata
// yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.


function palindrome(kata) {
  // you can only write your code here!
  var string = ''
  var abc = '123';

  // balik kata
  for (i = kata.length-1; i >= 0 ; i--){
    string += kata[i]
  }

  var palindrom = (string === kata) ? true : false;
  return palindrom
}

// function palindrome(kata) {
//   // you can only write your code here!
//   var string = '';
//   var i = kata.length-1
//   while (i>=0){
//       string = string + kata[i]
//       i--
//   }
//   // var palindrom = (string === kata) ? true : false;
//   // return palindrom
// }

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
