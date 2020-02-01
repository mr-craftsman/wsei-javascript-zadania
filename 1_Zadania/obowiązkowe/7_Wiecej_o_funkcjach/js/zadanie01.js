
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//function below uses JS array method - sort.
function sortArray() {

    //an array to use method on is declared within function, just for example
    var points = [41, 3, 6, 1, 114, 54, 64];

    //method sort is used on array declared above, it has two anon parameters, by it will work
    points.sort(function (a, b) {
        //function compares values by a declared parameters pattern - here in rising order
        return a - b;
    });

    //function returns sorted array
    return points;
}

//function call
sortArray();
//console debugging
console.log(sortArray());
