// Encuentra los números más pequeños y más grandes
// Cree una función que tome una matriz de números y devuelva tanto el número mínimo como el máximo, en ese orden.

// Ejemplos

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

// Notas
// Todas las matrices de prueba tendrán al menos un elemento y son válidas.

//Solucion 1
const  minMax=(arr)=> {
    let resul = [(Math.min(...arr)), Math.max(...arr)];
	return console.log(resul);
}

  //Solucion 2
const minMax2=(arr)=> [ (Math.min(...arr)), Math.max(...arr)]

minMax([1, 2, 3, 4, 5]);
console.log(minMax2([1, 2, 3, 4, 5]));

