// #100DaysOfCode 1/100


/*Tenemos una serie de objetos que representan a diferentes personas en nuestras listas de contactos.

Se ha escrito previamente una lookUpProfilefunción que toma namey una propiedad ( prop) como argumentos.

La función debe verificar si namees un contacto real firstNamey la propiedad dada ( prop) es una propiedad de ese contacto.

Si ambos son verdaderos, devuelve el "valor" de esa propiedad.

Si name no corresponde a ningún contacto, regrese "No such contact".

Si prop no corresponde a ninguna propiedad válida de un contacto que coincida name, regrese "No such property"*/

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

//SOLUCION


function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return console.log(contacts[i][prop]);
      } else {
        return console.log( "No such property");
      }
    }
  }
  return console.log( "No such contact");
}
    
    lookUpProfile("Akira", "likes");

