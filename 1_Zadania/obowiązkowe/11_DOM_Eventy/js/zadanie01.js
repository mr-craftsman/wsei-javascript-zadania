document.addEventListener("DOMContentLoaded", function () {
var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})
/* Scripts initialized in <head> are running before entire content loads.
Adding event listner causes script not to load until entire DOMcontent
is loaded.
*/