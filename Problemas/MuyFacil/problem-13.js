// Uso del operador "&&"

// JavaScript tiene un operador lógico &&. El &&operador toma dos valores booleanos y devuelve truesi ambos 
// valores son true.

// Considere a && b:

// ase comprueba si es trueo false.
// Si aes false, falsese devuelve.
// bse comprueba si es trueo false.
// Si bes false, falsese devuelve.
// De lo contrario, truese devuelve (como ambos ay b, por lo tanto, son true).
// El &&operador solo regresará truepor true && true.

// Haga una función usando el &&operador.

// Ejemplos
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false

const  and = (a, b) => {if(a && b) return true; else return false;}	// return false no cumple la condicion.

and(false, true);//Paramentro que resive la funcion