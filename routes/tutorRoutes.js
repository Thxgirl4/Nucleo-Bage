import express from 'express';
import { createTutor, getAllTutors, getTutorByNameOrCpf, deleteTutorByCpf, renderSearchPage } from '../controllers/tutorController.js';

const router = express.Router();

router.get('/tutores/buscar', renderSearchPage); // Rota para renderizar a página de busca
router.post('/tutores', createTutor);
router.get('/tutores', getAllTutors);
router.get('/tutores/buscar', getTutorByNameOrCpf);
router.delete('/tutores/:cpf', deleteTutorByCpf);

export default router;