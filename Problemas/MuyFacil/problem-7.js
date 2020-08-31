// Convertir horas en segundos

// Escribe una función que convierta hoursen segundos.

// Ejemplos
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400

// Notas
// 60 segundos en un minuto, 60 minutos en una hora
// No olvide returnsu respuesta.

//DOS SOLUCIONONES

//En esta primera solucion multiplicamos 60 minutos por el valor de la hora que recibe(10),ya que una hora
//es igual a 60 minutos. Esto va hacer igual a 600 minutos.
// Luego muiltipliacamos  600 minutos por 60 segundo, ya que un minutos es iagual a 60 segundo.
const howManySeconds = (hours) => { return (60 * hours) * 60}//return =36000

//Aqui solo multiplicamos 3600 segundo que es 60 minutos por la hora que recibe la funcion
const howManySeconds = (hours) => { return 3600 * hours}//return = 36000

howManySeconds(10);//Paramentro que resive la funcion