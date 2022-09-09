//* 8 ways to get undefined
//? 1. variable that is not initialized
let first;
// console.log(first)

//? 2. function with no return
function second(a, b) {
    const sum = a + b
}
const result = second();
// console.log(result);

//? 3.parameter that is not passed will be undefined
function third(a,b,c,d){
    // console.log(a,b,c,d)
}
third(2,3)

//? 4. if return has nothing on the right side will be undefined
function fourth(a,b){
    const sum = a + b;
    return;
}
const total = fourth(2,3);
// console.log(total)

//? 5. property that dosen't exist on an object wil give you udefined
const person = {name: 'talbir', age: 22};
// console.log(person.job);

//? 6. accessing array elements outside of the index range
const numbers = [12, 23, 34, 56, 67];
// console.log(numbers[1], numbers[5], numbers[100])

//? 7. deleting an element inside of an array
const number = [12, 23, 34, 56, 67];
delete number[1];
// console.log(number[1])

//? 8. set a value directly to undefined
const eighth = undefined;
console.log(undefined)