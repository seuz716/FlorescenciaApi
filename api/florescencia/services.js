/*Servicio: logica del API
servicio recibe datos del controlador
Manipular los datos --> transformarlos a  través de las operaciones logicas
Envia, consulta y modificar los datos transformados al modelo
*/

const modeloPlantas = require("./model");

async function obtenerPlantas(){
    let plantas = await modeloPlantas.findAll();
    return plantas; 
};

async function obtenerPlanta(id){
    let planta = await modeloPlantas.obtenerUna(id);
    return planta; 
};

async function obtenerPlantaPorNombre(nombre){
    let plantas = await modeloPlantas.obtenerPorNombre(nombre);
    return plantas; 
};

module.exports.obtenerPlantas = obtenerPlantas;
module.exports.obtenerPlanta = obtenerPlanta;
module.exports.obtenerPlantaPorNombre = obtenerPlantaPorNombre;