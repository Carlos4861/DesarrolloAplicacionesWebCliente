 function tieneMayuscula(texto) {
    const patron = /[A-Z]/;
    return patron.test(texto);
}

 function contieneCaracterEspecial(texto) {
    const patron = /[!@#$%^&]/;
    return patron.test(texto);
}

 function esCorreoValido(texto) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(texto);
}

 function esTarjetaCredito(texto) {
    const patron = /^(\d{4}-){3}\d{4}$|^\d{16}$/;
    return patron.test(texto);
}

 function validarLongitud(texto) {
    return texto.length >= 8;
}

 function incluyeNumero(texto) {
    const patron = /\d/;
    return patron.test(texto);
}

 