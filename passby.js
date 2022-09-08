let num1 = 5;
let num2 = 7;

//* primitive types data are pass by value
function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}
const output = multiply(num1, num2);
// console.log(num1)
// console.log(output)

//* object and array are pass by referennce
let a = {name: 'jalil', partner: 'borsha'}
let b = {name: 'raj', partner: 'vobita'}

function makeFilm(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.name = 'Kabir';
}
console.log(a, b)
makeFilm(a, b)
console.log(a, b)