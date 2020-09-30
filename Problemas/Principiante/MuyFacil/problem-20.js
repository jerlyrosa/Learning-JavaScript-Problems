// Encuentre el índice 
// Cree una función que busque el índice de un elemento determinado en una matriz. Si el elemento está presente,
//  debería devolver el índice; de ​​lo contrario, debería volver -1.

// Ejemplos
// search([1, 2, 3, 4], 3) ➞ 2

// search([2, 4, 6, 8, 10], 8) ➞ 3

// search([1, 3, 5, 7, 9], 11) ➞ -1
// Notas
// Si el artículo no está presente, devuélvalo -1.
// La matriz dada está ordenada.

const search = (arr, item) =>  seach(arr).indexOf(item);


console.log(search([1, 2, 3, 4], 3))