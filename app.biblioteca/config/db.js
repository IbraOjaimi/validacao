const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const connectDB = async () => {
    try {
        await moongose.connect('mongodb+srv://ibraojaimi:I125786bra@cluster0.fhhha.mongodb.net/AppBiblioteca', {
            
        });
        console.log('MongoDB Connectado');
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1);
    }
};

connectDB();
module.exports = mongoose;