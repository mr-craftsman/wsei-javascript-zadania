document.addEventListener("DOMContentLoaded", function() {
    var winW = document.querySelector("#windowWidth");
    var winH = document.querySelector("#windowHeight");
 
    winW.innerHTML = window.innerWidth;
    winH.innerHTML = window.innerHeight;

    window.addEventListener("resize", function () {
        winW.innerHTML = window.innerWidth;
        winH.innerHTML = window.innerHeight;
    })
});
//HTML file does not have script reference