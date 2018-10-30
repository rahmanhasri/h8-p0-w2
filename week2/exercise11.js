// function balikKata(kata) {
//   // you can only write your code here!
//   var balik = '';
//   var i = kata.length - 1;
//   for (i; i >= 0; i--) {
//     balik = balik + kata[i]
//   }
//   return balik
// }

function balikKata(kata) {
    var balik = '';
    for (i=kata.length-2; i>=0;i-=2){
      balik = balik + kata[i]
    }
    return balik
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // rdCdadrWolH
console.log(balikKata('John Doe')); // o hj
console.log(balikKata('I am a bookworm')); // rwobam
//console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
//console.log(balikKata('Super')); // repuS
