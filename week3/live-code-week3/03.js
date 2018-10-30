/**
 Membership ID

 Active8 gym memiliki sistem membership untuk setiap pelanggan di haruskan mengisi nama, tanggal lahir, dan diberikan nomor antrian
 dari ketiga data tersebut maka akan dibuatkan ID Member dengan format sebagai berikut

 Huruf Pertama Pelanggan + Dua Digit Tanggal Lahir  + Dua Digit Bulan Lahir + Dua Digit akhir tahun lahir + tiga digit nomor antrian

 Buatlah sebuah function yang menghasilkan id member tersebut



 Contoh 1:
 -----------------------------
 genetareMemberID("Alfian", "22091999", 121)
 output
 ---
 a220999121

 Contoh 2:
 -----------------------------
 genetareMemberID("budi", "09022000", 1)
 output
 ---
 b090200001

 */

 function generateMemberID(nama, tgl, antri) {
   var tanggal = tgl[0] + tgl[1] + tgl[2] + tgl[3] + tgl[6] + tgl [7]
   if (antri < 10){
     antri = '00' + antri
   } else if (antri <100){
     antri = '0' + antri
   }
   return nama[0].toLowerCase() + tanggal + antri
 }

let alfian = generateMemberID("Alfian", "22091999", 121);
console.log(alfian);
let budi = generateMemberID("budi", "09022000", 1);
console.log(budi);
