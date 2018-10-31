function jarakTempuh(str, n) {
  var target = '';
  while (n >= 0) {
    target += 'n'
    n--
  }
  //console.log(cari) // nn // n // nnnnn
  for (var i=0;i<str.length;i++){
    for(var j = 0; j<target.length;j++){
      if (str[i+j] !== 'n'){
        break;
      } else if (j === target.length-1){
        return i
      }
    }
  }
}


console.log(jarakTempuh('_n_n__nnn_n_nn', 2)); // 6
console.log(jarakTempuh('_n_n_nn_nnn_n_nn', 1)); // 5
console.log(jarakTempuh('_n_n_nnn___nnnnnn_nn', 5)); // 11
