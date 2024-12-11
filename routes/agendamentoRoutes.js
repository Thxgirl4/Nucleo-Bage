// routes/agendamentoRoutes.js
import express from 'express';
import { createAgendamento, getAgendamentos, renderAgendamento } from '../controllers/agendamentoController.js';

const router = express.Router();

/* Rota para renderizar o calendário
router.get('/calendario', (req, res) => {
    res.render('calendario'); // Renderiza a view 'calendario.ejs'
});
*/

// criar agendaamento de consulta
router.get('/agendamentos', renderAgendamento);

// listar agendamentos existentes 
router.get('/agendamentos', getAgendamentos);

// renderiza a tela de agendamento
router.post('/agendamentos', createAgendamento);

export default router;