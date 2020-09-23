// ¿Cuánto es verdad?

// Cree una función que devuelva el número de valores verdaderos que hay en una matriz.

// Ejemplos

// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

// Notas

// Devuelve 0si se le da una matriz vacía.
// Todos los elementos de la matriz son del tipo bool ( trueo false).

//Primera solucion 

// const  countTrue= (arr)=> { return arr.reduce((acc, el) => el === true? acc +=1: acc,0);}

//Segunda solucion 

const countTrue = (arr) =>arr.filter(Boolean).length;

const resul = countTrue([true, false, false, true, false])
console.log(resul);
