function sum(a, b, c) {
    // console.log(arguments)
    // console.log(arguments[2])
    // console.log(typeof arguments)
    /* for(const number of arguments){
        console.log(number)
    } */
    /* arguments.push(12)
    console.log(arguments) */
    //* convert into an array
    const args = [...arguments]
    // console.log(args)
    const result = a + b + c;
    return result;
}
// console.log(arguments) //! not available outside the function
const total = sum(12, 23, 34, 54);
// console.log(total)
console.log(sum.length)