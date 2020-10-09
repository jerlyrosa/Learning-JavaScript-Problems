// Suma absoluta
// Tome una matriz de números enteros (positivos, negativos o ambos) y devuelva la suma del 
// valor absoluto de cada elemento.

// Ejemplos


// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30
// getAbsSum([-1]) ➞ 1

// Notas

// El término "valor absoluto" significa eliminar cualquier signo negativo delante de un número y
// pensar en todos los números como positivos (o cero).
// Todos los elementos de la matriz dada son números enteros.

const  getAbsSum=(arr)=> arr.reduce((acc,el)=> acc + Math.abs(el),0);
console.log(getAbsSum([2, -1, 4, 8, 10]))