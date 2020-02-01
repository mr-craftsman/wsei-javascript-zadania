//zadanie 2
var Calculator = function() {
    this.memory = new Array();    
}

Calculator.prototype.add = function(num1,num2) {
    let result = num1 + num2;
    this.memory.push("Add " + num1 + " to " + num2 + " to get " + result);
    return result;   
}

Calculator.prototype.multiply = function(num1,num2) {
    let result = num1 * num2;
    this.memory.push("Multiply " + num1 + " by " + num2 + " to get " + result);
    return result;   
}

Calculator.prototype.substract = function(num1,num2) {
    let result = num1 - num2;
    this.memory.push("Substract " + num1 + " and " + num2 + " to get " + result);
    return result;   
}

Calculator.prototype.divide = function(num1,num2) {
    let result = num1 / num2;
    this.memory.push("Divide " + num1 + " by " + num2 + " to get " + result);
    return result;   
}

Calculator.prototype.printOperations = function() {
    for (i = 0; i < this.memory.length; i++) {
        console.log(this.memory[i]);  
    }
}

Calculator.prototype.clearoperations = function() {
    this.memory = new Array();
}

//check
console.log("Zadanie 02");
var Calculus = new Calculator();
Calculus.add(8,9);
Calculus.divide(6,7);
Calculus.multiply(4,5);
Calculus.substract(2,3);
Calculus.printOperations();
Calculus.clearoperations();
Calculus.printOperations();