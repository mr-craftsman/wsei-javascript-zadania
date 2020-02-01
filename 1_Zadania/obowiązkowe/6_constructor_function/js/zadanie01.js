var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

//function call
var robot = new Robot("Radowid");
robot.sayHi("Rujewit");
robot.changeName("Roksana");
robot.isFunctional = false;
var robotTwo = new Robot("Janek");
robot.sayHi("Rujewit");
robotTwo.sayHi("Rujewit");
robot.fixIt();
robot.sayHi("Rujewit");