function hitungJumlahKata(str) {
  let kata = '';
  let counter = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      kata += str[i];
    } else if (kata.length >= 1 && str[i] === ' ') {
      counter++;
      //console.log(kata)
      kata = ''
    }

    if (i === str.length - 1 && kata !== '') {
      counter++
    }
  }
  return counter
}

//Test case
console.log(hitungJumlahKata(' I have     a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake ')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata(' I ')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
