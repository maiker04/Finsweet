function mostrarOcultar() {

    var active = document.getElementById("header__links");

    active.classList.toggle("show");

}

function validator(element) {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let select = document.getElementById("select");
    let textarea = document.getElementById("textarea");

    if (name.value === "") {
        document.getElementById("required-name").classList.add("show");
    } else {
        document.getElementById("required-name").classList.remove("show");
        document.getElementById("required-name").classList.add("hidden");
    }
    if (email.value === "") {
        document.getElementById("required-email").classList.add("show");
    } else {
        document.getElementById("required-email").classList.remove("show");
        document.getElementById("required-email").classList.add("hidden");
    }
    if (select.value === "1") {
        document.getElementById("required-select").classList.add("show");
    } else {
        document.getElementById("required-select").classList.remove("show");
        document.getElementById("required-select").classList.add("hidden");
    }
    if (textarea.value === "") {
        document.getElementById("required-descript").classList.add("show");
    } else {
        document.getElementById("required-descript").classList.remove("show");
        document.getElementById("required-descript").classList.add("hidden");
    }
    if (element == null || element.length == 0 || /^\s+$/.test(element)) {
        return false;
    } else {
        return true;
    }
}

function Enviar() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let select = document.getElementById("select");
    let textarea = document.getElementById("textarea");

    if (validator(email.value) && /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)) {
        console.log(email.value);
    } else {
        alert("The email address is incorrect " + email.value);
        console.log(email.value);
    }

    if (!validator(name.value) ||
        !validator(select.value) ||
        !validator(email.value) ||
        !validator(textarea.value)) {
        alert("All fields are required");
        return;
    }
    if (validator(name.value) &&
        validator(select.value) &&
        validator(email.value) &&
        validator(textarea.value) &&
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)) {

        console.log("entro")

        if (select.value != 1) {
            alert("your data was sent successfully");
        } else {
            alert("All fields are required");
        }
    } else {
        console.log(" no entro")
    }

    name.value = "";
    email.value = "";
    select.value = "1";
    textarea.value = "";

}