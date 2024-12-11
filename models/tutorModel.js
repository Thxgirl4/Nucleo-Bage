import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema({
    nome: { type: String, required: true }, //campo para nome
    telefone: { type: Number, required: true }, // campo para telefone
    cpf: { type: Number, required: true }, // campo para CPF
    endereco: { type: String, required: true } // campo para endereço
});

const Tutor = mongoose.model('Tutor', tutorSchema);
export default Tutor;