const {Router} = require ("express");

const router = Router ();

//Creamos Peticiones GET - POST - PUT - DELETE
//en cada peticion, para estructurarla, llamamos a router

//GET: recibir datos
router.get('/', function (req, res) {
    //Siempre trabajamos en json entonces, por lo general, encontramos
    // . json en vez  de . send
    res.json({mensaje: "recibo el mensaje"});
});

//POST: mandar datos
router.post('/', function (req, res) {
    const body = req.body;

    res.json({mensaje: "envio el mensaje",
        body,
    });
});

//PUT: actualizar datos
router.put('/:id', function (req, res) {
    res.json({mensaje: "modifico el mensaje"});
});

//DELETE: elimino datos
router.delete('/:id', function (req, res) {
    res.json({mensaje: "elimino el mensaje"});
});

module.exports = router;