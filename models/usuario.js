const {Schema, model} = require ("mongoose");
const UsuarioSchema = Schema ({
    nombre: {
    
    },
    correo: {
        type: String,       
    },
    password: {
        type: String,
    },
    img: { 
        type: String,
    },
    rol: {
        type: String,
    },
    estado: {
        type: Boolean,
    },
})