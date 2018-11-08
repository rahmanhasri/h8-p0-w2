function highestScore (students) {
  // Code disini
  var output = {}
  var hiscore = {}
  for (let i = 0; i<students.length; i++){
    if (output['class'] === undefined){
      output[students[i]['class']] = {}
      output[students[i]['class']]['name'] = ''
      output[students[i]['class']]['score'] = 0
    }
    if (hiscore[i])
    let kelas = output;
    let kelasM = students[i]['class']
    // for (let j = 0; j<output)
    // if ( output === students[i]['class']  && kelas['score'] < students[i]['score'] ){
    //   console.log(masuk);
    // }
    console.log(kelas ,kelasM);
  }
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
