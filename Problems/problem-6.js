// Ecriba una función multiplyAll para que devuelva el producto de todos los números en las submatrices 
// de arr.






function multiplyAll(arr) {
    var product = 1;
  for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
    product =  product * arr[i][j];
       }
  }
    return console.log(product);
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  