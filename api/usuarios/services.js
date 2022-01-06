const express = require('express');
const bcrypt = require('bcrypt');
require('dotenv').config();
const modeloUsuarios = require('./model');

async function crearUsuario (usuario){
    
    /*1. objeto vacio*
      *2  existan  las llaves usuario y  clave
    */
    if (usuario  && Object.keys(usuario).length>0){
        if (usuario.usuario && usuario.clave){
            let claveEncriptada = bcrypt.hashSync(datosUsuario.clave, process.env.ENC_SALTROUNDS);
            datosUsuario.clave = claveEncriptada;
            let resultadoCrear = await modeloUsuarios.crearUno(datosUsuario);
            if (resultadoCrear && resultadoCrear.acknowledged){
                resultado.mensaje = "Usuario creado correctamente";
                resultado.datos = resultadoCrear;
                
            } else {
                resultado.mensaje = "Usuario  no creado";
                resultado.datos = datosUsuario;
            }
        }
         else {
               resultado.mensaje = "Usuario y clave deben existir";
               resultado.datos = datosUsuario;
        }
    }
     else {
           resultado.mensaje = "No hay datos";
           resultado.datos = datosUsuario;
    }
    return resultado;
}

module.exports.crearUsuario = crearUsuario;