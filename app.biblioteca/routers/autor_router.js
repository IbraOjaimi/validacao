const express = require('express');
const router = express.Router();
const autor_controller = require('../controllers/autor_controller.js');
const cep_endereco = require('../middleware/cep_endereco.js');

router.post('/', cep_endereco, autor_controller.createAutor);
router.get('/', autor_controller.getAutor);
router.get('/:id', autor_controller.getAutorById);
router.put('/:id', autor_controller.updateAutor);
router.delete('/:id', autor_controller.deleteAutor);

module.exports = router;