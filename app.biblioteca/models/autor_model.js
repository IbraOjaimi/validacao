const db = require('../config/db.js');
const Schema = db.Schema; 

const AutorSchema = new Schema({
  nome: { type: String, required: true },
  endereco_cep: { type: Object, required: true,  minLength: 8, maxLength: 8, },
  num_casa: { type: String, required: true },
  email: {
    type: String,
    validate: {
         validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
    },
    required: true,
  } 

});
console.log('Conectado');
const Autor = db.model('Autor', AutorSchema);

module.exports = Autor;