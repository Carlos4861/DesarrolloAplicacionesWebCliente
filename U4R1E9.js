 
const imagen = document.getElementById("imagen");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

 imagen.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - imagen.offsetLeft;
    offsetY = event.clientY - imagen.offsetTop;
    imagen.style.cursor = "grabbing";
});

 document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        imagen.style.left = `${event.clientX - offsetX}px`;
        imagen.style.top = `${event.clientY - offsetY}px`;
    }
});

 document.addEventListener("mouseup", () => {
    isDragging = false;
    imagen.style.cursor = "pointer";
});
