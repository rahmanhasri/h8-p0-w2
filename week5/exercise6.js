function meleeRangedGrouping (str) {
  //your code here
  if (str.length === 0){
    return []
  }
  let string = ''
  let obj = {}
  let array = []
  for (let i = 0 ; i<str.length ; i++){
    if (str[i] !== ','){
      string += str[i]
    } else {
      if (string.length > 0){
        array.push(string)
        string = ''
      }
    }
    if (i === str.length-1 && string.length > 0){
      array.push(string)
    }
  }
  // console.log(array)
  obj.ranged = []
  obj.melee = []

  for (let i = 0 ; i<array.length ; i++){
    string = ''
    for (let j = 0 ; j<array[i].length ; j++){
      if (array[i][j] !== '-'){
        string += array[i][j]
      } else if (array[i][j] === '-' && array[i][j+1] === 'R'){
        obj.ranged.push(string);
        break;
      } else if (array[i][j] === '-' && array[i][j+1] === 'M'){
        obj.melee.push(string);
        break;
      }
    }
  }
  return [obj.ranged, obj.melee]
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
