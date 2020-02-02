document.addEventListener("DOMContentLoaded", function () {

    let myDivs = document.querySelectorAll(".box");

    for(i=0; i<myDivs.length; i++) {
        myDivs[i].addEventListener("click", function () {
            this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        });
    }
});
//HTML file does not have script reference