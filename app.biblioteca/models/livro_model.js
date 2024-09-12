const db = require('../config/db.js');
const Schema = db.Schema; 

const LivroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true, },
  ano: { type: Number, required: true },
  genero: { type: String, required: true },

});

console.log('Conectado');
const Livro = db.model('Livro', LivroSchema);

module.exports = Livro;