// Devolver el primer elemento de una matriz

// Cree una función que tome una matriz y devuelva el primer elemento.

// Ejemplos
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

// Notas
// El primer elemento de una matriz siempre tiene un índice de 0.

//SOLUCION

const getFirstValue = (arr) => { return arr.shift()}// return = 80
// El shift()método elimina el primer elemento de una matriz y devuelve ese elemento eliminado.
// Este método cambia la longitud de la matriz.

//OTRA SOLUCION
const getFirstValue = (arr) => arr[0];// return = 80

getFirstValue([80, 5, 100])//Paramentro que resive la funcion