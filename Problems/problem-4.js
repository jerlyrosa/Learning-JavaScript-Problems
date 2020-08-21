// #100DaysOfCode 4/100

/*Se le proporciona un objeto JSON que representa una parte de su colección de álbumes musicales. 
Cada álbum tiene varias propiedades y un número de identificación único como clave. No todos los 
álbumes tienen información completa.

Escriba una función que tome el id(me gusta 2548) de un álbum , una propiedad prop(me gusta "artist"o "tracks")
 y un value(me gusta "Addicted to Love") para modificar los datos de esta colección.

Si prop no está "tracks"y no value está vacío ( ""), actualice o configure la value propiedad de ese álbum 
de registro.

Su función siempre debe devolver el objeto de colección completo.

Hay varias reglas para manejar datos incompletos:

Si prop es así, "tracks"pero el álbum no tiene una "tracks"propiedad, cree una matriz vacía antes
 de agregar el nuevo valor a la propiedad correspondiente del álbum.

Si prop está "tracks"y value no está vacío ( ""), empuje value hacia el final de la tracks matriz 
existente del álbum .

Si value está vacío ( ""), borra la proppropiedad dada del álbum.

*/

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };

  //SOLUCION
  
    function updateRecords(id, prop, value) {
         if ( value == ""){
             delete  collection[id][prop]
                }else if (prop === "tracks"){
                  collection[id][prop] = collection[id][prop] || [];
                  collection[id][prop].push(value);
              } else {
                  collection[id][prop] = value;
           }
                 return console.log( collection);
  }
  
  updateRecords(5439, "artist", "JERLY");