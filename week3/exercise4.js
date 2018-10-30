//contoh input
var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
//output
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

function dataHandling(input) {
  input.splice(0, 0, 'Pria', 'SMA Internasional Metro');
  console.log(input);
  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  console.log(input);
  var tanggal = input[3].split('/');

  switch (tanggal[1]) {
    case '01':
      console.log('Januari');
      break;
    case '02':
      console.log('Februari');
      break;
    case '03':
      console.log('Maret');
      break;
    case '04':
      console.log('April');
      break;
    case '05':
      console.log('Mei');
      break;
    case '06':
      console.log('Juni');
      break;
    case '07':
      console.log('Juli');
      break;
    case '08':
      console.log('Agustus');
      break;
    case '09':
      console.log('September');
      break;
    case '10':
      console.log('Oktober');
      break;
    case '11':
      console.log('November');
      break;
    case '12':
      console.log('Desember');
      break;
  }
  tanggal.sort(function(a,b){return b-a});
  console.log(tanggal);
  var strip = input[3].split('/').join('-');
  console.log(strip);
  var limit15 = input[1].slice(0,14);
  console.log(limit15);

}

dataHandling(arr);
