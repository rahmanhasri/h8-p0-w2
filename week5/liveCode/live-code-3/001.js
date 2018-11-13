// Competencies: Pseudocode / Algoritma problem solving
/*
==============
Merry Christmas!
==============
Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah function merryChristmas yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa
Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan
Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2
2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)

RULES
-----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/
//PSEUDOCODE
/*
STORE `counter` with value 0
STORE `hadiah` with value 0
FOR `i` is 0, `i` is less than array length of `path`, ADD `i` plus by 1 every loop
  IF `path` with index `i` is equals to 'Pit Hitam' OR `path` with index `i` is equals to 'Nenek Penyihir'
    THEN ADD `counter` plus by 1
  ELSE IF `path` with index `i` is equals to 'Hadiah'
    THEN ADD `hadiah` plus by 1
  END CONDITION
  IF `counter` is more than 2
    THEN RETURN 'Be brave, next time! But it's okay, you got' , value of  `hadiah` , 'present(s)'
    END PROGRAM
END FOR
RETURN 'Yeaaayyy, you got all present:' value of `hadiah`
END PROGRAM
*/


function merryChristmas(path) {
  //your code here
  let counter = 0
  let hadiah = 0
  for (let i = 0 ; i < path.length ;i++){
    if (path[i] === 'Pit Hitam' || path[i] === 'Nenek Penyihir'){
      counter++
    } else if (path[i] === 'Hadiah'){
      hadiah++
    }

    if (counter > 2){
      return `Be brave, next time! But it's okay, you got ${hadiah} present(s)`
    }
  }
  return `Yeaaayyy, you got all present: ${hadiah}`
}

console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']));
console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']));
