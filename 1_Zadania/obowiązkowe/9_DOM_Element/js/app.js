document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
// zadanie 0
function getDatasInfo(elements){
    let newArray = [];
    for (i = 0; i<elements.length; i++){
        newArray.push(elements[i].dataset.color);
    }
    return newArray;
}
console.log(getDatasInfo(links));

// zadanie 1
console.log(homeElement);
console.log(childElements);
console.log(banner);
console.log(blocks);
console.log(links);

for(i = 0; i<childElements.length; i++){
    console.log(childElements[i].tagName, childElements[i].className );
}
for(i = 0; i<blocks.length; i++){
    console.log(blocks[i].tagName, blocks[i].className);
}

for(i = 0; i<links.length; i++){
    console.log(links[i].tagName, links[i].className);
}

//zadanie 2
for (block of blocks){
    console.log(block.innerHTML);
    console.log(block.outerHTML);
    // innerHTML is an element value inside element, outerHTML is html value+tags of element
    block.innerHTML = ("Nowa wartość diva o klasie blocks");
    console.log(block.innerHTML);
}

//zadanie 3
var myFooter = document.querySelector("#mainFooter");
function getId(element){
    return element.getAttribute("id");
}
console.log(getId(myFooter));

//zadanie 4
function getTags(elements){
    let tagsArray = [];
    for (element of elements){
        tagsArray.push(element.tagName);
    }
    return tagsArray;
}
console.log(getTags(childElements));

//zadanie 5
function getClassInfo(element){
    return element.classList;
}
console.log(getClassInfo(banner));

//zadanie 6
var liInNav = document.querySelectorAll("nav li");
function setDataDirection(elements){
    for(let item of elements){
        if(!item.getAttribute("data-direction")){
             item.setAttribute("data-direction","top");
        }
    }
}
setDataDirection(liInNav);
console.log(liInNav);


});
