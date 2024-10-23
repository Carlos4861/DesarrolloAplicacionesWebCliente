//1

for (let i = 1; i <= 10; i++) {
    document.write(i + "<hr>");
}

//2

let numero = parseInt(prompt("Introduce un número:"));

for (let i = numero; i <= 100; i++) {
    document.write(i + "<br>");
}

//3

let numero;

do{
    let numero= parseInt(prompt("Introduce un numero"));

        if(numero!==0){
            document.write("El numero ingresado es"+numero);

        }
}while(numero !== 0);

//4
let palabra;

do {
    palabra = prompt("Introduce una palabra (Escribe 'SALIR' para terminar):");

    if (palabra.toUpperCase() !== "SALIR") {
        document.write(palabra + "<br>");
    }

} while (palabra.toUpperCase() !== "SALIR");

//5

let suma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = prompt("Introduce un número:");
    suma += parseInt(numero);
}

document.write("La suma total es: " + suma);

//6

let numero = prompt("Introduce un número para ver su tabla de multiplicar:");
numero = parseInt(numero);

for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}


//7
let numeroSecreto = prompt("Introduce un número secreto:");
numeroSecreto = parseInt(numeroSecreto);
let numeroAdivinado;

do {
    numeroAdivinado = prompt("Adivina el número secreto:");
    numeroAdivinado = parseInt(numeroAdivinado);

    if (numeroAdivinado < numeroSecreto) {
        document.write("El número es mayor que " + numeroAdivinado + "<br>");
    } else if (numeroAdivinado > numeroSecreto) {
        document.write("El número es menor que " + numeroAdivinado + "<br>");
    }

} while (numeroAdivinado !== numeroSecreto);
document.write("¡Felicidades! Adivinaste el número.");
