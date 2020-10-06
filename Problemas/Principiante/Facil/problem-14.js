// Programa una función que cuente el número de caracteres de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá 10. Tomar en cuenta todos lo casos de datos posibles


const miFuncion =(str)=>{
   if (typeof(str) === 'string') return str.length;
   else return `Tu valor de entra es un ${typeof(str)} y pido un cadena`;
}


const resul  = miFuncion('Hola Mundo');
console.log(resul);