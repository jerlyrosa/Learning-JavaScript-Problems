// Haga una  función llamada countdowncon un parámetro ( n). La función debe utilizar 
// recursión para devolver una matriz que contiene los números enteros na través 1basado 
// en el nparámetro. Si se llama a la función con un número menor que 1, la función debe 
// devolver una matriz vacía. Por ejemplo, llamar a esta función con n = 5debería devolver 
// la matriz [5, 4, 3, 2, 1]. Su función debe usar la recursión llamándose a sí misma y no 
// debe usar bucles de ningún tipo.


 const  countdown =(n)=>{
  if (n < 1)  return [];//caso base
  else {
    const countArray = countdown(n - 1);//caso recursivo
     countArray.unshift(n);
     return countArray;
  }
}
console.log(countdown(5));
