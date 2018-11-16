function pertandingan(array) {
//[{nama,match,area},{},{},{},{}]
//[{ match'' , area{} },{match '',area{}}]

  let output = []
  for (let i = 0 ; i<array.length ; i++){
    let obj = {
      match : '',
      area : {},
    }
    let isDefined = false
    for (let j = 0 ; j<output.length ; j++){
      if (output[j].match === array[i].match){
        isDefined = true
        if (!output[j].area[array[i].area]){
          output[j].area[array[i].area] = array[i].nama + ' |'
        } else {
          output[j].area[array[i].area] += array[i].nama + ' |'
        }
      }
    }
    if (isDefined === false){
      obj.match = array[i].match;
      let string = array[i].nama
      obj.area[array[i].area] = string + ' |'
      output.push(obj)
    }
  }
  return output
}

var input = [
  {
    nama: "Alfa",
    match: "indonesia vs philipin",
    area: "tribun barat"
  },

  {
    nama: "Beta",
    match: "indonesia vs malaysia",
    area: "tribun barat"
  },

  {
    nama: "Charlie",
    match: "indonesia vs malaysia",
    area: "tribun timur"
  },

  {
    nama: "Delta",
    match: "indonesia vs philipin",
    area: "tribun timur"
  },

  {
    nama: "Enigma",
    match: "indonesia vs philipin",
    area: "tribun barat"
  }
];

console.log(pertandingan(input));

/** output
  [
    {
        match: 'indonesia vs philipin',
        area: {
          'tribun barat': 'Alfa | Enigma |',
          'tribun timur': 'Delta |'
        }
    },

    {
        match: 'indonesia vs malaysia',
        area: {
          'tribun barat': 'Beta |',
          'tribun timur': 'Charlie |'
        }
    }
  ]

 */

// console.log(pertandingan(input));

// liga = {
//   "indonesia vs philipin": [
//     {
//       nama: "Alfa",
//       area: "tribun barat"
//     },
//
//     {
//       nama: "Delta",
//       area: "tribun timur"
//     },
//
//     {
//       nama: "Enigma",
//       area: "tribun barat"
//     }
//   ],
//
//   "indonesia vs malaysia": [
//     {
//       nama: "Beta",
//       area: "tribun barat"
//     },
//
//     {
//       nama: "Charlie",
//       area: "tribun timur"
//     }
//   ]
// };
