document.addEventListener("DOMContentLoaded", function () {

    var mainDiv = document.querySelector("#box");
    var globalX = document.querySelector("#globalX");
    var globalY = document.querySelector("#globalY");
    var localX = document.querySelector("#localX");
    var localY = document.querySelector("#localY");

    mainDiv.addEventListener("mousemove", function(location) {
        globalX.innerHTML = location.pageX;
        globalY.innerHTML = location.pageY;
        localX.innerHTML = location.pageX - this.offsetLeft;
        localY.innerHTML = location.pageY - this.offsetTop;
    });
});
//HTML file does not have script reference