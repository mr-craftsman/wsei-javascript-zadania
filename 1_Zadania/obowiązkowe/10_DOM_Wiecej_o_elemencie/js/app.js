document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
// zadanie 0
var modClassElem = document.querySelectorAll(".ex5 li");
for (i=0; i<modClassElem.length; i++){
    if(i%2 == 0)
        modClassElem[i].style.backgroundColor = "green";
    
    if(i%3 == 0)
        modClassElem[i].style.textDecoration = "underline";
    
}
modClassElem[4].classList.add("big");

// zadanie 1
var chromePart = document.querySelector(".chrome");
var edgePart = document.querySelector(".edge");
var ffoxPart = document.querySelector(".firefox");

chromePart.style.backgroundImage = "url(./assets/img/chrome.png)";
edgePart.style.backgroundImage = "url(./assets/img/edge.png)";
ffoxPart.style.backgroundImage = "url(./assets/img/firefox.png)";

chromePart.nextElementSibling.href = "https://www.google.com/chrome/";
chromePart.nextElementSibling.innerHTML = "Google Chrome";
edgePart.nextElementSibling.href = "https://www.microsoft.com/en-us/edge";
edgePart.nextElementSibling.innerHTML = "Microsoft Edge";
ffoxPart.nextElementSibling.href = "https://www.mozilla.org/en-US/firefox/new/";
ffoxPart.nextElementSibling.innerHTML = "Mozilla Firefox";

chromePart.style.width = "100px";
/* style modifications are added within html tags, because JS is dynamically 
modyfying html, not css files
*/ 

// zadanie 2
var spanParts = document.querySelector(".ex2").querySelectorAll("span");
spanParts[0].innerHTML = "Radosław Adamowicz";
spanParts[1].innerHTML = "black";
spanParts[2].innerHTML = "pierogies";

// zadanie 3
var ulPartEx3 = document.querySelector(".ex3").querySelector("ul");
var liParts = ulPartEx3.querySelectorAll("li");
ulPartEx3.classList.add("menu");
for(liPart of liParts){
    liPart.classList.add("menuElement");
    liPart.classList.remove("error");
}

// zadanie 4
var liParts4 = document.querySelectorAll(".ex4 ul li");
let counter = 1;
for(liPart4 of liParts4){
    liPart4.dataset.id = counter++;
}
});