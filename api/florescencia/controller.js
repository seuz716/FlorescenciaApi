const express = require ('express');
const controladorFlorescencia = express.Router();
const servicioPlantas = require('./services');

/*Controlador
Recibe los datos del cliente
pasa los datos al servicio
recibe datos del servicio
Envia una respuesta */

controladorFlorescencia.get("/obtenerPlantas", async function (req, res) {
    let plantas = await servicioPlantas.obtenerPlantas();
    res.send({
        "mensaje ": "Listado plantas",
        "data": plantas
    });
});

controladorFlorescencia.get("/obtenerPlanta/:id", async function(req, res){
        let id = req.params.id;
        let planta = await servicioPlantas.obtenerPlanta(id);
        res.send({
            "mensaje ": "Planta Encontrada",
            "data": planta
        });
});
controladorFlorescencia.get("/obtenerPlantasPorNombre/:nombre", async function(req, res){
        let nombre = req.params.nombre;
        let plantas = await servicioPlantas.obtenerPlantaPorNombre(nombre);
        res.send({
            "mensaje ": "Plantas Encontrada",
            "data": plantas
        });
});
module.exports = controladorFlorescencia;
