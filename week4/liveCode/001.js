/**
 Hapus Angka
 -------------------------
 Diberikan sebuah function hapusAngka dimana function tersebut menerima input parameter berupa string.
 function tersebut akan membuang seluruh karakter berupa angka yang terdapat pada kata tersebut

 contoh:

 input: 'hacktiv8'
 output: 'hacktiv'

 input: '17 Agustus 1945'
 output: 'Agustus'

 RULES:
  - WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
  - DILARANG MENGGUNAKAN method .split()
 */

//PSUEDOCODE
/*
STORE `sentence` with any value of set of string
STORE `string` with value ''
STORE `i` with value of 0
WHILE `i` is less than every character length of `sentence`
  IF `sentence` value with index `i` is less than 10 OR `sentence value with index `i` has same value as ' '
    DO NOTHING
  ELSE SET `string` is `string` plus `sentence` value with index `i`
  ADD `i` by 1
RETURN `string`
*/

 function hapusAngka(sentence) {
   // your code here
   var string = ''
   var i = 0;
   while(i<sentence.length) {
     if (sentence[i] < 10 || sentence[i] === ' '){
       // do nothing
     } else string = string + sentence[i]
     i++
   }
   return string
 }

 console.log(hapusAngka('hacktiv8')); //hacktiv
 console.log(hapusAngka('17 Agustus 1945')); //Agustus
 console.log(hapusAngka('')); //''
