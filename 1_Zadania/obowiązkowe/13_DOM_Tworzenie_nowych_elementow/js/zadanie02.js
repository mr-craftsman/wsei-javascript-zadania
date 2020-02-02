document.addEventListener("DOMContentLoaded", function() {

    var orderId = document.querySelector("#orderId");
    var orderItem = document.querySelector("#item");
    var orderQuantity = document.querySelector("#quantity");
    var addBttn = document.querySelector("#addBtn");
    var orderTable = document.querySelector("#orders");

    addBttn.addEventListener("click", function() {
        let tRow = document.createElement("tr");
        let tData1 = document.createElement("td");
        let tData2 = document.createElement("td");
        let tData3 = document.createElement("td");

        tData1.innerText = orderId.value;
        tData2.innerText = orderItem.value;
        tData3.innerText = orderQuantity.value;

        tRow.appendChild(tData1);
        tRow.appendChild(tData2);
        tRow.appendChild(tData3);

        orderTable.appendChild(tRow);
        clearForm();
    })
    function clearForm() {
        orderId.value = " - ";
        orderItem.value = " - ";
        orderQuantity.value = " - ";
    }
});