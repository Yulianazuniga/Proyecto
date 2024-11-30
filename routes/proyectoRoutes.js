const express = require('express');
let proyectoController = require('../controller/proyectoController');

let router = express.Router();

router.get('/', proyectoController.traerProyecto);
router.post('/', proyectoController.adicionarProyectos);
router.put('/:id', proyectoController.actualizarProyecto);
router.delete('/:id', proyectoController.eliminarProyecto);

module.exports = router;