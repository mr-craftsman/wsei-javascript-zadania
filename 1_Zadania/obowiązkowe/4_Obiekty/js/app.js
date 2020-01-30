// zadanie 0a
var Country = {
    capital : 'Berlin',
    population : 79654321,
    president : 'Steinmeier',
    primeMinisters : ['Merkel','Kohl','Schroeder']
}
console.log('Zadanie 0a:');
console.log(Country.capital, Country.population, Country.president, Country.primeMinisters);

// zadanie 0b
var timeMachine = {
    shape : 'circle',
    model : 'dotted',
    run : function(date,place){
        this.date = date;
        this.place = place;
        return date+' '+place;
    }
}
timeMachine.run('14/11/1914','Sarajevo');
console.log('Zadanie 0b:');
console.log(timeMachine.shape, timeMachine.model, timeMachine.run('14.11.1914','Sarajevo'));

// zadanie 1
var book = {
    title: 'Tower of Swallow',
    author: 'Andrzej Sapkowski',
    numberOfPages : 550
}
console.log('Zadanie 1:');
for (let key in book){
    console.log(key + ' : ' +book[key]);
}

// zadanie 2
var person = {
    name: 'John Doe',
    age: 44,
    sayHello : () => console.log('hello')
}
console.log('Zadanie 2:');
console.log(person.name + ' ' + person.age);
person.sayHello();

// zadanie 3
const favRecipe = {
    title: 'Onion Soup',
    servings: 4,
    ingredients : []
}
favRecipe.ingredients.push('1 kg onions','1 cup butter','0,25kg edam cheese', 'salt','pepper');
console.log('Zadanie 3:');
console.log(favRecipe.title, '\n\ ', favRecipe.servings, ' servings', favRecipe.ingredients);

// zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;
console.log('Zadanie 6:');
if (spoon.isExist){console.log('Zupy se weź, pomidorowej.');}
else {console.log('Widelcem mam jeść?');}