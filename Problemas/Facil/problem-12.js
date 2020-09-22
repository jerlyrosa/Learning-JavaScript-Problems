// Serie Robo (11): Di qué

// El tipo de seguros vuelve a llamar. Aparentemente, su cónyuge les informó que algunos artículos
//  no fueron robados en absoluto y usted no les mencionó este detalle. ¡Este es un intento de fraude!
//   Te congelas y murmuras algo ininteligible. Descubra lo que dijo.

// Dado un objeto con siempre exactamente las mismas 3 claves, devuelve una cadena que concatena 
// todos los valores y agrega la segunda clave al final. Asegúrese de dejar un espacio vacío entre 
// ellos, pero no al principio o al final de la cadena. Mire los ejemplos para obtener una imagen más clara.

// Ejemplos

// { 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"
// { 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"
// { 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"

// Notas

// Las claves siempre estarán en este orden. No confunda claves con índices.1: 2: 3:
// Califico el desafío como muy fácil porque se puede codificar, pero intente hacerlo de forma dinámica , es decir, imagine que mañana recibe un objeto con 4 teclas, su función aún funcionaría.
// Consulte los Recursos para obtener sugerencias si es necesario.


const obj ={ 1: "Mommy", 2: "please", 3: "help" }
//Primera solucion
const  sayWhat = (obj) => Object.values(obj).concat(obj[2]).join(' ');

//Segunda Solucion
// const sayWhat = obj => [1, 2, 3, 2].map(i => obj[i]).join(' ');

const resul = sayWhat(obj);
console.log(resul);