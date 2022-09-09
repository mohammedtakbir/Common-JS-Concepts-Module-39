//* problem practice
//? 1) If I write []==true,will it show true or false? Check it out.
/* const first = [];
if([] == true){
    console.log('true');
}else{
    console.log('false')
} */

//? 2) Use === to check if the true === "true" gives true or false.
/* if(true === 'true'){
    console.log('true')
}else{
    console.log('false')
} */

//? 3) Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.

/* const checkNumber = (a) => {
    if(isNaN(a)){
        console.log(true, 'not a number')
    }
    else{
        console.log(false + ' a number')
    }
}
checkNumber(50); */

//* practice problem
//? 1. Change the value stored in the storeFalsyValue variable to a falsy value,such that the code in the else statement executes.
/* let storeFalsyValue = true;
if(!storeFalsyValue){
    console.log('nothing to show');
}else{
    console.log('you are amazing');
}
 */
//? 2. Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third parameter will be a string) that will perform arithmetic operation depending on the third parameter and will print the result.

const test = (num1, num2, string) => {
    if(string === 'add'){
        const sum = num1 + num2;
        return sum;
    } else if(string === 'subtract'){
        const sub = num1 - num2;
        return sub;
    } else if(string === 'multiply'){
        const multiply = num1 * num2;
        return multiply;
    }else if(string === 'divide'){
        const divide = num1 / num2;
        return divide;
    }else if(string === 'modulus'){
        const modulus = num1 % num2;
        return modulus;
    }else{
        console.log('Invalid Operation')
    }
}
const result = test(12, 12, 'modulus');
console.log(result)