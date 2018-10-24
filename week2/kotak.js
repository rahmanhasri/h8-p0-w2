// KOTAK KOSONG
var baris = 5;
var kolom = 5;
var bintang = '';

for (i = 0; i < baris; i++) {
  bintang = '';
  for (j = 0; j < kolom; j++) {
    if (i === 0 || i === baris - 1 || j === 0 || j === kolom - 1) {
      bintang += '*';
    } else bintang += ' ';
  }
  console.log(bintang)
}
