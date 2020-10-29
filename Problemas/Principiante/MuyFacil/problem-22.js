// Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomNumber =(max,min) => Math.round(Math.random() * (max - min) + min);

const resul = randomNumber(501,600);
console.log(resul);