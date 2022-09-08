//* Truthy
//? 1. true
/* const x = false
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//? 2. any number (positive and negative) will be truthy other than 0
/* const x = -12;
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//? 3. any string other than empty string
/* const x = 'solaiman';
const x = ' '; //? empty string with white space will truthy
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//? 4. '0', 'false'
/* const x = '0';
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
}

const y = 'false';
if(y){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//? 5. {} (empty object) 
/* let x = {};
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//? 5. [] (empty array) 
/* let x = [];
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */




//* Falsy
//? 1. false


//? 2. 0
/* const x = 0;
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//? 3. '' (empty string)
/* const x = '';
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */

//? 4. undefined
/* let x;
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
}
 */

//? 4. null
/* let x = null;
if(x){
    console.log('truthy')
}else{
    console.log('falsy')
} */


//* optional
//? check falsy
/* let x = ' ';
if(!x){
    console.log('value is falsy')
}else{
    console.log('not falsy')
} */

//? check truthy
let y = 12;
if(!!y){
    console.log('value is truthy')
}else{
    console.log('not truthy')
}