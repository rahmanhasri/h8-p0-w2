/**
  Diberikan sebuah function vendingMoonbucks yang menerima dua parameter:
  - list pesanan bertipe array
  - uang bertipe number

  Function akan me-return sebuah array of object yang berisi beverages yang berhasil
  terbeli, uang kembalian dan keterangan (lihat test case/driver code untuk lebih detail)

  Pada function tersebut telah disediakan list menu beverages dan harga.
  Asumsi vendingMoonbucks menyediakan uang kembalian dan uang kembalian yang tersedia
  hanya 50000.

**/
function vendingMoonbucks(pesanan, uang) {
  var menu = {
    'dark-mocha': 65000,
    'java-chip': 55000,
    'asian-dolce': 50000
  }
  var uangKembalianTersedia = 50000

  let output = {
    beverages: [],
    change : uang,
    keterangan : '',
  }

  let menuTidakAda = 0
  let beli = 0
  for (let i = 0 ; i <pesanan.length ; i++){
    if (menu[pesanan[i]] === undefined){
      menuTidakAda++
    } else {
      if (menu[pesanan[i]] <= output.change){
        output.beverages.push(pesanan[i])
        beli++
        output.change -= menu[pesanan[i]]
      }
    }

  }

  if (menuTidakAda === pesanan.length){
    output.keterangan = 'beverages tidak tersedia pada vendingMoonbucks'
  } else if (output.change > uangKembalianTersedia){
    output.keterangan = 'Uang kembalian tidak cukup'
    output.beverages = []
    output.change = uang
  } else if (beli < pesanan.length){
    output.keterangan = 'ada pesanan yang tidak terbeli'
  }

  return output

}

console.log(vendingMoonbucks(['es teh tawar', 'kopi ukut'], 150000));
// { beverages: [],
//   change: 150000,
//   keterangan: 'beverages tidak tersedia pada vendingMoonbucks' }

console.log(vendingMoonbucks(['java-chip', 'dark-mocha'], 150000));
// { beverages: [ 'java-chip', 'dark-mocha' ],
//   change: 30000,
//   keterangan: '' }

console.log(vendingMoonbucks(['asian-dolce', 'dark-mocha', 'java-chip'], 70000));
// { beverages: [ 'asian-dolce' ],
//   change: 20000,
//   keterangan: 'ada pesanan yang tidak tidak terbeli' }

console.log(vendingMoonbucks(['java-chip', 'dark-mocha'], 200000));
// { beverages: [],
//   change: 200000,
//   keterangan: 'uang kembalian tidak cukup' }
