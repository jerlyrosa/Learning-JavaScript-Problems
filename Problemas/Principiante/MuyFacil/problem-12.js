// ¿El número es menor o igual a cero?

// Cree una función que tome un número como su único argumento y devuelva truesi es menor o igual a cero; 
// de lo contrario, regrese false.

// Ejemplos
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true

// Notas
// No olvide returnel resultado.

const  lessThanOrEqualToZero = (num)=> { 
	if(num <= 0) return true;
	else return false;
}

lessThanOrEqualToZero(5)//Paramentro que resive la funcion