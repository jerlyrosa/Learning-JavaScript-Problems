// Concatenar número variable de matrices de entrada

// Cree una función que concatene n matrices de entrada, donde n es variable.

// Ejemplos

// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

//Primera solucion

// const  concat = (...args)=>  args.reduce((acc,el)=>  acc.concat(el),[]);

//Segunda solucion
 const concat =(...args)=> [].concat(...args);

console.log(concat([1, 2, 3], [4, 5], [6, 7]));