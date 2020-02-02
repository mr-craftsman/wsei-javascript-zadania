document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.querySelectorAll(".deleteBtn");

    for (i=0; i<myBtn.length; i++) {
        myBtn[i].addEventListener("click", function() {
            let tableRow = this.parentElement.parentElement;
            let tableBody = tableRow.parentElement;
            tableBody.removeChild(tableRow);
        })
    }
});