//1
let numero=Math.random();
document.write("Devuelve un numero"+ numero);


let numero2=Math.random()*( 200-100 ) + 100;
document.write("<br>"+"Devuelve un numero"+ numero2+"</br>");

let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));

let min = Math.min(numero1, numero2);
let max = Math.max(numero1, numero2);
let n = Math.random() * (max - min) + min;
document.write("Número aleatorio entre numero1 y numero2: " + n + "<br>");

//5
let a = parseFloat(document.getElementById('a').value);
let b = parseFloat(document.getElementById('b').value);
let c = parseFloat(document.getElementById('c').value);

let discriminante = b * b - 4 * a * c;

let resultado = document.getElementById('resultado');
resultado.innerHTML = ''; // Limpiar resultados anteriores

if (discriminante > 0) {

    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    resultado.innerHTML = Las soluciones son: x1 = ${x1} y x2 = ${x2};

} else if (discriminante === 0) {
    let x = -b / (2 * a);
    resultado.innerHTML = La solución es: x = ${x};
} else {

    resultado.innerHTML = 'No hay soluciones reales.';
}
//7

const tabla = document.getElementById('tabla');

for (let i = 0; i <= 10; i++) {
    const fila = document.createElement('tr');
    const celdaNumero = document.createElement('td');
    const celdaSeno = document.createElement('td');

    celdaNumero.textContent = i;
    celdaSeno.textContent = Math.sin(i).toFixed(4); // Redondeamos a 4 decimales

    fila.appendChild(celdaNumero);
    fila.appendChild(celdaSeno);
    tabla.appendChild(fila);
}

//8
const imagenes = [
    'https://via.placeholder.com/300/FF5733/FFFFFF?text=Imagen+1',
    'https://via.placeholder.com/300/33FF57/FFFFFF?text=Imagen+2',
    'https://via.placeholder.com/300/3357FF/FFFFFF?text=Imagen+3'
];

const imagenAleatoria = document.getElementById('imagenAleatoria');
const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
imagenAleatoria.src = imagenes[indiceAleatorio];