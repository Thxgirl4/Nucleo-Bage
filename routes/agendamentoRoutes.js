// routes/agendamentoRoutes.js
import express from 'express';
import { createAgendamento, getAgendamentos, renderAgendamento } from '../controllers/agendamentoController.js';

const router = express.Router();

// Rota para renderizar o calendário
router.get('/calendario', (req, res) => {
    res.render('calendario'); // Renderiza a view 'calendario.ejs'
});

// Rota para criar um novo agendamento
router.get('/agendamentos', renderAgendamento);

// Rota para listar todos os agendamentos
router.get('/agendamentos', getAgendamentos);

//Rota para renderizar a tela de agendamento
router.post('/agendamentos', createAgendamento);

export default router;