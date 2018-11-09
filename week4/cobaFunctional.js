// LATIHAN BUILT-IN MAP
let angka = [ 1, 4, 7, 9, 13];

// console.log(angka.map( n => n + n * n)); // MEengkalkulasi arrmap

var states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


// Menyederhanakan URL dengan MAP
var url1 = 'https://example.com/'
var urlili = str => str.toLowerCase().split(' ').join('-');
function urly(str,states) {
  return states.map(state => str + urlili(state));
}

// console.log(urly(url1, states))

// LATIHAN BUILT-IN FUNCTION FILTER

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.filter((n) => n % 2 === 0)) // mengembalikan nilai arr yang sudah di FILTER genap

states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// console.log(states.filter(n => n.split(' ').length === 1));

// console.log(states.filter(n => (n.split(' ').includes('Dakota'))))

// LATIHAN BUILT-IN FUNCTION REDUCE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Mengkalkulasi dengan menghasilkan 1 output
// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}

function multiplyReduce(elements) {
  return elements.reduce( (total, n) => {return total *= n; })
}

// console.log(functionalSum(numbers));
console.log(multiplyReduce(numbers));

// COBA FOREACH
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
// console.log(imperativeLengths(states));

// FUNCTIONAL SOLUTION
function functionalLengths(elements) {
  return elements.reduce( ( lengths , element ) =>
        {
          lengths[element] = element.length;
          return lengths
        }, {});
}
console.log(functionalLengths(states));
