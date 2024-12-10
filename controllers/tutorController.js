import Tutor from '../models/tutorModel.js';


// Criar um novo tutor
export const createTutor = async (req, res) => {
    const { nome, cpf } = req.body;

    if (!nome || !cpf) {
        return res.status(400).json({ message: 'Nome e CPF são obrigatórios.' });
    }

    try {
        const newTutor = new Tutor({ nome, cpf });
        await newTutor.save();
        res.status(201).json(newTutor);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tutor.', error });
    }
};

// Listar todos os tutores
export const getAllTutors = async (req, res) => {
    try {
        const tutors = await Tutor.find({}, 'nome cpf'); // Retorna apenas nome e cpf
        res.status(200).json(tutors);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tutores.', error });
    }
};

// Renderizar a página de busca de tutores
export const renderSearchPage = (req, res) => {
    res.render('tutor', { tutor: null, error: null });
};

// Atualizar a função de busca para renderizar a view com os resultados
export const getTutorByNameOrCpf = async (req, res) => {
    const { nome, cpf } = req.query;

    if (!nome && !cpf) {
        return res.render('tutor', { tutor: null, error: 'Nome ou CPF devem ser fornecidos.' });
    }

    try {
        const query = {};
        if (nome) query.nome = nome;
        if (cpf) query.cpf = cpf;

        const tutor = await Tutor.findOne(query);
        if (!tutor) {
            return res.render('tutor', { tutor: null, error: 'Tutor não encontrado.' });
        }
        res.render('tutor', { tutor, error: null });
    } catch (error) {
        res.render('tutor', { tutor: null, error: 'Erro ao buscar tutor.' });
    }
};

// Deletar um tutor pelo CPF
export const deleteTutorByCpf = async (req, res) => {
    const { cpf } = req.params;

    try {
        const result = await Tutor.deleteOne({ cpf });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Tutor não encontrado.' });
        }
        res.status(200).json({ message: 'Tutor deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar tutor.', error });
    }
};