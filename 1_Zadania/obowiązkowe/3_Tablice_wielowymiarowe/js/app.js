
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//zadanie 0
var arr = [[11, 12],[42, 2],[-4, -120],[0, 0],[1, 34],];
function checkArray(array){
    var boolArray = [];
    for(i=0; i<array.length; i++){
        let evenCell = true;
        for(j=0; j<array[i].length; j++){
            if(array[i][j] % 2 != 0)
            evenCell = false;
            break;
        }
    boolArray.push(evenCell);
    }
return boolArray;
}
console.log("Zadanie 0:");
console.log(checkArray(arr))

//zadanie 1
console.log("Zadanie 1:");
console.log('"Położenie" z treści rozumiane programistycznie:');
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);
console.log('"Położenie" z treści rozumiane matematycznie:');
console.log(task1Array[2][1]);
console.log(task1Array[1].length);
console.log(task1Array[3][1]);

//zadanie 2
console.log("Zadanie 2:");
console.log("Pierwszy wymiar tablicy:");
for(i=0; i<task2Array.length; i++){
    console.log(task2Array[i]);
}
console.log();

console.log("Długość tablic drugiego wymiaru:");
for(i=0; i<task2Array.length; i++){
    console.log(task2Array[i].length);
}
console.log();

console.log("Wszystkie elementy tablicy 2 wymiarowej:");
for(i=0; i<task2Array.length; i++){
    for(j=0;j<task2Array[i].length; j++){
        console.log(task2Array[i][j]);
    }   
}
console.log();

//zadanie 3
function print2DArray(array2D){
    for(i=0;i<array2D.length;i++){
        for(j=0;j<array2D[i].length;j++){
            console.log(array2D[i][j]);
        }
    }
}
/* do testowania
console.log("Zawartość tablicy rozumiana jako elementy(treść zadania):")
print2DArray(task1Array);
*/
//zadanie 4
console.log("Zadanie 3 i 4 (wynik):");
var myTestArray = [["Na","górze","róże"],
[1,2,1,2,3],["Na","dole","śmieci"],[false]];
print2DArray(myTestArray);

//zadanie 5
console.log("Zadanie 5:");
function create2DArray(rows, columns){
    let array2D = new Array(rows);
    for(i=0;i<rows;i++){
        array2D[i] = new Array(columns);
    }
    let counter = 1;
    for(i=0;i<rows;i++){
        for(j=0;j<columns;j++){
            //array2D.push(counter++);
            array2D[i][j] = counter++;
        }
    }
    return array2D
}
console.log("Tworzenie tablicy o param (4,4), content liczby całkowite:")
console.log(create2DArray(4,4));