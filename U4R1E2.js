 function mostrarPosicion(event) {
     var x = event.clientX;
    var y = event.clientY;
     document.getElementById("posicion").innerText = "Posición del ratón: X = " + x + ", Y = " + y;
}

 window.onload = function() {
    document.addEventListener("mousemove", mostrarPosicion);
};
