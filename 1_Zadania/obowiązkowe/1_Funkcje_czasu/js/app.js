//zadanie Funkcje czasu
function countHello(t){
    var t2 = 1;
    const interval = setInterval(function(){
        console.log('Hello World!', t2++);
        if (t2 === t+1) clearInterval(interval);
    }, 1000);
}

countHello(10);