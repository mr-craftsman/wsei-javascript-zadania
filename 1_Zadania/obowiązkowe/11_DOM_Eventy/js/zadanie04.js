document.addEventListener('DOMContentLoaded', function() {

var myBttn = document.querySelectorAll("button");
var myCount = document.querySelector(".counter");

for(i=0; i<myBttn.length; i++) {
        myBttn[i].addEventListener("click", function() {
        let myReg = myCount.innerHTML;
        myReg++;
        myCount.innerHTML = myReg;
    })
}
});
//HTML file does not have script reference