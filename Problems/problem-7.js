// #100DaysOfCode 7/100
// Cree una función que tome una matriz de enteros y cadenas no negativos y devuelva una nueva matriz
//  sin las cadenas.

// Ejemplos
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]




function filterArray(arr) {
  return  console.log(arr.filter(n => typeof n === 'number'));
  }
  filterArray([1, 2, "a", "b"])