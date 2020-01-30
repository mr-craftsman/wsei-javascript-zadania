var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

console.log('Zadanie 5:');

for (i = 0; i<animals.length; i++){
    for (let key in animals[i]){
        if (typeof(animals[i][key]) != "object"){
        console.log(key + " -> " + animals[i][key]);}
        else {
            console.log(key + " : ");
            for (let val in animals[i][key])
                 for (let element in animals[i][key][val]){
                 console.log(element + " -> " + animals[i][key][val][element]);
            }
        }
    }
}
