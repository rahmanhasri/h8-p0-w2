function balikSetiapKata(arr) {
  var newArr = [];
  console.log(typeof arr[5]);
  for (i = 0; i < arr.length; i++) {
    var balik = '';
    arr[i] = String(arr[i]);
    for (j = arr[i].length - 1; j >= 0; j--) {
      balik += arr[i][j]
    }
    arr[i] = balik;
  }
  return arr
}



console.log(balikSetiapKata(['saya', 'selesai', 'tugas', 'javascript', 'tingkat', 10]))
//['ayas', 'iaseles', 'sagut', 'tpircsavaj', 'takgnit', '01']
