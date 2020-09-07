// Verificación de igualdad
// En este desafío, debe verificar la igualdad de dos parámetros dados diferentes: ay b.

// Tanto el valor como el tipo de parámetros deben probarse para tener una igualdad coincidente. 
// Los posibles tipos de parámetros dados son:

// Números
// Instrumentos de cuerda
// Booleanos ( falseo true)
// Los valores especiales: undefined, nullyNaN
// ¿Qué ha aprendido hasta ahora que le permitirá realizar dos comprobaciones diferentes (valor y tipo) con una sola declaración?

// Implemente una función que devuelva truesi los parámetros son iguales y falsesi son diferentes.

// Ejemplos

// checkEquality(1, true) ➞ false
// // A number and a boolean: their type is different.
// checkEquality(0, "0") ➞ false
// // A number and a string: their type is different.
// checkEquality(1,  1) ➞ true
// // A number and a number: their type and value are equal.


const checkEquality = (a, b) =>{   return a === b ? true : false}//return false
checkEquality(0, "0")//Paramentro que resive la funcion

