// Clasificar lo incalculable
// En este desafío, se le dará una matriz similar a la siguiente:

// [[3], 4, [2], [5], 1, 6]

// En palabras, los elementos de la matriz son un número entero o una matriz que contiene un solo entero
// .Los humanos podemos ver claramente que esta matriz se puede ordenar razonablemente según
//  "el contenido de los elementos" como:

// [1, [2], [3], 4, [5], 6]

// Cree una función que, dada una matriz similar a la anterior, ordene la matriz de acuerdo con el 
// "contenido de los elementos".


const sortIt= (arr) => arr.sort();
sortIt([4, [1], 3]) 