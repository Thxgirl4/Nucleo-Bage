// controllers/usuarioController.js
import Usuario from '../models/usuarioModel.js'; 

// Criar um novo usuario
export const createUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body); 
        await usuario.save();
        res.status(201).send(usuario);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Deletar um usuario
export const deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id); 
        if (!usuario) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
};