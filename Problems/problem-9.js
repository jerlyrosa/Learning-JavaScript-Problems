var arr = [1,2, 2, 4,];

const arrayFilter=(arr)=>{
let result = arr.filter( (element, index, array) =>{
    console.log(element);// Primer elemento del Array
    console.log(index);// indice de cada Array
    console.log(array)// copia de Array  original;
     return element === 2// condicion
    
    });
   return console.log(result)// result = [ 2, 2 ]
}

arrayFilter(arr);

