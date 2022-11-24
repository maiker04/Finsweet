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
    if (!validator(document.getElementById("name").value) ||
        !validator(document.getElementById("email").value) ||
        !validator(document.getElementById("select").value) ||
        !validator(document.getElementById("texta").value)) {
        alert("Todos los campos son obligatorios");
        return;
    }

    alert("Sus datos fueron enviados");
}