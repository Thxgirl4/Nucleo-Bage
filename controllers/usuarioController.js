// controllers/usuarioController.js
import Usuario from '../models/usuarioModel.js'; // Use a sintaxe de importação ES6 e adicione a extensão .js

// Criar um novo usuario
export const createUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body); // Corrigido para usar 'usuario' em vez de 'Usuario'
        await usuario.save(); // Corrigido para usar 'usuario' em vez de 'Usuario'
        res.status(201).send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um usuario
export const deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id); // Corrigido para usar 'Usuario' em vez de 'Item'
        if (!usuario) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
};