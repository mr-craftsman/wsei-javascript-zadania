document.addEventListener("DOMContentLoaded", function() {

    var name = document.querySelector("#name");
    var type = document.querySelector("#type");

    name.addEventListener("input", function() {
        type.innerHTML = cardType(name.value);
    });
    function cardType(toValid) {
        if (toValid.startsWith("4") && (toValid.length<17 && toValid.length>12)) {
            name.style.backgroundColor = "lightblue";
            return "Visa";
        } else if (toValid.startsWith("4")) {
            name.style.backgroundColor = "lightgrey";
            return "Visa";
        } else if (toValid.startsWith("5") && toValid.length === 16) {
            name.style.backgroundColor = "lightblue";
            return "Mastercard";
        } else if (toValid.startsWith("5")) {
            name.style.backgroundColor = "lightgrey";
            return "Mastercard";
        } else if ((toValid.startsWith("34") || toValid.startsWith("37")) && toValid.length === 15) {
            name.style.backgroundColor = "lightblue";
            return "American Express";
        } else if (toValid.startsWith("34") || toValid.startsWith("37")) {
            name.style.backgroundColor = "lightgrey";
            return "American Express";
        } else {
            name.style.backgroundColor = "lightgrey";
            return "Nie rozpoznano karty";
        }
    }
});