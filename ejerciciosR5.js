//1
var numero = parseInt(prompt("Introduce un número:"));

if (numero % 2 == 0) {
    document.write("El número " + numero + " es par.");
} else {
    document.write("El número " + numero + " es impar.");
}
//2

var edad = parseInt(prompt("Introduce tu edad:"));

if (edad >= 18) {
    document.write("Eres mayor de edad.");
} else {
    document.write("Eres menor de edad.");
}

//3
var edad = prompt("Introduce tu edad:");
var localidad = prompt("¿Dónde naciste?");
edad = parseInt(edad);

if (edad > 25 && localidad.toLowerCase() === "madrid") {
    document.write("¡Enhorabuena!");
} else {
    document.write("No cumples los requisitos.");
}

//4
var numero = prompt("Introduce un número:");
numero = parseFloat(numero);

if (numero > 100) {
    var descuento = numero * 0.15;
    var nuevoNumero = numero - descuento;
    document.write("Se aplica un descuento del 15%. El nuevo número es: " + nuevoNumero);
} else {
    document.write("El número no supera los 100, no se aplica descuento.");
}

//5
var nombre = prompt("Introduce tu nombre:");

if (nombre == "Pablo" || nombre == "Eduardo") {
    document.write("Bienvenido " + nombre);
} else if (nombre == "Ana" || nombre == "Clara") {
    document.write("Bienvenida " + nombre);
} else {
    document.write("Nombre no reconocido.");
}

//6
var edad = prompt("Introduce tu edad:");
var localidad = prompt("¿Dónde vives?");
edad = parseInt(edad);

if (localidad.toLowerCase() === "madrid" && edad >= 18 && edad <= 30) {
    document.write("Puedes acceder al carnet de empresarios emprendedores.");
} else {
    document.write("No cumples los requisitos.");
}


//1
var nombre = prompt("Introduce tu nombre:");
var apellidos = prompt("Introduce tus apellidos:");

if (nombre == "Ricardo") {
    document.write("Tus apellidos son: " + apellidos);
} else {
    document.write("Tus apellidos son: " + apellidos);
}

//2
var edad = parseInt(prompt("Introduce tu edad:"));

if (edad >= 67) {
    document.write("Puedes jubilarte.");
} else {
    document.write("Aún no puedes jubilarte.");
}

//3

var edad = prompt("Introduce tu edad:");
edad = parseInt(edad);

if (edad < 5) {
    document.write("Debes estar en el jardín de infancia.");
} else if (edad >= 6 && edad <= 11) {
    document.write("Debes estar en Primaria.");
} else if (edad >= 12 && edad <= 16) {
    document.write("Debes estar en la ESO.");
} else if (edad >= 17 && edad <= 21) {
    document.write("Debes estar en Bachillerato o Ciclos.");
} else if (edad > 21) {
    document.write("Debes estar en la Universidad.");
} else {
    document.write("Edad fuera del rango esperado.");
}

//4
var hermanos = prompt("¿Cuántos hermanos tienes?");
var cantidad = prompt("Introduce la cantidad:");
hermanos = parseInt(hermanos);
cantidad = parseFloat(cantidad);

if (hermanos > 3) {
    var descuento = cantidad * 0.15;
    var nuevaCantidad = cantidad - descuento;
    document.write("Tienes más de tres hermanos. La cantidad con 15% de descuento es: " + nuevaCantidad);
} else if (hermanos > 0 && hermanos <= 3) {
    var descuento = cantidad * 0.05;
    var nuevaCantidad = cantidad - descuento;
    document.write("Tienes menos de tres hermanos. La cantidad con 5% de descuento es: " + nuevaCantidad);
} else {
    document.write("No tienes hermanos. La cantidad es: " + cantidad);
}

//5
var examen1 = prompt("Introduce la nota del primer examen:");
var examen2 = prompt("Introduce la nota del segundo examen:");
var trabajo1 = prompt("Introduce la nota del primer trabajo:");
var trabajo2 = prompt("Introduce la nota del segundo trabajo:");

examen1 = parseFloat(examen1);
examen2 = parseFloat(examen2);
trabajo1 = parseFloat(trabajo1);
trabajo2 = parseFloat(trabajo2);

var mediaExamenes = (examen1 + examen2) / 2;
var mediaTrabajos = (trabajo1 + trabajo2) / 2;

var notaFinal = (mediaExamenes * 0.75) + (mediaTrabajos * 0.25);

if (notaFinal >= 5 && examen1 >= 4.5 && examen2 >= 4.5 && trabajo1 >= 4.5 && trabajo2 >= 4.5) {
    document.write("Aprobado con una nota final de: " + notaFinal);
} else {
    document.write("Suspendido con una nota final de: " + notaFinal);
}

//1
var mes = prompt("Introduce el nombre de un mes:");

switch (mes.toLowerCase()) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        document.write(mes + " tiene 31 días.");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        document.write(mes + " tiene 30 días.");
        break;
    case "febrero":
        document.write(mes + " tiene 28 días (o 29 en años bisiestos).");
        break;
    default:
        document.write("Mes no válido.");
}

//2
var numero = prompt("Introduce un número:");
numero = parseInt(numero);

switch (true) {
    case (numero % 2 === 0):
        document.write("El número " + numero + " es par.<br>");
        break;
    default:
        document.write("El número " + numero + " no es par.<br>");
}

switch (true) {
    case (numero % 3 === 0):
        document.write("El número " + numero + " es múltiplo de 3.<br>");
        break;
    default:
        document.write("El número " + numero + " no es múltiplo de 3.<br>");
}

switch (true) {
    case (numero % 5 === 0):
        document.write("El número " + numero + " es múltiplo de 5.<br>");
        break;
    default:
        document.write("El número " + numero + " no es múltiplo de 5.<br>");
}


//3
var numero1 = prompt("Introduce el primer número:");
var numero2 = prompt("Introduce el segundo número:");
var operacion = prompt("Introduce la operación (+, -, *, /):");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

switch (operacion) {
    case "+":
        document.write("El resultado de la suma es: " + (numero1 + numero2));
        break;
    case "-":
        document.write("El resultado de la resta es: " + (numero1 - numero2));
        break;
    case "*":
        document.write("El resultado de la multiplicación es: " + (numero1 * numero2));
        break;
    case "/":
        if (numero2 !== 0) {
            document.write("El resultado de la división es: " + (numero1 / numero2));
        } else {
            document.write("Error: División por cero.");
        }
        break;
    default:
        document.write("Operación no válida.");
}
