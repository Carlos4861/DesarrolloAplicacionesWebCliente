//1

let n = parseInt(prompt("Introduce un número (n):"));

document.write("<h3>Números de 1 a " + n + " (aumentando de 1 en 1):</h3>");
for (let i = 1; i <= n; i++) {
    document.write(i + " ");
}

//2
let n = parseInt(prompt("Introduce un número (n):"));

document.write("<h3>Números de 1 a " + n + " (aumentando de 2 en 2):</h3>");
for (let i = 1; i <= n; i += 2) {
    document.write(i + " ");
}

//3
let n = parseInt(prompt("Introduce un número (n):"));

document.write("<h3>Números de " + n + " a 1 (disminuyendo de 1 en 1):</h3>");
for (let i = n; i >= 1; i--) {
    document.write(i + " ");
}

//4

for (let i = 1; i <= 10; i++) {
    document.write(`9 x ${i} = ${9 * i}<br>`);
}

//5

let num = prompt("Ingrese un número: ");
if (/^\d+$/.test(num)) {
    let suma = 0;
    for (let i = 0; i < num.length; i++) {
        suma += parseInt(num[i]);
    }
    document.write(`La suma de los dígitos es: ${suma}`);
} else {
    document.write("El número ingresado contiene letras o caracteres inválidos.");
}

//6

let N = parseInt(prompt("Ingrese el valor de N: "));
let M = parseInt(prompt("Ingrese el valor de M: "));
let sumaPares = 0;
for (let i = N; i <= M; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}
document.write(`La suma de los números pares entre ${N} y ${M} es: ${sumaPares}`);

//7

n = parseInt(prompt("Ingrese el valor de N: "));
let sumatoria = 0;
for (let i = 1; i <= n; i++) {
    sumatoria += i;
}
document.write(`La sumatoria de los primeros ${n} números es: ${sumatoria}`);

//8

n = parseInt(prompt("Ingrese el valor de N: "));
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
document.write(`El factorial de ${n} es: ${factorial}`);

