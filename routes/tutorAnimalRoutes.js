import express from 'express';
import { createTutorAndAnimal} from '../controllers/tutorAnimalController.js';

const router = express.Router();

// Rota para criar um novo tutor e animal
router.post('/tutores-e-animais', createTutorAndAnimal);

// Rota para exibir o formulário de cadastro de tutor e animal
router.get('/tutores-e-animais', (req, res) => {
    res.render('createTutorAnimal'); // Renderiza a view 'createTutorAnimal.ejs'
});

// Rota para exibir a confirmação de criação de tutor e animal
router.get('/tutores-e-animais/confirmacao', (req, res) => {
    const { tutor, animal } = req.query;
    res.render('confirmacao', { tutor, animal });
});

export default router;