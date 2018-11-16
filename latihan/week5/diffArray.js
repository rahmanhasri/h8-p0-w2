// Soal dari freecodecamp
function diffArray(arr1, arr2) {
  var newArr = []
  let joinArr = [...arr1,...arr2]
  for (let i = 0 ; i<joinArr.length ; i++){
    let counter = 0
    for (let j = 0 ; j<joinArr.length ; j++){
      if (i!==j && joinArr[i] == joinArr[j]){
        counter++
      }
    }
    if (counter === 0){
      newArr.push(joinArr[i])
    }
  }
  return newArr
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // return ["pink wool"]
