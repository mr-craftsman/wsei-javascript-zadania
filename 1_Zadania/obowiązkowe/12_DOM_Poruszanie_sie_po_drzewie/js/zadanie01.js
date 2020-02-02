var myButtons = document.querySelectorAll(".button");

for (counter=0; counter<myButtons.length; counter++) {
    myButtons[counter].addEventListener("click", function () {
        let nextElement = this.nextElementSibling;
        if (nextElement !== null) {
            nextElement.classList.toggle("hidden");
        }
    })
};