const {response, request} = require("express");

//Peticion GET
const usuariosGet = (req = request, res = response) => {
    res.json({
        mensaje: "recibo el mensaje",
    }); 
}