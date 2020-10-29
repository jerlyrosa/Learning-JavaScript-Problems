//  Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//   pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const countWord = (str,target) =>{
   let contador = 0;
  for (const iterator of str.split(' ')) {
      if(iterator === target) contador++;
  }
  return contador;
  
}
const resul = countWord("hola mundo adios mundo", "mundo");
console.log(resul);