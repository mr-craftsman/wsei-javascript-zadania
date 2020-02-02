document.addEventListener("DOMContentLoaded", function() {
    var myButtons = document.querySelectorAll("button");
    var myCounters = document.querySelectorAll(".counter");
    for(let i=0; i<myButtons.length; i++) {
        myButtons[i].addEventListener("click", function() {
            let myReg = myCounters[i].innerHTML;
            myReg++;
            myCounters[i].innerHTML = myReg;
        });
    }      
});
//HTML file does not have script reference

