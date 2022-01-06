

const basedatos = require('../../database/connection');
const objectId = require('mongodb').ObjectId;
// let db =  basedatos.obtenerConexion(); permite la conexion db a todas las funciones

/* Modelo 
    Manipular la base de datos
    Obtener, actualizar, guardar, eliminar los envia al servicio
*/



    function findAll() {
        let db =  basedatos.obtenerConexion();
        return db.collection("usersPlants").find({}).toArray()
        .then(function (plantas){
            return plantas;
        })
        .catch(function (error) {
            console.log(error)
        });

        };

    function obtenerUna(id) {
            let db =  basedatos.obtenerConexion();
             return db.collection("usersPlants").findOne({"_id" : objectId(id)})
            .then(function (planta){
                return planta;
            })
            .catch(function (error){
                console.log(error);
            })
    };  

async function buscarUsuario(usuario) {
        let db =  basedatos.obtenerConexion();
         return await db.collection("usersPlants").findOne({"usuario" : usuario});
};    

function obtenerPorNombre(nombre){
        let db =  basedatos.obtenerConexion();
         return db.collection("usersPlants").find({"title" : new RegExp(nombre, "i")}).toArray()
        .then(function (plantas){
            return plantas;
        })
        .catch(function (error){
            console.log(error);
        })
};

async function crearUno(datosUsuario){
    let db =  basedatos.obtenerConexion();
     return  await db.collection("usersPlants").insertOne(datosUsuario);
};

function actualizarUna(id, datosUsuario){
    let db =  basedatos.obtenerConexion();
     return db.collection("usersPlants").updateOne(
            {"_id": objectId(id)},
            {"$set": datos}
     )       
    .then(function (resultado){
        console.log(resultado);
        return resultado; 
    })
    .catch(function (error){
        console.log(error);
    })
};

function eliminarUna(id){
    let db =  basedatos.obtenerConexion();
     return db.collection("usersPlants").deleteOne(
            {"_id": objectId(id)},
           
     )       
    .then(function (resultado){
        console.log(resultado);
        return resultado; 
    })
    .catch(function (error){
        console.log(error);
    })
};



    

    module.exports.findAll = findAll;
    module.exports.obtenerUna = obtenerUna;        
    module.exports.obtenerPorNombre = obtenerPorNombre; 
    module.exports.crearUno = crearUno; 
    module.exports.actualizarUna = actualizarUna;
    module.exports.eliminarUna = eliminarUna;
    module.exports.buscarUsuario = buscarUsuario;