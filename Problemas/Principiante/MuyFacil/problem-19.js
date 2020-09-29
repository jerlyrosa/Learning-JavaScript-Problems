// Recursión: suma
// Escribe una función que encuentre la suma de los primeros nnúmeros naturales. Haz que tu función sea recursiva.

// Ejemplos

// sum(5) ➞ 15
// // 1 + 2 + 3 + 4 + 5 = 15
// sum(1) ➞ 1
// sum(12) ➞ 78

// Notas

// Suponga que el número de entrada es siempre positivo.
// Consulte la pestaña Recursos para obtener información sobre la recursividad.

const  sum = (num)=> {
	   if (num === 0) return 0; //caso base
       else return num + sum(--num)//caso recursivo 
    
}
console.log(sum(5))