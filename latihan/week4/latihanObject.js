var StudentMorning = ['Adi', 'Budi', 'Cici', 'Didi', 'Mahdi']
var StudentEvening = ['Adi', 'Budi', 'Cici', 'Didi', 'Dimdi', 'Yaya']

var objStudents = {}
/* for(var i=0;i<StudentMorning.length;i++){
       objStudents[StudentMorning[i]] =i
}
for(var j=0;j<StudentEvening.length;j++){
    objStudents[StudentEvening[j]]= j
    } */
var dataTerpanjang = 0
if (StudentEvening.length > StudentMorning.length)
  dataTerpanjang = StudentEvening.length
else
  dataTerpanjang = StudentMorning.length
for (var i = 0; i < dataTerpanjang; i++) {
  if (StudentEvening[i] != undefined) {
    objStudents[StudentEvening[i]] = 2
  }
  if (StudentMorning[i] != undefined) {
    objStudents[StudentMorning[i]] = 1
  }
}

console.log(Object.keys(objStudents))
