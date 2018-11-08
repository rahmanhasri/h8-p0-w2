// function cariVokal(num) {
//   var total = 0
//
//   for (let i = 0; i < num.length; i++) {
//     switch (num[i]) {
//       case 'a':
//         total++;
//         break;
//       case 'i':
//         total++;
//         break;
//       case 'u':
//         total++;
//         break;
//       case 'e':
//         total++;
//         break;
//       case 'o':
//         total++;
//         break;
//     }
//   }
// return total
// }

console.log(cariVokal(['a', 'b', 'c', 'd', 'e']))

function cariVokal(num){
  var total = 0;
  var vokal = 'aiueo';

  for (let i = 0;i<num.length;i++){
    // if(num[i] !== 'a' && num[i] !== 'i' && num[i] !== 'u' && num[i] !== 'e'
    // && num[i] !== 'o'){
    //   total++
    // }
    var isKonsonan = true;
    for (let j = 0; j<vokal.length;j++){
      if (num[i] === vokal[j]){
        isKonsonan = false;
        console.log(isKonsonan)
      }
    }
    if (isKonsonan === true){
      total++
    }
  }
  return total
}
