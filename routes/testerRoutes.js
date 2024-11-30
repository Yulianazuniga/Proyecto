const express = require('express');
let testerController = require('../controller/testerController');

let router = express.Router();

router.get('/', testerController.traerTester);
router.post('/', testerController.guardartester);
router.put('/:id', testerController.actualizartester);
router.delete('/:id', testerController.eliminartester);
router.get('/.tesrtem',testerController.testermasPruebas);
module.exports = router;