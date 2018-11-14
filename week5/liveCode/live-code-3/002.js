/**

  Diberikan sebuah function sumThree dimana function ini menerima input parameter berupa
  array multidimensi.
  Function ini akan mengembalikan nilai yang menambahkan angka yang memiliki 3 digit.

  RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARANG MENGGUNAKAN built in function .map, .filter, .reduce
  - DILARANG MENGGUNAKAN REGEX

**/

/* PSEUDOCODE
STORE `total` with value 0
FOR `i` is 0, `i` is less than length array of `params`, ADD `i` plus by 1 every loop
  FOR `j` is 0, `j` is less than length array of `params` with index `i` , ADD `j` plus by 1 every loop
    IF value of `params` at index `i` with index `j` is more than 99 AND value of `params` at index `i` with index `j` is less than 1000
      THEN ADD `total` by value of `params` at index `i` with index `j`
RETURN `total`
END PROGRAM

*/
function sumThree(params) {
  //your code here;
  let total = 0
  for (let i = 0 ; i<params.length ; i++){
    for (let j = 0; j<params[i].length ; j++){
      if (params[i][j] > 99 && params[i][j] < 1000){
        total += Number(params[i][j])
      }
    }
  }
  return total
}

console.log(sumThree([ ['a', 12, 'c', 342 ], ['fox', 4000, 201, true] ])); //543
