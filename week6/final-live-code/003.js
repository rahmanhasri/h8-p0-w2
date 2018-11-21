/*
========================================
Array Mastery: The Most Favorite Actor
========================================

Function mostFavoriteActor adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah value di dalam array tersebut.

Function akan mereturn nilai berupa string dengan pola:
=> actor(jumlahVoting), actor(jumlahVoting), actor(jumlahVoting).
Kemudian, setiap actor yang ditampilkan harus berurut dari jumlah voting terbesar ke terkecil
[CONTOH]
input: ['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Minho']));
output: 'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

RULES:
 - DILARANG menggunakan function ES6 SET
 - DILARANG menggunakan built in function .map, .filter dan .reduce
*/

function mostFavoriteActor(arr){
	// Code hanya disini

  if (arr.length === 0){
    return 'Tidak ada yang divoting'
  }
  let arrayUnik = []
  for (let i = 0 ; i < arr.length ; i++){
    let isDuplicate = false
    for (let j = 0 ; j < arrayUnik.length ; j++){
      if (arr[i].toLowerCase() === arrayUnik[j].toLowerCase()){
        isDuplicate = true
        break;
      }
    }

    if (!isDuplicate){
      arrayUnik.push(arr[i])
    }
  }

  let voting = []
  for (let i = 0 ; i <arrayUnik.length ; i++){
    voting[i] = 0
  }

  // memberikan nilai voting
  for (let i = 0 ; i<arr.length ; i++){
    let index;
    for (let j = 0 ; j<arrayUnik.length ; j++){
      if (arr[i].toLowerCase() === arrayUnik[j].toLowerCase()){
        index = j
        voting[j]++
        break;
      }
    }
  }

  // sorting berdasarkan terbesar ke terkecil
  let cekSort = true
  while (cekSort){
    cekSort = false
    for (let i = 0 ; i<voting.length-1 ; i ++){
      if (voting[i] < voting[i+1]){
        cekSort = true
        let tmp = voting[i]
        voting[i] = voting[i+1]
        voting[i+1] = tmp
        tmp = arrayUnik[i]
        arrayUnik[i] = arrayUnik[i+1]
        arrayUnik[i+1] = tmp
      }
    }
  }

  for (let i = 0 ; i<voting.length ; i++){
    voting[i] = ' ' + arrayUnik[i] + '(' + voting[i] + ')'
  }

  return String(voting)
}

console.log(mostFavoriteActor(['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Min ho']));
//'Lee Min Ho(4), Lee Kwang So(2) , Rain(1)'

console.log(mostFavoriteActor(['Cha Tae Hyun', 'Ha Jung Wo', 'Cha Tae Hyun', 'Ju Ji Hoon']));
// 'Cha Tae Hyun(2), Ha Jung Wo(1), Ju Ji Hoon(1)'
