function mostrarOcultar() {

    var active = document.getElementById("header__links");

    active.classList.toggle("show");

}

function validator(element) {
    if (element == null || element.length == 0 || /^\s+$/.test(element)) {
        return false;
    }
    return true;
}

function Enviar() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let select = document.getElementById("select");
    let textarea = document.getElementById("textarea");

    if (!validator(name.value) ||
        !validator(email.value) ||
        !validator(select.value) ||
        !validator(textarea.value)) {
        alert("Todos los campos son obligatorios");
        return;
    }

    alert("Sus datos fueron enviados");

    name.value = "";
    email.value = "";
    select.value = 1;
    textarea.value = "";

}