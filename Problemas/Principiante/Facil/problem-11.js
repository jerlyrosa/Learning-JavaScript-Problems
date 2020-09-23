// Dado el siguente  arreglo con su repectivo objecto dentro  devuelva, el nombre de la ciudad,
//el pais  donde esta esta ubicado y el total de habitantes de todas esa cuidades que cumplan
//con la cantidad de habitantes menor  a 1209000.

//Nota

//Utlizar programcion funcional
//Usar metodo filter, reduce  y map
//Retorna todo en un arreglo

const ciudades = [
    {
      pais: 'Venezuela',
      nombre: 'Maracaibo',
      habitantes: 1209000
    },
    {
      pais: 'Turquía',
      nombre: 'Denizli',
      habitantes: 850300
    },
    {
      pais: 'Italia',
      nombre: 'Siena',
      habitantes: 53700
    },
    {
      pais: 'Italia',
      nombre: 'Genova',
      habitantes: 583600
    },
    {
      pais: 'Brasil',
      nombre: 'Fortaleza',
      habitantes: 2400100
    }
  ];


  const obtenerCuidadesNombre = (array)=>{
    const  resulhabitantes = array.filter(({habitantes}) => habitantes < 1209000);
    const resul = resulhabitantes.map(({nombre, pais})=> {return {nombre,pais}});
    const maxHbitantes = resulhabitantes.reduce((acc, {habitantes}) => acc + habitantes,0);
    
    return  [resul,` Total habitantes de todas la cuidades: ${maxHbitantes}`]; 

  }
 const resul = obtenerCuidadesNombre(ciudades);
 console.log(resul);