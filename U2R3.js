//1-a

function inviertirCadena(cad_arg){
    let cadena =""; 
    for(let i = cad_arg.length-1;i>=0; i--){
         cadena = cad_arg[i];
    }
       return cadena;
}

let x= prompt("Haz una cadena");

document.write("La cadena invertida es "+inviertirCadena(x));

//b
function inviertePalabras(cad_arg){
    let palabra="";
    for(let i=cad_arg.length-1; i>=0;i--){
        palabra += cad_arg[i];
    }
    return palabra;
}
let y = prompt ("Elige una palabra");
document.write("La plabra invertida es "+ inviertePalabras(y));
    
//c

function encuentraPalabraMasLarga(cad_arg) {
    const palabras = cad_arg.split(" ");
    let maxLongitud = 0;

    for (let i = 0; i < palabras.length; i++) {
        const longitudActual = palabras[i].length;
        if (longitudActual > maxLongitud) {
            maxLongitud = longitudActual;
        }
    }
    return maxLongitud;
}
let z = prompt ("Elige una palabra");
    //d
function filtraPalabrasMasLargas(cad_arg, i) {
    const palabras = cad_arg.split(" ");
    let contador = 0;

    for (let palabra of palabras) {
        if (palabra.length > i) {
            contador++;
        }
    }
    return contador;
}




    //e

function cadenaBienFormada(cad_arg) {
    if (cad_arg.length === 0) return "";

    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
}

/*
//Ejercicio 2
function informacionCadena(cad_arg) {
    if (cad_arg === cad_arg.) {
        return "La cadena está formada solo por mayúsculas.";
    }
    else if (cad_arg === cad_arg.) {
        return "La cadena está formada solo por minúsculas.";
    }
    else {
        return "La cadena tiene una mezcla de mayúsculas y minúsculas.";
}


//Ejercicio 7

function esPalindromo(cad_arg) {
    cad_arg = cad_arg;
    let longitud = cad_arg.length;

    for (let i = 0; i < longitud / 2; i++) {
        if (cad_arg[i] !== cad_arg[longitud - 1 - i]) {
            return false;  
        }
    }
    return true; 
}

//9
function escribirPalabraEnTabla(palabra) {
    let n = palabra.length;

    let primeraFila = palabra.;
    console.log(primeraFila);

    for (let i = 1; i < n - 1; i++) {
        let filaIntermedia = palabra.slice(i).split('').join(' ');
        console.log(filaIntermedia);
    }

    let ultimaFila = palabra;
    console.log(ultimaFila);
}
*/