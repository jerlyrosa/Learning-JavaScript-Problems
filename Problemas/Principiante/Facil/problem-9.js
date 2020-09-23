// ¿Qué se esconde entre la multitud?
// ¡Hay una palabra suelta y ahora ha intentado esconderse entre una multitud de letras altas! Ayuda a 
// escribir una función para detectar cuál es la palabra, conociendo las siguientes reglas:

// La palabra deseada está en minúsculas .
// La multitud de letras está en mayúsculas .
// Tenga en cuenta que la palabra se esparcirá entre las letras aleatorias, pero sus letras permanecerán 
// en el mismo orden .

// Ejemplos
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"


//Primera solucion

const detectWord =(str)=>{ 
const regex = /[a-z]/g;
let found = str.match(regex);
return console.log(found.join(""));

}


//Segunda solucion
const  detectWord1 = (str) => {return console.log(str.replace(/[A-Z]/g, ''));}


detectWord("UcUNFYGaFYFYGtNUH");
detectWord1("UcUNFYGaFYFYGtNUH");




