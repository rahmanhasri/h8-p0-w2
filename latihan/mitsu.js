function mitsubishi(){
  let string = ''
  let n = 9;
  let n2 = n + 5
  let m = n+n+n
  let mid1 = 5
  let bawah1 = 15
  for (let i = 1 ; i<=n2 ; i++){
    for(let j = 1 ; j<=m ; j++){
      if (i<=9){
        if (j<=(mid1-i)+n || j<=(i-mid1)+n || j>=(mid1+i)+n || j>(n-i+mid1)+n){
          string += '-'
        } else{
          string += '*'
        }
      } else if (i>9){
        if (j<=14){
          if (j<bawah1-i || j>14-(i-n)){
            string += '-'
          } else string += '*'
        } else if (j>14){
          if (j<(bawah1+i)-10 || j>=(bawah1+i-1)){
            string += '-'
          } else string += '*'
        }
      }
    }
    string += '\n'
  }
  return string
}

console.log('i\'m Possible')
console.log(mitsubishi())
