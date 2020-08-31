// Borde máximo de un triángulo

// Cree una función que encuentre el rango máximo del tercer borde de un triángulo, donde las longitudes 
// de los lados son todos números enteros.

// Ejemplos
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 10

// Notas
// (valor1 + valor2) - 1 = rango máximo del tercer borde.
// Las longitudes de los lados del triángulo son números enteros positivos.
// No olvide returnel resultado.

//SOLUCION

const nextEdge = (side1, side2) => {return (side1 + side2) - 1}// return = 10

nextEdge(9,2)//Paramentro que resive la funcion