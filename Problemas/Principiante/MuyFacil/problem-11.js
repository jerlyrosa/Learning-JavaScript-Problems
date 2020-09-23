// Convertir una matriz en una cadena
// Cree una función que tome una matriz de números o letras y devuelva una cadena.

// Ejemplos

// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


const arrayToString = (arr)=> { return arr.join('');}//return "123456"

arrayToString([1, 2, 3, 4, 5, 6]); //Paramentro que resive la funcion