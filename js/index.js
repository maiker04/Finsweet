function mostrarOcultar() {

    var active = document.getElementById("header__links");

    active.classList.toggle("show");

}
function Enviar() {
    var b = true;
    var formulario = document.getElementById("name").value;
    var formulario2 = document.getElementById("email").value;
    var formulario3 = document.getElementById("select").value;
    var formulario4 = document.getElementById("texta").value;

    if (formulario == null || formulario.length == 0 || /^\s+$/.test(formulario)) {
        b = false;
    }
    if (formulario2 == null || formulario2.length == 0 || /^\s+$/.test(formulario2)) {
        b = false;
    }
    if (formulario3 == null || formulario3.length == 0 || /^\s+$/.test(formulario3)) {
        b = false;
    }
    if (formulario4 == null || formulario4.length == 0 || /^\s+$/.test(formulario4)) {
        b = false;
    }

    if (b == true) {
        alert("Sus datos fueron enviados");
    }
    return b;
}