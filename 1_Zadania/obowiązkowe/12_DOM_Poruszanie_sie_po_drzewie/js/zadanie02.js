var myButtons = document.querySelectorAll(".button");

for(i=0; i<myButtons.length; i++) {
    myButtons[i].addEventListener("click", function () {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.parentElement.style.backgroundColor = randomColor;
    })
};