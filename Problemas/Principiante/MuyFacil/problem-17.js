// Admisión al cine

// Escriba una función que verifique si una persona puede ver una película con clasificación MA15 +. 
// Se requiere una de las siguientes dos condiciones para la admisión:

// La persona tiene al menos 15 años.
// Tienen supervisión de los padres.
// La función acepta dos parámetros agey isSupervised. Devuelve un booleano.

// Ejemplos
// acceptIntoMovie(14, true) ➞ true

// acceptIntoMovie(14, false) ➞ false

// acceptIntoMovie(16, false) ➞ true
// Notas
// age es un decimal.
// isSupervised es un booleano.

const acceptIntoMovie = (age, isSupervised) => {
    return age >= 15 || isSupervised == true ? true : false//return false 
}
acceptIntoMovie(14, false)//Paramentro que resive la funcion