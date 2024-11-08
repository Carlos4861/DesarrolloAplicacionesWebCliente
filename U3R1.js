/* 
//2
function lanzamiento(){

    var numero = Math.floor(Math.random() * 6) + 1;

    document.write("El resultado es "+numero);
}
lanzamiento();

*/

//3

function lanzamiento(){

    var numero = Math.floor(Math.random() * 6) + 1;

    document.getElementById("resultado").textContent = numero;
}
