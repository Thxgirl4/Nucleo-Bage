import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    telefone: { type: Number, required: true }, // Novo campo para telefone
    cpf: { type: Number, required: true }, // Novo campo para CPF
    endereco: { type: String, required: true } // Novo campo para endereço
});

const Tutor = mongoose.model('Tutor', tutorSchema);
export default Tutor;