document.addEventListener("DOMContentLoaded", function() {
    
    var myBttns = document.querySelectorAll(".moveBtn");
    var listLeft = document.querySelector("#list1");
    const listRight = document.querySelector("#list2");

    for(i=0; i<myBttns.length; i++){
    //btns.forEach(btn => {
        myBttns[i].addEventListener("click", function() {
            let innerLi = this.parentNode;
            if (innerLi.parentNode == listLeft) {
                listLeft.removeChild(innerLi);
                listRight.appendChild(innerLi);
            } else {
                listRight.removeChild(innerLi);
                listLeft.appendChild(innerLi);
            }
        })
    }
});