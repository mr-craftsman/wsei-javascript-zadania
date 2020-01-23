//zadanie 0 
let entryTable = [1,2,3,,4,5,,6,,7];
function distFromAverage(anyTable){
    let count = 0;
    let sum = 0;
    for (i=0; i<anyTable.length; i++){
        //in case array has empty cells
        if(anyTable[i] !== undefined){
            count++;
            sum += anyTable[i]; 
        }
    }
    // console log for testing
    console.log("Array mean cell value is: " + sum/count); 
    // undefined cell exception unnecessary this time
    return newTable = anyTable.map(function(num){
        return num - (sum/count);              
        }
    )
}
distFromAverage(entryTable);
console.log("Input array is: " + entryTable);
console.log("Output array is: " + newTable);

//zadanie 1
const favFruits = ["apple","banana","grape","blueberry","lemon"];
console.log("First fruit: " + favFruits[0]);
console.log("Last friut: " + favFruits[favFruits.length-1]);
console.log("All fruits:");
for(i=0;i<favFruits.length;i++){
    console.log(favFruits[i]);
}

//zadanie 2
function createArray(number) {
    var newArray =[];
    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}
console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

//zadanie 3
let arrayThree = [1,2,3,5,7,11,13,17,19];
function printTable(array){
    for(i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
printTable(arrayThree);

//zadanie 4
function multiply(array){
    let base = 1;
    for(i=0;i<array.length;i++){
        base = base * array[i];
    }
    return base;
}
console.log(multiply([1,2,3,4,5,6,7]));
console.log(multiply([1,1,1,1]));
console.log(multiply([2,8,3,7]));

//zadanie 5
function getEvenAverage(array){
    let fiveSum = 0;
    let fiveCount = 0;
    for(i=0;i<array.length;i++){
        if(array[i]%2 === 0){
            fiveSum+=array[i];
            fiveCount++           
        }        
    }
    if(fiveCount != 0){return fiveSum/fiveCount;}
    else{return null;}  
}
console.log(getEvenAverage([1,2,3,4,5,6,7]));
console.log(getEvenAverage([1,1,1,1]));
console.log(getEvenAverage([2,8,3,7,4]));

//zadanie 6
function sortArray(array){
    return array.sort((a,b) => a-b);
}
console.log(sortArray([145,11,3,64,4,6,10]));

//zadanie 7
function addArrays(array1,array2){
    if(array1.length < array2.length){
        thisArray = array2;
        thisLength = array1.length;
    }
    else{
        thisArray = array1;
        thisLength = array2.length;
    }
    for(i=0;i<thisLength;i++){
        thisArray[i]=array1[i]+array2[i];
    }
    return thisArray
}
console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([8,3,22], [1,3,2]));
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));