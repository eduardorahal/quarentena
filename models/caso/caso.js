import mongoose from 'mongoose';
const { Schema } = mongoose;

const casoSchema = new Schema({
    numeroSimba: String,
    nome: String,
    delegado: String,
    descricao: String
});

const Caso = mongoose.model('Caso', casoSchema);