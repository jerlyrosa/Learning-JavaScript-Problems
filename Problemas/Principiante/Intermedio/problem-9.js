// Eliminar elementos duplicados circundantes
// Cree una función que tome una secuencia de cadenas o números, elimine los duplicados circundantes y 
// devuelva una matriz de elementos sin elementos con el mismo valor uno al lado del otro y conserva el 
// orden original de los elementos.

// Ejemplos
// uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]

// uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]

// uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]
// Notas
// La secuencia inicial de elementos puede ser una cadena o una matriz.
// Las pruebas distinguen entre mayúsculas y minúsculas.





const  uniqueInOrder = (sequence) => Array.from(sequence).filter((element,index,array)=> !(element === array[index+1]));
    


console.log(uniqueInOrder("$$$%%%$$$%%%"))
// uniqueInOrder([1, 2, 2, 3, 3])