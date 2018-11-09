let obj = {name : 'hacktiv8', fox: 'Zen Fox', tahun : 2018, batch : 26, 'phase 1': '26 November 2018'}
// console.log(Object.keys(obj));
//

//
// var a = 'foo',
//     b = 42,
//     c = {};
//
//
// var o = {
//   a: a,
//   b: b,
//   c: c
// };
// console.log(o)
//

//
// for (let i in obj){ // i => variable baru, obj adalah nama variable yg sudah ada
//   console.log(obj[i]) // yang akan dikeluarkan adalah value dari obj tersebut
// }
//

//
// var result = []
// for (prop in obj) { //memanggil property atau keyName tersebut
//   if (hasOwnProperty.call(obj, prop)) {
//     result.push(prop);
//   }
// }
// console.log(result)
//

//
// function showProps(obj, objName) {
//   var result = '';
//   for (var i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += objName + '.' + i + ' = ' + obj[i] + '\n'; // membuat string paragraf yg berisi namaObj.property = objValue
//     }
//   }
//   return result;
// }
//
// var show = showProps(obj, 'zen')
// console.log(show)
//

var result = [];
var person ={};

person.name = 'Theresia';
person.age = 25;
person.gender = 'female';
person.hobby = ['belajar', 'baca', 'tidur']
result.push(person);
// console.log(person);
// console.log('hobby dia adalah ', person.hobby[1]);

person = {}; // harus reassign object baru setiap membuat object yang akan dihasilkan ke array

person.name = 'maman';
person.age = 29;
person.gender = 'male';

result.push(person);
// console.log(result);

for (let i = 0; i<result.length; i++){
  console.log('Nama: ', result[i]['name'])
  console.log('age: ', result[i]['age'])
  console.log('gender: ', result[i]['gender'])
  let hobi = result[i]['hobby']
  if (result[i]['hobby'] === undefined){
    // do nothing
    hobi = [];
    hobi.push('lari')
    console.log('hobby :');
    console.log('-', hobi[0]);
  } else {
    console.log(`hobby :`);
    for (let j =0; j<result[i]['hobby'].length;j++)
    console.log(`- ${hobi[j]}`)
  }
}
