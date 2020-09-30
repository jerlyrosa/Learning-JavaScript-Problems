// El problema de la granja
// En este desafío, un granjero te pide que le digas cuántas patas se pueden contar entre todos sus animales.
//  El agricultor cría tres especies:

// chickens = 2 patas
// cows = 4 patas
// pigs = 4 patas
// El granjero ha contado sus animales y te da un subtotal para cada especie. Tienes que implementar una función
//  que devuelva el número total de patas de todos los animales.

// Ejemplos
// animals(2, 3, 5) ➞ 36
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50

//Primera Solucion
// const  animals=(chickens, cows, pigs)=> {
// let  resul = 0;
// if(chickens) resul  += chickens*2;
// if(cows) resul  += cows*4;
// if(pigs) resul  += pigs*4;
// return resul;

// }

//Segunda Solucion
const animals = (chickens, cows, pigs)=>  (chickens * 2) + (cows + pigs) * 4;

console.log(animals(1, 2, 3))