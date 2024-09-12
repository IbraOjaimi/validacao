const Livro = require('../models/livro_model.js');

exports.createLivro = async (req, res) => {
  try {
    const livro = await livro.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar livro' });
  }
};

exports.getLivro = async (req, res) => {
  try {
    const livro = await livro.find().populate('id_pet');
    res.status(200).json(livro);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar livro' });
  }
};

exports.getLivroById = async (req, res) => {
  try {
    const livro = await livro.findById(req.params.id).populate('id_livro');
    res.status(200).json(livro);
  } catch (error) {
    res.status(404).json({ error: 'livro não encontrado' });
  }
};

exports.getLivroAutor = async (req, res) => {
  try {
    const autor = await livro.findOne({autor: req.params.autor});
    res.status(200).json(autor);
  } catch (error) {
    res.status(404).json({ error: 'autor não encontrado' });
  }
};

exports.updateLivro = async (req, res) => {
  try {
    const livro = await livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(livro);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar livro' });
  }
};

exports.deleteLivro = async (req, res) => {
  try {
    await Livro.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar livro' });
  }
};