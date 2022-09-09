//? https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
/* const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000); */

//?  we can define a function directly inside another function, instead of calling it.
/* setTimeout(function() {  
    console.log("This message is shown after 3 seconds");
}, 3000); */

//? Callback as an Arrow Function
/* setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000); */

function greeting(callback, name){
    callback(name);
}
function songs(name){
    console.log('welcome to the hotel ' + name);
}
greeting(songs, 'california')