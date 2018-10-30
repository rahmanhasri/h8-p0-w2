//input "hello world!"
//output
//"!dlrow olleh"

function balikString(input) {
  var output = ''
  for(i=0;i<input.length;i++){
    output = input[i] + output
  }
  return output
}

var balik = balikString("Hello world!");
console.log(balik)