document.addEventListener("DOMContentLoaded", function() {

    var firstElem = document.querySelector(".first").firstElementChild.children[2].dataset.answer;
    console.log(firstElem);

    var secondElem = document.querySelector("#second").parentNode.children[3].dataset.answer;
    console.log(secondElem);

    var dataAttrParent = document.querySelector("[data-ex='third']").parentElement.parentElement;
    var lastChild = dataAttrParent.children[dataAttrParent.children.length - 1];
    var firstChild = lastChild.children[0];
    var result = firstChild.children[Math.floor(firstChild.children.length / 2)].dataset.answer;
    console.log(result);

    var fourDiv = document.querySelector(".forth").parentElement.querySelector("article").querySelectorAll("p")[1].dataset.answer;
    console.log(fourDiv);
    
});