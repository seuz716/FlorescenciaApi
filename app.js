/* Importacion de los modulos requeridos*/

const express = require('express');

/*iniciar configuracion*/
const app = express();
const port = 3700;

/*Iniciar las rutas*/

app.get("/prueba",function (request,response) {
    // Procesar la peticion
    let =nombre;
    //Enviar la respuesta
    response.send(nombre);
});
/* Configurar puerto que va  monitorear la api*/
app.listen(port, function () {
    console.log("API ejecutandose exitosamente en el puerto: " + port);
    
    
})