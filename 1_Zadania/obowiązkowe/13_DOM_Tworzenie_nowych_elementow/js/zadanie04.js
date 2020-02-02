document.addEventListener("DOMContentLoaded", function() {
    
    var myList = document.querySelector(".list");

    document.querySelector("#remove").addEventListener("click", function() {
        //for(i=0;i<myList.length; i++){
        while(myList.firstChild) {
            myList.removeChild(myList.firstChild);
        }
    })
});