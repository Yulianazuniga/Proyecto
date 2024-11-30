const express = require('express');
let pruebasController = require('../controller/pruebasController');

let router = express.Router();

router.get('/', pruebasController.traerPrueba);
router.post('/', pruebasController.adicionarPrueba);
router.put('/:id', pruebasController.actualizarPrueba);
router.delete('/:id', pruebasController.eliminarPrueba);

module.exports = router;