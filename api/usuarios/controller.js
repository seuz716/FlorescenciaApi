const express = require('express');
const controladorUsuarios = express.Router();
const servicioUsuarios = require('./services');


/* User
{
    "nombre": xxxxxx,
    "usuario": xxxxx,
    "password" xxxxx,
    "rol":["A","B",..."n"]
} 
*/


controladorUsuarios.get("iniciarSesion", function (req, res){
    res.send("Los datos del usuario son:" + datos.usuario);
    
});

controladorUsuarios.post("/crearUsuario", async function(req, res){
    let datosUsuario = req.body;
    let usuario = await servicioUsuarios.crearUsuario(datosUsuario);
    res.send({
        Resultado,
        "mensaje ": usuario.datosUsuario,
        "Resultado": usuario.mensaje
    });
});





