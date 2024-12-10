import express from 'express';
import { createTutorAndAnimal} from '../controllers/tutorAnimalController.js';

const router = express.Router();

// Rota para criar um novo tutor e animal
router.post('/tutores-e-animais', createTutorAndAnimal);

// Rota para exibir o formulário de cadastro de tutor e animal
router.get('/tutores-e-animais/novo', (req, res) => {
    res.render('createTutorAnimal'); // Renderiza a view 'createTutorAnimal.ejs'
});
export default router;