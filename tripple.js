//* always use ===
//* equal comparison dosen't work for non-primitive

/* const first = 2;
const second = '2'; */
/* const first = false;
const second = 0; */
/* const first = true;
const second = 1; */
/* const first = [];
const second = []; */
const first = [];
const second = first;
if(first === second){
    console.log('values are equal')
}else{
    console.log('values are not equal')
}