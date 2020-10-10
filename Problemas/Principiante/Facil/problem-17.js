//  Programa una función que valide si una palabra o frase dada, es un 
// palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const palindrome =(str)=>{
    str = str.toLowerCase();
    let resul = str.split('').reverse().join('');
    console.log( str === resul ? true:false);

}

palindrome("Salas")