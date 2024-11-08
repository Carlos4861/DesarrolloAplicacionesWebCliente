//9

n = parseInt(prompt("Ingrese un número: "));
document.write(`Los divisores de ${n} son:<br>`);
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        document.write(i + "<br>");
    }
}

//10

n = parseInt(prompt("Ingrese un número mayor o igual a 2: "));
if (n < 2) {
    document.write("El número debe ser mayor o igual a 2.");
} else {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }
    document.write(esPrimo ? `${n} es un número primo.` : `${n} no es un número primo.`);
}

//11

n = parseInt(prompt("Ingrese un número: "));
let sumaDivisores = 0;
for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        sumaDivisores += i;
    }
}
document.write(sumaDivisores === n ? `${n} es un número perfecto.` : `${n} no es un número perfecto.`);


//12

n = parseInt(prompt("Ingrese el valor de N: "));
let contador = 0;
let num = 2;
while (contador < n) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        document.write(num + "<br>");
        contador++;
    }
    num++;
}

//13
n = parseInt(prompt("Ingrese el valor de N: "));
let encontrados = 0;
let numero = 1;
while (encontrados < n) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    if (sumaDivisores === numero) {
        document.write(numero + "<br>");
        encontrados++;
    }
    numero++;
}

//14

let tamano = 5;
for (let i = 0; i < tamano; i++) {
    document.write("*****<br>");
}

tamano = 5;
document.write("*****<br>");
for (let i = 1; i < tamano - 1; i++) {
    document.write("*&nbsp;&nbsp;&nbsp;&nbsp;*<br>");
}
document.write("*****<br>");

let size = 8;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        document.write((i + j) % 2 === 0 ? "*" : "&nbsp;");
    }
    document.write("<br>");
}

tamano = 5;
for (let i = 1; i <= tamano; i++) {
    document.write("*".repeat(i) + "<br>");
}

tamano = 5;
for (let i = 1; i <= tamano; i++) {
    let espacios = tamano - i;
    let estrellas = i * 2 - 1;
    document.write("&nbsp;".repeat(espacios) + "*".repeat(estrellas) + "<br>");
}

tamano = 5;
for (let i = tamano; i >= 1; i--) {
    let espacios = tamano - i;
    let estrellas = i * 2 - 1;
    document.write("&nbsp;".repeat(espacios) + "*".repeat(estrellas) + "<br>");
}

tamano = 5;
for (let i = 1; i <= tamano; i++) {
    let espacios = tamano - i;
    let estrellas = i * 2 - 1;
    document.write("&nbsp;".repeat(espacios) + "*".repeat(estrellas) + "<br>");
}
for (let i = tamano - 1; i >= 1; i--) {
    let espacios = tamano - i;
    let estrellas = i * 2 - 1;
    document.write("&nbsp;".repeat(espacios) + "*".repeat(estrellas) + "<br>");
}
