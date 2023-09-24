const express = require ('express');

//CORS
const cors = require ("cors");

//importar FUNCION de base de datos config.js
const {dbConnection} = require ("../database/config.js");
class Server {
    constructor(){
        this.app = express();
        
        this.port =process.env.PORT;

        this.usuarioPath = "/api/usuarios"

        this.conectarDB();
        
        this.middlewares();
        this.routes ();
    }

    //BASE DE DATOS
    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use (cors());

        //recibir datos .json
        this.app.use (express.json());

        //Mostrar archivos publicos
        this.app.use(express.static("public"));
    }

    routes(){
        //usuario.js
        //establecemos que tiene que traer algo y la ruta desde donde
        //el usuario Path viene del constructor
        this.app.use(this.usuarioPath, require ("../routes/usuarios"));

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Server Online", this.port);
        });
    }
}


//Esta linea dice que puede exportarse y usarse en otro lado
module.exports = Server;

