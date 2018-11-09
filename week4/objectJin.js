// Write the code, one line for each action:
//
//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.

let user = {}
user.name = 'john'
user.surname = 'smith'
user.name = 'pete'
delete user.name;
// console.log('name' in user); // check property dalam object
// console.log(user);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let total = 0
for (let key in salaries){
  total += salaries[key]
}
// console.log(total);

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
// console.log(menu);
// after the call
let menu2 = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(menu, menu2){
  for (key in menu){
    if (typeof menu[key] === 'number'){
      menu[key] = menu2[key]
    }
  }
}
multiplyNumeric(menu, menu2);
// console.log(menu);

let cloneMenu = {}

for (key in menu){
  cloneMenu[key] = menu[key]
}

console.log(cloneMenu);

let obj1 = {
  nama: 'maman',
}
let obj2 = {
  hobi: 'baca',
}
let obj3 = {
  age : 25,
}

let maman = Object.assign({}, obj1, obj2, obj3)

console.log(maman);
