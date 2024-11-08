function validarNombre() {
    const nombre = document.getElementById("nombre").value;
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    mostrarMensaje("nombre", nombreRegex.test(nombre));
}

function validarApellidos() {
    const apellidos = document.getElementById("apellidos").value;
    const apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    mostrarMensaje("apellidos", apellidosRegex.test(apellidos));
}

function validarDNI() {
    const dni = document.getElementById("dni").value;
    const dniRegex = /^\d{8}[A-Z]$/;
    mostrarMensaje("dni", dniRegex.test(dni));
}

function validarTelefono() {
    const telefono = document.getElementById("telefono").value;
    const telefonoRegex = /^\d{9}$/;
    mostrarMensaje("telefono", telefonoRegex.test(telefono));
}

function validarCorreo() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    mostrarMensaje("email", emailRegex.test(email));
}

function validarUsuario() {
    const username = document.getElementById("username").value;
    const usernameRegex = /^(?=.*\d)(?=.*[.,!@#$%^&*])[A-Za-z\d.,!@#$%^&*]{8,}$/;
    mostrarMensaje("username", usernameRegex.test(username));
}

function mostrarMensaje(campo, esValido) {
    const errorSpan = document.getElementById(campo + "Error");
    const successSpan = document.getElementById(campo + "Success");
    if (esValido) {
        errorSpan.style.display = "none";
        successSpan.style.display = "inline";
    } else {
        errorSpan.style.display = "inline";
        successSpan.style.display = "none";
    }
}
