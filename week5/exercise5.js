// Jika algoritmanya setiap attack dilakukan akan berkurang 2 dan seterusnya
// function attack (damage) {
//   // Code disini
//   return (damage - 2 <= 0) ? 0 : damage - 2
// }
//
// function damageCalculation (numberOfAttacks, damagePerAttack) {
//   // Code disini
//   if (numberOfAttacks === 0){
//     return damagePerAttack
//   } else {
//     return damagePerAttack + damageCalculation(numberOfAttacks-1, attack(damagePerAttack))
//   }
//
// }

function attack (damage){
  return damage - 2
}

function damageCalculation(numberOfAttacks, damagePerAttack){
  return numberOfAttacks * attack(damagePerAttack)
}
// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
