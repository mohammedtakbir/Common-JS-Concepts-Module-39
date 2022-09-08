//* 8 ways to get undefined
//? 1. variable that is not initialized will give indefined
let first;
// console.log(first)

//? 2. function with no return
function second(a, b) {
    const sum = a + b;
}
const result = second();
// console.log(result)

//? 3. parameter that is not passed will be undefined
function third(a,b,c,d){
    console.log(a, b, c, d);
}
// third(2,5)

//? 4. if return has nothing on the right side will return undefined
function negative(a, b){
    if(a < 0 || b < 0){
        return
    }return a+b;
}
const total =  negative(2, -3);
// console.log(total)

//? 5. property that dosen't exist on an object will give you undefined
const fifth = {name: 'takbir', age: 22}
// console.log(fifth.name, fifth.sallery)

//? 6. accessing array elements outside of the index range

//? 7. deleting an element inside an array
const sixth = [12, 34, 45, 56, 67, 78];
//* you should not use it. Instead use splice
delete sixth[1]
// console.log(sixth[1], sixth[12], sixth[500])

//? 8. set a value directly to undefined
const eighth = undefined;
// console.log(eighth)
const nineth = null;