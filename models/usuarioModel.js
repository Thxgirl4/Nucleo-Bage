// models/usuarioModel.js
import mongoose from 'mongoose'; // Use a sintaxe de importação ES6

const usuarioSchema = new mongoose.Schema({ // Corrigido para 'usuarioSchema'
    name: { type: String, required: true },
    senha: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema); // Corrigido para usar 'usuarioSchema'
export default Usuario; // Use a sintaxe de exportação ES6