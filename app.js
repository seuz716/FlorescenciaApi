/* Importacion de los modulos requeridos*/

const express = require('express');
const  bodyParser  = require('body-parser');
const controladorFlorescencia = require('./api/florescencia/controller');

/*iniciar configuracion*/

const app = express();
const port = 3700;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*Iniciar las rutas*/

app.use("/api/florescencia", controladorFlorescencia);


/* Configurar puerto que va  monitorear la api*/
app.listen(port, function () {
    console.log("API ejecutandose exitosamente en el puerto: " + port);

    
})