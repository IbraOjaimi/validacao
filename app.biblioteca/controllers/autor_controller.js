const Autor = require('../models/autor_model.js');

exports.createAutor = async (req, res) => {
  try {
    const autor = await autor.create(req.body);
    res.status(201).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar autor' });
  }
};

exports.getAutor = async (req, res) => {
  try {
    const autor = await autor.find().populate('id_pet');
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar autor' });
  }
};

exports.getAutorById = async (req, res) => {
  try {
    const autor = await autor.findById(req.params.id).populate('id_autor');
    res.status(200).json(autor);
  } catch (error) {
    res.status(404).json({ error: 'autor não encontrado' });
  }
};

exports.updateAutor = async (req, res) => {
  try {
    const autor = await autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar autor' });
  }
};

exports.deleteAutor = async (req, res) => {
  try {
    await Autor.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar autor' });
  }
};