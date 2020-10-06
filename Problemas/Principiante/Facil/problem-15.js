// Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.
//  miFuncion("Hola Mundo", 4) devolverá "Hola". devolverá 10. Tomar en cuenta todos lo casos de datos posibles


const cutText =(str,target)=>{
    if (typeof(str) === 'string') return str.slice(0,target);
    else return `Tu valor de entrada es un ${typeof(str)} y pido un cadena para poder cortarla`;
}


const resul = cutText('Hola Mundo',4);
console.log(resul);