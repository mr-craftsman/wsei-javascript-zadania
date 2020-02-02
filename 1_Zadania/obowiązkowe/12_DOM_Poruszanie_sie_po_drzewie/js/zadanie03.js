var myUls = document.querySelectorAll(".list");

for (i=0; i<myUls.length; i++) {
    myUls[i].addEventListener("mouseover", function () {
        for (counter=0; counter<this.children.length; counter++) {
            this.children[counter].style.backgroundColor = "green";
        }
        this.firstElementChild.style.backgroundColor = "red";
        this.lastElementChild.style.backgroundColor = "blue";
    })
};