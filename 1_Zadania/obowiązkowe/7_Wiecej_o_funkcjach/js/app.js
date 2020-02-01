/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//global function with void parameters
function jeden() {

    //declares a variable, to which has access
    var zmienna1 = 1;

    //global function above has a method, another function, no parameters
    function dwa() {

        //method above uses variable declared at the same scope, therfore, it works
        console.log(zmienna1);

        //variable below is one scope deeper, it`s "private" let`s say
        var zmienna2 = 3;
    }

    //function call that demands access to a variable out of scope
    dwa();

    //reference to a variable out of scope, will not work
    console.log(zmienna2)
}

//function call will end with result regarding only it`s scope, zamienna2 variable should be declared globally, or within jeden scope
jeden()