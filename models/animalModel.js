import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    especie: { type: String, required: true },
    idade: { type: Number, required: true },
    sexo: { type: String, required: true },
    peso: { type: Number, required: true },
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true } // Referência ao Tutor

});

const Animal = mongoose.model('Animal', animalSchema);
export default Animal;