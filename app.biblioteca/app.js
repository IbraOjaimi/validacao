const express = require('express');

const autor_router = require('./routers/autor_router.js');
const livro_router = require('./routers/livro_router.js');

const app = express();

app.use(express.json());

app.use('/autor', autor_router);
app.use('/livro', livro_router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});