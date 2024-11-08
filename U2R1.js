//1
/*const fechaActual = new Date();

const infoFechaDiv = document.getElementById('info-fecha');
infoFechaDiv.innerHTML = "Año actual: " + fechaActual.getFullYear() + "<br>" +
"Mes actual: " + (fechaActual.getMonth() + 1) + "<br>" +
"Día actual: " + fechaActual.getDate() + "<br>" +
"Hora actual: " + fechaActual.getHours() + "<br>" +
"Minutos actuales: " + fechaActual.getMinutes() + "<br>" +
"Segundos actuales: " + fechaActual.getSeconds() + "<br>";

//2

const fechaHoy = new Date();

const fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate() + 85);

const fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate() - 187);

const fecha85Mas2Anios = new Date(fecha85);
fecha85Mas2Anios.setFullYear(fecha85Mas2Anios.getFullYear() + 2);

const fecha187Menos24Horas = new Date(fecha187);
fecha187Menos24Horas.setHours(fecha187Menos24Horas.getHours() - 24);

const diferenciaMilisegundos = fecha85 - fecha187;
const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));


//3


let x=60;

function reloj(){
    document.write("El valor de x es"+x);
    x--;
}

setInterval(reloj,1000);
*/

//4

function actualizarReloj() {
    const fecha = new Date(); 
    let horas = fecha.getHours(); 
    let minutos = fecha.getMinutes(); 
    let segundos = fecha.getSeconds(); 

    horas = (horas < 10 ? '0' : '') + horas;
    minutos = (minutos < 10 ? '0' : '') + minutos;
    segundos = (segundos < 10 ? '0' : '') + segundos;

   
    console.log(`${horas}:${minutos}:${segundos}`);

    
    setTimeout(actualizarReloj, 1000);
}
actualizarReloj();
