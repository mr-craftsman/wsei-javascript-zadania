document.addEventListener("DOMContentLoaded", function() {

var form = document.querySelector("form");
var name = document.querySelector("#name");
var surname = document.querySelector("#surname");
var pass1 = document.querySelector("#pass1");
var pass2 = document.querySelector("pass2");
var chceckbox = document.querySelector("#agree");
var email = document.querySelector("#email");
var error = document.querySelector(".error-message");

form.addEventListener("submit", function () {
    if (!email.value.includes("@")) {
        error.innerHTML = "Email musi posiadać znak @. ";
        event.preventDefault();
    }

    if (name.value.length < 6) {
        error.innerHTML = "Twoje imię jest za krótkie. ";
        event.preventDefault();
    }

    if (surname.value.length < 6) {
        error.innerHTML = "Twoje nazwisko jest za krótkie. ";
        event.preventDefault();
    }

    if (!(pass1.value && pass2.value === pass2.value)) {
        error.innerHTML = "Hasła nie są takie same lub puste. ";
        event.preventDefault();
    }

    if (!chceckbox.checked) {
        error.innerHTML = "Musisz zaakceptować warunki. ";
        event.preventDefault();
    }
})
});