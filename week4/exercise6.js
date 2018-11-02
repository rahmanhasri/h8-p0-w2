function hitungHuruf(kata) {
  // you can only write your code here!
  let counter;
  let max = 0;
  let word;
  let split = kata.split(' ');
  //console.log(split)
  for (let i = 0; i < split.length; i++) {
    counter = 1;
    for (let j = 0; j < split[i].length; j++) {
      for (let k = j; k < split[i].length; k++) {
        if (j === k && split[i][j] === split[i][k]) {
          counter++;
          // console.log(split[i][j])
        }
        if (counter > 1 && counter > max) {
          max = counter;
          word = split[i]
        }
      }
    }
  }
  return word
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

/*
Simpan variable counter
Simpan variable array dengan nilai split dari kata
*/
