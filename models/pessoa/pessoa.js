import mongoose from 'mongoose';
const { Schema } = mongoose;

const pessoaSchema = new Schema({
    cpfcnpj: String,
    nome: String,
    tipo: String
});

const Caso = mongoose.model('Caso', casoSchema);