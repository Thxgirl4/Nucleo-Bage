// models/agendamentoModel.js
import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema({
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true }, // Referência ao Tutor
    animal: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true }, // Referência ao Animal
    dataHora: { type: Date, required: true }, // Data e hora do agendamento
    motivo: { type: String, required: true } // Motivo do agendamento
});

// Exporta o modelo Agendamento
const Agendamento = mongoose.model('Agendamento', agendamentoSchema);
export default Agendamento;