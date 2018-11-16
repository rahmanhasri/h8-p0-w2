function graduates(students) {
  // Code disini
  let output = {}
  let min = 75
  for (let i = 0 ; i< students.length ; i++){
    let obj = {}
    if (output[students[i].class] === undefined && students[i].score >= min){
      output[students[i].class] = {
        jumlahLulus : 0,
        lulus: [],
        rataKelas: 0,
      }
      let kelas = output[students[i].class]
      let obj = {
        name : students[i].name,
        score : students[i].score,
      }
      kelas.lulus.push(obj)
    } else {
      if (output.hasOwnProperty(students[i].class) && students[i].score >= 75){
        let kelas = output[students[i].class]
        let obj = {
          name : students[i].name,
          score : students[i].score,
        }
        kelas.lulus.push(obj)
      }
    }
  }
  for (let kelas in output){
    output[kelas].jumlahLulus = output[kelas].lulus.length
    let totalKelas = 0
    for (let i = 0 ; i<students.length ;i++){
      if (students[i].class === kelas){
        output[kelas].rataKelas += students[i].score
        totalKelas++
      }
    }
    output[kelas].rataKelas = output[kelas].rataKelas/totalKelas
    console.log(output[kelas])
  }
  // console.log(output)
}

console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },

    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },

    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },

    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);
//
// var output = {
//   foxes: {
//     jmlLulus: 1,
//     lulus: [{ name: "Dimitri", score: 90 }],
//     rataKelas: 82
//   },
//
//   wolves: {
//     jmlLulus: 2,
//     lulus: [{ name: "Alexei", score: 85 }, { name: "Anastasia", score: 78 }],
//     rataKelas: 81.5
//   }
// };
