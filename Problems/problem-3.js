// #100DaysOfCode 3/100



/* Dada una matriz ordenada y un valor objetivo, devuelve el índice si se encuentra el objetivo. Si no 
es así, devuelva el índice donde estaría si estuviera insertado en orden.

Puede asumir que no hay duplicados en la matriz.

Ejemplo 1:

  Input:[1,3,5,6], 5
  Output: 2

  Input: [1,3,5,6], 7
Output: 4
*/


let searchInsert = (arr, k)=> {
    for(let i =0; i <  arr.length; i++ ){
       if( arr[i] >= k ){
         return console.log(i);
       } else{
             arr.push(k);
       }
    } ;  
};

searchInsert([1,3,5,6],2);