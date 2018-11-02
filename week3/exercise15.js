function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  var cariHuruf = animals[0][0];
  var tampung = [];
  var newAnimals = [];

  // animals = [anoa, ayam, cacing, kancil,kuda]

  for (i = 0; i < animals.length; i++) {
    if (animals[i][0] == cariHuruf) {
      tampung.push(animals[i])
    } else {
      newAnimals.push(tampung);
      tampung = [];
      cariHuruf = animals[i][0];
      tampung.push(animals[i])
    }
  }
  newAnimals.push(tampung)
  return newAnimals
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

// Sorting array animals
// Deklarasi cariHuruf pertama pada animals ke i 0 0
// Deklarasi array tampung
// Deklarasi array newAnimals
// Looping saat i 0 kurang dari panjang array animals, i ditambah 1 setiap looping
//   Jika animals ke i 0 sama dengan nilai cariHuruf
//     Maka input push animals ke i pada array tampung
//   Jika Bukan sama dengan nilai cariHuruf (karena sudah disort nilai cariHuruf
//   --sudah mulai berganti setelahnya)
//     Maka input nilai tampung pada array newAnimals
//     Reset deklarasi array tampung
//     Masukkan nilai value animals ke i 0 pada var cariHuruf
//     Input push animals ke i pada array tampung
// Setelah Looping selesai input push nilai tampung pada array newAnimals
// return newAnimals
