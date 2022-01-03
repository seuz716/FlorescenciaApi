

const basedatos = require('../../database/connection');
const objectId = require('mongodb').ObjectId;
// let db =  basedatos.obtenerConexion(); permite la conexion db a todas las funciones

/* Modelo 
    Manipular la base de datos
    Obtener, actualizar, guardar, eliminar los envia al servicio
*/



    function findAll() {
        let db =  basedatos.obtenerConexion();
        return db.collection("PlantasMexico").find({}).toArray()
        .then(function (plantas){
            return plantas;
        })
        .catch(function (error) {
            console.log(error)
        });

        };

    function obtenerUna(id) {
            let db =  basedatos.obtenerConexion();
             return db.collection("PlantasMexico").findOne({"_id" : objectId(id)})
            .then(function (planta){
                return planta;
            })
            .catch(function (error){
                console.log(error);
            })
    };    

    function obtenerPorNombre(nombre){
        let db =  basedatos.obtenerConexion();
         return db.collection("PlantasMexico").find({"title" : new RegExp(nombre, "i")}).toArray()
        .then(function (plantas){
            return plantas;
        })
        .catch(function (error){
            console.log(error);
        })
};

    

    module.exports.findAll = findAll;
    module.exports.obtenerUna= obtenerUna;        
    module.exports.obtenerPorNombre= obtenerPorNombre; 