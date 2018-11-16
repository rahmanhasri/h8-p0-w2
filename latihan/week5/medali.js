function medaliAsianGames(data) {
  // [['namanegara', 'medali'],[],[],[]....]
  // {namaNegara : {negara: 'namaNegara', emas : , perak : , perunggu : }, namaNegara : {},namaNegara : {} }
  let output = {};
  for (let i = 0; i < data.length; i++) {
    if (output[data[i][0]] === undefined) {
      output[data[i][0]] = {
        negara: data[i][0],
        emas: 0,
        perak: 0,
        perunggu: 0
      };
      if (output[data[i][0]].hasOwnProperty(data[i][1])) {
        output[data[i][0]][data[i][1]]++;
      }
      // console.log(output[data[i][0]][.hasOwnProperty(data[i][1])])
    } else {
      // if (output[data[i][0]].hasOwnProperty(data[i][1]))
      output[data[i][0]][data[i][1]]++;
    }
  }
  return output
}

console.log(
  medaliAsianGames([
    ["Indonesia", "emas"],
    ["India", "perak"],
    ["Korea Selatan", "emas"],
    ["India", "perak"],
    ["India", "emas"],
    ["Indonesia", "perak"],
    ["Indonesia", "emas"]
  ])
);

/*

{ Indonesia: { negara: 'Indonesia', emas: 2, perak: 1, perunggu: 0 },
  India: { negara: 'India', emas: 1, perak: 2, perunggu: 0 },  'Korea Selatan': { negara: 'Korea Selatan', emas: 1, perak: 0, perunggu: 0 } }

*/
