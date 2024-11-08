/*
const btn = document.getElementsByTagName("button");


btn[0].addEventListener("click",()=>console.log("Has hecho click"))
btn[1].addEventListener("click",()=>console.log("Lo has clickeado de nuevo"))

const btn = document.getElementsByTagName("button");

btn[].addEventListener("click",()=>document.body.style.backgroundColor="red");
btn[1].addEventListener("click",()=>document.body.style.backgroundColor="blue");
*/
const btn = document.getElementsByTagName("button");
const cajaTexto=docment.getElementsByID("text box");

function saltaAlert()
{
    console.log(e);
    document.body.style.backgroundColor= "red"
}

btn[0].addEventListener("mouseover",saltaAlert);
btn[0].addEventListener("mouseout",()=>document.body.style.backgroundColor="white");
btn[0].addEventListener("click",()=>alert("Has Clickado"));
btn[1].addEventListener("click",()=>btn[0].removeEventListener("click",saltaAlert));
