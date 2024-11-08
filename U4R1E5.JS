window.onload = function() {
    crearCanvas();
    document.getElementById("clearButton").addEventListener("click", borrarCanvas);
};

function crearCanvas() {
    var tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    var body = document.body;

    for (var i = 0; i < 100; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 100; j++) {
            var celda = document.createElement("td");
            celda.style.width = "10px";
            celda.style.height = "10px";
            celda.style.border = "1px solid #ddd";
            celda.style.backgroundColor = "#fff";
            celda.addEventListener("mousemove", pintarCelda);
            celda.addEventListener("contextmenu", borrarCelda);  // Borrar celda con botón derecho
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    body.appendChild(tabla);
}

function pintarCelda(event) {
    if (event.ctrlKey) {
        event.target.style.backgroundColor = "red";
    }
    if (event.shiftKey) {
        event.target.style.backgroundColor = "blue";
    }
    if(event.altKey){
        event.target.style.backgroundColor = "white";
    }
}

function borrarCelda(event) {
    event.preventDefault();   
    event.target.style.backgroundColor = "#fff";
}

function borrarCanvas() {
    var celdas = document.querySelectorAll("td");
    celdas.forEach(function(celda) {
        celda.style.backgroundColor = "#fff";
    });
}
