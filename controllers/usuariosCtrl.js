const {response, request} = require("express");

//importar el  schem usuario
const Usuario = require("../models/usuario")

//Peticion GET
//datos de mi esquema del servidor
const usuariosGet = (req = request, res = response) => {
    const {apiKey, limit} = req.query;

    res.json({
        mensaje: "recibo el mensaje",
        apiKey,
        limit,
    }); 
};

//POST
//datos que recibo del front
const usuariosPost = async (req = request, res = response) => {
    const datos = req.body;
    const {nombre, correo, password, rol} = datos; //FRONT

    const usuario = new Usuario ({nombre, correo, password, rol}) //BACK

    //Guardar datos en BASE DE DATOS
await usuario.save();

    res.json ({
        usuario,
        mensaje: "envio el mensaje",
    });
};

//PUT
const usuariosPut = (req = request, res = response) => {
    res.json({
        mensaje: "modifico el mensaje",
    });
};

//DELETE
const usuariosDelete = (req = request, res = response) => {
    res.json({
        mensaje: "elimino el mensaje",
    }); 
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}