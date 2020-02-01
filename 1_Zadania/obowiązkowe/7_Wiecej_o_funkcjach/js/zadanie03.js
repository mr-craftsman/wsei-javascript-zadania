//thanks to JS hoisting, this works
sayHi();

//this is my nice little function
function sayHi() {
    console.log("Cześć");
}
//this function call also works
sayHi();

// here, function is a value assigned to a variable powitanie
//sayWelcome();
//one may try calling it like this, but it has no value yet
//powitanie();
var powitanie = function sayWelcome() {
    console.log("Witaj");
}
//one cannot just call it with function call, it`s a value of a variable
//sayWelcome();
//however, one can call it like this, after it had its` value assigned
powitanie();