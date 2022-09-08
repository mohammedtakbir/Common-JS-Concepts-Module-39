// add()
// console.log(print10)
// print10()
for(var i = 0; i < 5; i++){
    // console.log(i)
}
// console.log('outside', i)

//* function declaration is hoisted
function add(){
    // console.log('five')
}

//* function expressions are not hoisted
/* const print10 = function(){
    console.log('10')
} */

var print10 = function(){ //! typeError: print10 is not a function. ekhane var = print10 hoisted hoye upore uthe jabe and value set korbe undfined. undefined ke funciton hisebe use kora jay na
    // console.log('10')
}
test()
const test = () => {
    console.log('testing the arraw function')
}