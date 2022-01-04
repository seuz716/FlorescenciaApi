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

async function crearPlanta(datos){
    let resultado = {};
    if (datos && Object.keys(datos).length > 0){

        let resConsulta = await modeloPlantas.crearUna(datos);
        if (resConsulta && resConsulta.acknowledged){
            resultado.mensaje = "Registro planta correcto",
            resultado.datos = resConsulta.insertedId,
            resultado.datos = datos
        } else {
            resultado.mensaje = "Registro planta incorrecto",
            resultado.datos = datos
        }
    } 
    else {
        resultado.mensaje = "No se puede crear Planta"
        resultado.datos = "No hay datos"
    }
    return resultado;
};

async function actualizarPlanta(id, datos){
    let resultado = {};
    if (id && id.length == 24){
        if (datos && datos.length > 0){
            if (datos.title && datos.title !== ""){
                let resConsulta = await modeloPlantas.actualizarUna(id, datos); 
                    if (resConsulta && resConsulta.acknowledged){
                        resultado.mensaje = "Planta Actualizada correctamente";
                        resultado.datos = resConsulta;
                    } 
                    else {
                          resultado.mensaje = "Error al actualizar";
                          resultado.datos = resConsulta;  
                    }               
            } 
            else {
                resultado.mensaje = "Titulo vacio";
                resultado.datos = title;
            }
            
        } 
        else {
                resultado.mensaje = "No hay datos";
                resultado.datos = datos;
        }
        
    } 
    else {
        resultado.mensaje = "ID invalido";
        resultado.datos = id;
    }
    return resultado;
};



module.exports.obtenerPlantas = obtenerPlantas;
module.exports.obtenerPlanta = obtenerPlanta;
module.exports.obtenerPlantaPorNombre = obtenerPlantaPorNombre;
module.exports.crearPlanta = crearPlanta;