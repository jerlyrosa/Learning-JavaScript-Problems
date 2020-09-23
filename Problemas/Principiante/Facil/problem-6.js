// #100DaysOfCode 8/100

// Cree una función que tome una matriz de cadenas y números, y filtre la matriz para que devuelva solo 
// una matriz de enteros.
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

const filterArray =(arr)  => {return  arr.filter(arr => Number.isInteger(arr));}
filterArray([1, 2, 3, "a", "b", 4]);