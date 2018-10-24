// SOAL 1
var rows1 = 5;

for (i=0 ; i<rows1 ; i++){
  console.log('*');
}

// SOAL 2

var rows2 = 5; //sisi
var bintang1 = ''; // string

for (i=0 ; i < rows2 ; i++){
  bintang1 = '';
  for (j=0 ; j < rows2  ; j++ ){
    bintang1 += '*'
  }
  console.log(bintang1);
}

// SOAL 3
var count = 5;
var bintang ='';
for(i=0 ; i<count ; i++){
  bintang = '';
  for(j=0 ; j<=i ; j++){
    bintang = bintang + '*'
  }
  console.log(bintang)
}
