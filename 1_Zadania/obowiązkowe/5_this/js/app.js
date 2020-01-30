// zadanie 0
var car = {
    brand: 'Mercedes',
    color: 'Czarny',
    numberOfKilometers: 0,
    printCarinfo : function(){       
        return console.log(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km" );
    },
    drive : function(km){
        return this.numberOfKilometers += km;
    }
}
console.log("Zadanie 0:");
car.printCarinfo();
car.drive(20);
car.printCarinfo();

// zadanie 1
car.serviceDate = [];
car.addServiceDate = function(serviceDate){this.serviceDate.push(serviceDate);};
car.printServiceDate = function(serviceDate){
    for(i=0; i<car.serviceDate.length;i++){
        console.log("Service date: " + this.serviceDate[i]);   
    }
    return;
}
console.log("Zadanie 1:");
car.addServiceDate("10.10.2010");
car.addServiceDate("11.11.2011");
car.addServiceDate("12.12.2012");
car.printServiceDate();

// zadanie 3
var stairs = {
    step : 0,
    up : function() {this.step++ ;},
    down : function() {this.step-- ;},
    printStep : function() {console.log(this.step);}
}
console.log("Zadanie 3:");
stairs.up();
stairs.up();
stairs.printStep();
stairs.down();
stairs.printStep();