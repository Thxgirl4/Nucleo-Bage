import Tutor from '../models/tutorModel.js';
import Animal from '../models/animalModel.js';

// Criar um novo tutor e animal
export const createTutorAndAnimal = async (req, res) => {
    const { tutor, animal } = req.body;

    try {
        const newTutor = new Tutor(tutor);
        await newTutor.save();

        const newAnimal = new Animal({ ...animal, tutor: newTutor._id });
        await newAnimal.save();

        res.status(201).send({ tutor: newTutor, animal: newAnimal });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Listar todos os tutores e animais
export const getTutorsAndAnimals = async (req, res) => {
    try {
        const tutors = await Tutor.find();
        const animals = await Animal.find().populate('tutor'); // Popula os dados do tutor
        res.send({ tutors, animals });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Função para renderizar a view de busca
export const renderBuscarTutor = (req, res) => {
    res.render('buscarTutor'); // Renderiza a view 'buscarTutor.ejs'
};

export const getTutorWithAnimals = async (req, res) => {
    const { id } = req.params; // Obtém o ID do tutor da URL
    try {
        const tutor = await Tutor.findById(id).populate('animais'); // Supondo que você tenha uma relação com animais
        if (!tutor) {
            return res.status(404).send('Tutor não encontrado');
        }
        res.send(tutor);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Função para buscar um tutor pelo nome e CPF
export const getTutorByNameAndCpf = async (req, res) => {
    const { nome, cpf } = req.query; // Obtém o nome e CPF da query string

    try {
        // Busca o tutor pelo nome e CPF
        const tutor = await Tutor.findOne({ nome, cpf });
        if (!tutor) {
            return res.status(404).send('Tutor não encontrado');
        }

        // Busca os animais associados ao tutor
        const animals = await Animal.find({ tutor: tutor._id });

        // Renderiza uma nova view com os dados do tutor e dos animais
        res.render('resultadoBusca', { tutor, animals });
    } catch (error) {
        res.status(500).send(error);
    }
};
