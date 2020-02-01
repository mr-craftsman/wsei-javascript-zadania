
document.addEventListener("DOMContentLoaded", function () {

//zadanie 0
var element = document.querySelector(".title");

function getDataAnimation(element){
    var dataAnimation = element.getAttribute("data-animation");
    return dataAnimation;
}
console.log(getDataAnimation(element));

//zadanie 1
var idHomeOne = document.getElementById("home");
var idHomeTwo = document.querySelector("#home");
var liFirst = document.querySelector("li[data-direction]");
var classBlock = document.querySelector(".block");
/* testing
console.log(idHomeOne);
console.log(idHomeTwo);
console.log(liFirst);
console.log(classBlock);
*/

//zadanie 2
var liNav = document.querySelectorAll("nav li");
var divParagraphs = document.querySelectorAll("div p");
var divArticle = document.querySelectorAll("article div");
/* testing
console.log(liNav);
console.log(divParagraphs);
console.log(divArticle);
*/

//zadanie 3
var firstArticle = document.querySelector("article.first");
var headingOne = firstArticle.querySelectorAll("h1");
console.log(headingOne.length);
});
