const {Schema, model} = require ("mongoose");
const UsuarioSchema = Schema ({
    nombre: {
    
    },
    correo: {
        type: String, 
        required: [true, "El nombre es obligatorio"], 
    },
    password: {
        type: String,
        required: [true, "El correo es obligatorio"],
    },
    img: { 
        type: String,
        required: [true, "El pass es obligatorio"],
    },
    rol: {
        type: String,
        required: true,
        enum: ["USER_ROLE", "ADMIN_ROLE"],
        default: "USER_ROLE",
    },
    estado: {
        type: Boolean,
        default: true,
    },
});

module.exports = model ("Usuario", UsuarioSchema);