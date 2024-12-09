import express from 'express';
import { createTutorAndAnimal, getTutorsAndAnimals, getTutorWithAnimals, getTutorByNameAndCpf, renderBuscarTutor } from '../controllers/tutorAnimalController.js';

const router = express.Router();

// Rota para criar um novo tutor e animal
router.post('/tutores-e-animais', createTutorAndAnimal);

// Rota para listar todos os tutores e animais
router.get('/tutores-e-animais', getTutorsAndAnimals);

// Rota para exibir o formulário de cadastro de tutor e animal
router.get('/tutores-e-animais/novo', (req, res) => {
    res.render('createTutorAnimal'); // Renderiza a view 'createTutorAnimal.ejs'
});

// Rota para buscar um tutor e seus animais pelo ID
router.get('/tutores/:id', getTutorWithAnimals); // Rota para buscar tutor pelo ID

// Rota para buscar um tutor pelo nome e CPF
router.get('/tutores/buscar', getTutorByNameAndCpf); // Rota para buscar tutor pelo nome e CPF

// Rota para renderizar a view de busca
router.get('/tutores/buscar-form', renderBuscarTutor); // Rota para renderizar a view de busca

export default router;