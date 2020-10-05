// Encontrar elementos comunes
// Cree una función que tome dos matrices de números "ordenadas" y devuelva una matriz de números que son comunes
//  a ambas matrices de entrada.

// Ejemplos
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

const commonElements = (arr1, arr2) =>arr2.filter((element)=>arr1.includes(element));


console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));