function sumTo(n){
  if (n === 1){
    return 1
  } else {
    return n + sumTo(n-1)
  }
}

// console.log(sumTo(100))

function factorial(n){
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

// console.log(factorial(5));

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  //fib(3) + fib(2)
  //fib(2) + 1 ~~~ + 1 + 0
  //  1 + 0 + 1 + 1 + 0
}

console.log(fib(4));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// function printList(list) {
//
//   console.log((list.value)); // output the current item
//
//   if (list.next) {
//     printList(list.next); // do the same for the rest of the list
//   }
//
// }
//
// printList(list);
