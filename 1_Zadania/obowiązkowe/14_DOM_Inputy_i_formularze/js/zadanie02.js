document.addEventListener("DOMContentLoaded", function() {
var header = document.querySelector(".page-header");
var select = document.querySelector("select");
  
let osXImg = header.children[1];
let linuxImg = header.children[2];
let winImg = header.children[3];
  
osXImg.style.display = "none";
linuxImg.style.display = "none";
winImg.style.display = "block";
  
select.addEventListener("click", function() {
    if (this.value == "Windows") {
        osXImg.style.display = "none";
        linuxImg.style.display = "none";
        winImg.style.display = "block";
      }
  
      if (this.value == "Os X") {
          osXImg.style.display = "block";
          linuxImg.style.display = "none";
          winImg.style.display = "none";
      }
  
      if (this.value == "Ubuntu") {
          osXImg.style.display = "none";
          linuxImg.style.display = "block";
          winImg.style.display = "none";
      }
  })
  });