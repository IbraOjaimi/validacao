const express = require('express');
const router = express.Router();
const livro_controller = require('../controllers/livro_controller.js');

router.post('/', livro_controller.createLivro);
router.get('/', livro_controller.getLivro);
router.get('/:id', livro_controller.getLivroById);
router.get('/:autor', livro_controller.getLivroAutor);
router.put('/:id', livro_controller.updateLivro);
router.delete('/:id', livro_controller.deleteLivro);

module.exports = router;