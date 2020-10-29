// Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro
// , pe. miFuncion(2002) devolverá true.

const capicua =(target)=>{
  target += '';
  target.split('').reverse().join('');
  return Math.abs(target)
   

}
const resul = capicua(2001);
console.log(resul);
