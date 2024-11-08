function paresImpares() {
    let numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);
   
    console.log("Array original:");
   console.log(numeros);

    let pares = numeros.filter(num => num % 2 === 0);
   let impares = numeros.filter(num => num % 2 !== 0);

    let ordenado = [...pares, ...impares];

    console.log("Array con pares e impares separados:");
   console.log(ordenado);
}

paresImpares();