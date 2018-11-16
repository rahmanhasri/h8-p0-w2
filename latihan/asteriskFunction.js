function asteriskNormal(n){
  let string = ''
  for (let i = 0 ; i<n; i++){
    for (let j = 0 ; j<=i ; j++){
      string += '*'
    }
    string += '\n'
  }
  return string
}
console.log('Segitiga siku keatas')
console.log(asteriskNormal(5))
console.log('')

//
function asteriskNormalTerbalik(n){
  let string = ''
  for (let i = 0; i<n; i++){
    for (let j = n ; j>i ; j--){
      string += '*'
    }
    string += '\n'
  }
  return string
}

console.log('segitiga siku kebawah')
console.log(asteriskNormalTerbalik(5))
console.log('')

function asteriskSpasi(n){
  let string = ''
  for (let i = 0; i<n; i++){
    for (let j = 0 ; j<n ;j++){
      if (j>=i){
        string += '*'
      } else if (j<i){
        string += ' '
      }
    }
    string += '\n'
  }
  return string
}

console.log('segitiga siku kebawah dengan spasi')
console.log(asteriskSpasi(5))
console.log('')

function asteriskSpasi2(n){
  let string = ''
  for (let i = 0 ; i<n ; i++){
    for (let j = n -1 ; j>=0 ; j--){
      if (j<=i){
        string += '*'
      } else if (j>i){
        string += ' '
      }
    }
    string += '\n'
  }
  return string
}

console.log('segitigas siku keatas dengan spasi')
console.log(asteriskSpasi2(5))
console.log('')

function asteriskSisi(n){
  let string = ''
  for (let i = 0 ; i<n ; i++){
    for (let j = 1 ; j<=n*2+1 ; j++){
      if (j<n-i || j>n+i+1){
        string += ' '
      } else if (j > n-i){
        string += '*'
      }
    }
    string += '\n'
  }
  return string
}

console.log('segitiga sisi keatas')
console.log(asteriskSisi(5))
console.log('')

function asteriskSisi2(n){
  let string =''
  let lebar = n*2+1
  for (let i = 0 ; i<n ; i++){
    for (let j = 1 ; j <= lebar ; j++){
      if (i+1>j || j>(n*2)-(i+1)){
        string += ' '
      } else {
        string += '*'
      }
    }
    string += '\n'
  }
  return string
}

console.log('segitiga sisi kebawah')
console.log(asteriskSisi2(5))
console.log('')

function asteriskSisiKiri(tinggi){
  let string = ''
  let b = (tinggi+1)/2;
  for (let i = 1 ; i<=tinggi ; i++){
    for(let j = 1 ; j<=b ; j++){
      if (j<b-i+1 || j<Math.abs(i-b+1)){
        string += ' '
      }else {
        string += '*'
      }
    }
    string += '\n'
  }
  return string
}

console.log('Segitiga Sisi kekiri')
console.log(asteriskSisiKiri(9))
console.log('')

function asteriskSisiKanan(tinggi){
  let string = ''
  let b = (tinggi+1)/2;
  for (let i = 1 ; i<=tinggi ; i++){
    for(let j = 1 ; j<=b ; j++){
      if (j>i || j>Math.abs(i-tinggi)+1){
        string += ' '
      }else {
        string += '*'
      }
    }
    string += '\n'
  }
  return string
}

console.log('Segitiga Sisi Kekanan')
console.log(asteriskSisiKanan(9))
console.log('')

function asteriskDiamond(n){
  let string = ''
  let b = (n+1)/2;
  for (let i = 1 ; i<=n ; i++){
    for(let j = 1 ; j<=n ; j++){
      if (j<(b-i)+1 || j<(i-b)+1 || j>(b+i)-1 || j>n-(i-b)){
        string += ' '
      }else {
        string += '*'
      }
    }
    string += '\n'
  }
  return string
}

console.log('Diamond')
console.log(asteriskDiamond(9))
console.log('')

function asteriskDiamondKosong(n){
  let string = ''
  let b = (n+1)/2;
  for (let i = 1 ; i<=n ; i++){
    for(let j = 1 ; j<=n ; j++){
      if (j === (b-i)+1 || j === (i-b)+1 || j === (i+b)-1 || j === (n-i)+b){
        string += '*'
      }else {
        string += ' '
      }
    }
    string += '\n'
  }
  return string
}

console.log('Diamond Kosong')
console.log(asteriskDiamondKosong(9))
console.log('')
