const {Router} = require ("express");

//importar funciones de controladores
const {usuariosGet, usuariosPost, usuariosPut, usuariosDelete} = require ("../controllers/usuariosCtrl");

const router = Router ();

//Creamos Peticiones GET - POST - PUT - DELETE
//en cada peticion, para estructurarla, llamamos a router

//GET: recibir datos
// router.get('/', function (req, res) {
//     //Siempre trabajamos en json entonces, por lo general, encontramos
//     // . json en vez  de . send
//     res.json({mensaje: "recibo el mensaje"});
// });

//PETICION GET: recibir datos
router.get ("/", usuariosGet);

// //POST: mandar datos
// router.post('/', function (req, res) {
//     const body = req.body;

//     res.json({mensaje: "envio el mensaje",
//         body,
//     });
// });

//PETICION POST: mandar datos
router.post ("/", usuariosPost);

// //PUT: actualizar datos
// router.put('/:id', function (req, res) {
//     res.json({mensaje: "modifico el mensaje"});
// });

//PETICION PUT: actualizar datos
router.put ("/:id", usuariosPut)

// //DELETE: elimino datos
// router.delete('/:id', function (req, res) {
//     res.json({mensaje: "elimino el mensaje"});
// });

//PETICION DELETE: borrar datos
router.delete ("/:id", usuariosDelete)

module.exports = router;