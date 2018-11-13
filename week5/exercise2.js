function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let output = []
  for (let i = 0 ; i < arrPenumpang.length ; i++){

    let obj = {}
    obj.penumpang = arrPenumpang[i][0]
    obj.naikDari = arrPenumpang[i][1]
    obj.tujuan = arrPenumpang[i][2]
    for (let j = 0; j<rute.length ; j++){
      if (rute[j] === obj.naikDari){
        var index = j
      } else if (rute[j] === obj.tujuan){
        var index2 = j
      }
    }
    obj.bayar = (index2 - index) * 2000
    output[i] = obj
  }
  return output
}

//TEST CASE

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
