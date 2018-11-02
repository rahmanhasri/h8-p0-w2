function ubahHuruf(kata) {
  // you can only write your code here!
  let alfabet = 'abcdefghijklmnopqrstuvwxyza'
  let newKata = '';
  let key = [];

  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < alfabet.length; j++) {
      if (kata[i] === alfabet[j]) {
        key.push(j + 1)
      }
    }
  }
  for (let k = 0; k<key.length ; k++){
    let tmp = key[k]
    newKata += alfabet[tmp]
  }
  return newKata
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
