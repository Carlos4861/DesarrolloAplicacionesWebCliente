 const cube = document.getElementById("cube");

 if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
         const xRotation = event.beta - 90;  
        const yRotation = event.gamma;       

         cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
} else {
    alert("Tu dispositivo no soporta eventos de orientación.");
}
