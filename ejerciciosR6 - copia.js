//4.10

for (let i = 1; i <= 6; i++) {
    document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
}


//4.11

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

for (let i = 0; i < numColumnas; i++) {
    document.write('<td width="' + ancho + '">&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');

//4.12

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

for (let i = 0; i < numColumnas; i++) { 
    if (i % 2 == 0) {
    document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>'); // Columnas pares
        } else {
    document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>'); // Columnas impares
    }
}

document.write('</tr>');
document.write('</table>');

//4.13

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

let i = 0;

while (i < numColumnas) {
    document.write('<td width="' + ancho + '">&nbsp;</td>');
    i++; 
}

document.write('</tr>');
document.write('</table>');

//4.14

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

let i = 0;

while (i < numColumnas) {
    if (i % 2 == 0) {
        document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
    } else {
        document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
    }
    i++;
}

document.write('</tr>');
document.write('</table>');

//4.17

document.write('<h2>Tablas de Multiplicar</h2>');

for (let i = 1; i <= 10; i++) {
    document.write('<h3>Tabla del ' + i + '</h3>'); 
    for (let j = 1; j <= 10; j++) {
        document.write(i + ' x ' + j + ' = ' + (i * j) + '<br>'); 
    }
    document.write('<br>'); 
}

//4.18

let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
let numFilas = parseInt(prompt("Introduce el número de filas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="2" cellpadding="2" bgcolor="black">');

for (let i = 0; i < numFilas; i++) {
    document.write('<tr>');


    for (let j = 0; j < numColumnas; j++) {
        document.write('<td width="' + ancho + '" height="' + alto + '" bgcolor="white">&nbsp;</td>'); // Crear una celda
    }

    document.write('</tr>');
}
document.write('</table>');

//4.19

let tamanoCelda = parseInt(prompt("Introduce el tamaño de las celdas (en píxeles):"));

document.write('<table border="1" cellspacing="0" cellpadding="0">');


for (let fila = 0; fila < 8; fila++) {
    document.write('<tr>'); 

    for (let columna = 0; columna < 8; columna++) {
      
        if ((fila + columna) % 2 === 0) {
            document.write('<td width="' + tamanoCelda + '" height="' + tamanoCelda + '" bgcolor="white">&nbsp;</td>');
        } else {
            document.write('<td width="' + tamanoCelda + '" height="' + tamanoCelda + '" bgcolor="black">&nbsp;</td>');
        }
    }

    document.write('</tr>'); 
}

document.write('</table>'); 