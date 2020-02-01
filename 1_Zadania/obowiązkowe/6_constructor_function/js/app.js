// zadanie 0
var Basket = function() {
    this.products = new Array(),
    this.sum = 0,
    this.addProduct = function(name,price) {
        this.products.push({name:name,price:price});   
    this.sum += price; 
    }
    this.showBasket = function() {
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.products[i].name + " " + this.products[i].price + "PLN");
        }
        console.log("Suma: " + this.sum + "PLN");
    }
}
// function call
var myBasket = new Basket();
myBasket.addProduct("Pomidory",10);
myBasket.addProduct("Arbuz",20);
myBasket.showBasket();

var yourBasket = new Basket();
yourBasket.addProduct("Ryż", 6);
yourBasket.addProduct("Grzyby mun",30);
yourBasket.addProduct("Tofu",10);
yourBasket.showBasket();

//zadanie 1 w pliku zadanie01.js
//zadanie 2 w pliku zadanie02.js