const mongoose = require ("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log("Base de datos conectada");
    }catch (error){
        console.log(error);
        throw new Error ("Error en base de datos") //para que aparezca el mensaje de error en pantalla
    }
}
module.exports = {
    dbConnection,
}