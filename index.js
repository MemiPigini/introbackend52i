//importamos express en nuestro proyecto, es como declarar una variable
// const express = require('express');

//significa que traigo todos los metodos que tiene express, y lo guaradmos en un variable
// const app = express()

//get recibimos datos 
// / es para llamar a nuestra raiz de nuestro proyecto
//function recibe el request y el response 
// app.get('/', function (req, res) {

//res es la respuesta
// res.send('Hello World');
// });

//puerto donde vamos a enviar la respuesta
// localhost:3000 escribimos en la pagina
// app.listen(3000);


//Llamamos a Server
const Server = require ("./models/server");

//Para poder usar serve debemos crear una variable que guaardara todos los metodos que yo creo en server
const server = new Server();

server.listen();