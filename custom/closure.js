/* function x(){
    let x = 7;
    function y(){
        console.log(x);
    }
    x=100;
    return y;
}
const result = x();
console.log(result)
result() */

function z() {
    let p = 900;
    function x() {
        let x = 7;
        function y() {
            console.log(x, p);
        }
       y();
    }
    x();
}
const result = z();
console.log(result)
z()