// Código Buggy

// El desafío es intentar corregir este código defectuoso, dadas las entradas truey false. Consulte los
// ejemplos a continuación para ver el resultado esperado.

// Ejemplos
// has_bugs(true) ➞ "sad days"
// has_bugs(false) ➞ "it's a good day"

// Notas
// No pienses demasiado en este desafío, ¡está destinado a ser muy simple! ;)

// CODIGO DEFECTUOSO

// function has_bugs(buggy_code) {
// 	if (buggyCode) {
// 		return 'sad days'
// 	} else if {
// 		return 'it's a good day'
// 	}
// }


//SOLUCION
const  has_bugs = (buggy_code) => { return (buggy_code ? 'sad days'  : "it's a good day" );}
//return "sad days"
has_bugs(true);//Paramentro que resive la funcion