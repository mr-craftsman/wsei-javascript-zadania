document.addEventListener("DOMContentLoaded", function() {

    var myBtn = document.querySelector(".button");
    var myMenu = document.querySelector(".menu");
    let counter = 0;
    myBtn.addEventListener("click", function() {
        let newLi = document.createElement("li");
        newLi.innerText = "Element nr: " + ++counter;
        myMenu.appendChild(newLi);
    });
});