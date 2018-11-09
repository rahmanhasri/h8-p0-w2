function changeVocals(str) {
  //code di sini
  let kamus = 'aiueoAIUEO'
  let kamus2 = 'bjvfpBJVFP'
  let array = []
  for (let i = 0; i < str.length; i++) {
    array.push(str[i])
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < kamus.length; j++) {
      if (array[i] === kamus[j]) {
        array[i] = kamus2[j]
        break;
      }
    }
  }
  let string = ''
  for (let i = 0; i < array.length; i++) {
    string += array[i]
  }
  return string
}

function reverseWord(str) {
  //code di sini
  let string = ''
  for (let i = 0; i < str.length; i++) {
    string = str[i] + string
  }
  return string
}

function setLowerUpperCase(str) {
  //code di sini
  let string = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()){
      string += str[i].toUpperCase()
    } else string += str[i].toLowerCase()
  }
  return string
}

function removeSpaces(str) {
  //code di sini
  let string = ''
  for (let i = 0; i < str.length ; i++){
    if (str[i] !== ' '){
      string += str[i]
    }
  }
  return string
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  let satu = changeVocals(name);
  let dua = reverseWord(satu);
  let tiga = setLowerUpperCase(dua);
  let empat = removeSpaces(tiga)
  return empat
}

// console.log(changeVocals('dimitri'));
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
