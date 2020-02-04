document.addEventListener("DOMContentLoaded", function() {

    var invoiceCheckbox = document.querySelector("#invoice");
    var invoiceData = document.querySelector("#invoiceData");
    invoiceData.style.display = "none";

    invoiceCheckbox.addEventListener("change", (check) => {
        if (check.target.checked) {
            invoiceData.style.display = "block";
        } 
        else {
            invoiceData.style.display = "none";
        }
    })
});