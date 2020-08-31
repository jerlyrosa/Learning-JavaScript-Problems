// ¡Devuélveme algo!

// Escribe una función que devuelva la cadena "something" unida con un espacio " "y el argumento dado a.

// Ejemplos
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

//SOLUCION

const  giveMeSomething = (a) => { return 'something'.concat(' ',a)}// return = "something Bob Jane"
// metodo concat() devuelve una nueva cadena con los valores que nuevos que le pases
giveMeSomething('Bob Jane')//Paramentro que resive la funcion