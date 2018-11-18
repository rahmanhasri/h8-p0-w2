function highestScore (students) {
  // Code disini
  let output = {}
  for (let i = 0 ; i < students.length ; i++){
    if (output[students[i].class] === undefined){
      var obj = {}
      obj = {
        name : students[i].name,
        score : students[i].score,
      }
      output[students[i].class] = obj
    } else if (output[students[i].class].score < students[i].score) {
      output[students[i].class].name = students[i].name
      output[students[i].class].score = students[i].score
    }
  }
  return output
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
