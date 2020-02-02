// Zadanie 0a
var parentElements = document.querySelectorAll(".parent");
for (i = 0; i<parentElements.length; i++) {
    parentElements[i].addEventListener("mouseover", function() {
        this.querySelector(".children").style.display = "block";
    })
    parentElements[i].addEventListener("mouseout", function() {
        this.querySelector(".children").style.display = "none";
    })

}

// Zadanie 0b
for (i = 0; i<parentElements.length; i++) {
    parentElements[i].addEventListener("mouseout", function () {
        parentElements = this;
        function hideChildrenElement(parentElements) {
            parentElements.querySelector('.children').style.display = "none";
        }
        hideChildrenElement(parentElements);
    })
}