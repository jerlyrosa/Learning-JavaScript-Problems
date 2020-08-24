// Usar promersas para simular la solicidtud  de  servidor para comprobar si este tiene datos.
// si posee datos devuelva  "We got the data"  si no lo tiene "Data not received"
//Utilice una  responseFromServer para simular el estado de los datos  del servidor.



const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer 
    let responseFromServer = true;
      
    if(responseFromServer ) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });
  
 