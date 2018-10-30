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
