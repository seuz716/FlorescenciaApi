/* Importacion de los modulos requeridos*/

const express = require('express');
const  bodyParser  = require('body-parser');
const morgan = require('morgan');
const controladorFlorescencia = require('./api/florescencia/controller');
const controladorUsuarios = require('./api/usuarios/controller');
const conexion  = require ('./database/connection');
require('dotenv').config();

/*iniciar configuracion*/

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan(process.env.MORGAN_MODE));

/*Iniciar las rutas*/

app.use("/api/florescencia", controladorFlorescencia);


/* Configurar puerto que va  monitorear la api*/

conexion.conectar()
    .then(function() {
        app.listen(port, function () {
            console.log("API ejecutandose exitosamente en el puerto: " + port); 
            console.log(conexion.obtenerConexion()); 
    });
   
   })
   .catch(function (error) {
    console.log(error);
});