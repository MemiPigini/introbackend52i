const express = require('express');

class Server {
    constructor(){
        this.app = express();
        this.usuarioPath = "/api/usuarios"
        this.middlewares();
        this.routes ();
    }

    middlewares(){
        //CORS

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
        this.app.listen(3000, () => {
            console.log("Server Online");
        });
    }
}


//Esta linea dice que puede exportarse y usarse en otro lado
module.exports = Server;