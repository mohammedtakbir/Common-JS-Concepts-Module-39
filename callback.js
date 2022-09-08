function greeting(greetingHandler, name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log('good morning', name)
}
function greetEvening(name){
    console.log('good evening', name);
}
function greetNight(name){
    console.log('good morning', name)
}


greeting(greetingHandler, 'Tom hanks');
greeting(greetEvening, 'Tom Hardy');
greeting(greetNight, 'Tom Hiddleson')


function submitHandler(){
    console.log('click the submit button')
}

document.getElementById('submit-btn').addEventListener('click', submitHandler())