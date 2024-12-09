// controllers/agendamentoController.js
import Agendamento from '../models/agendamentoModel.js';

// Criar um novo agendamento
export const createAgendamento = async (req, res) => {
    const { tutor, animal, dataHora, motivo } = req.body;

    try {
        const novoAgendamento = new Agendamento({ dataHora, tutor, animal, motivo });
        await novoAgendamento.save(); // Salva o agendamento no banco de dados
        res.redirect('/agendamentos'); // Redireciona para a lista de agendamentos ou outra página
    } catch (error) {
        console.error('Erro ao criar agendamento:', error);
        res.status(500).send('Erro ao criar agendamento.'); // Retorna um erro se a criação falhar
    }
};

// Renderizar a tela de agendamento
export const renderAgendamento = (req, res) => {
    const dataHora = req.query.data; // Obtém a data da query string, se necessário
    res.render('agendamento', { dataHora }); // Passa a data para a view
};

// Listar todos os agendamentos
export const getAgendamentos = async (req, res) => {
    try {
        const agendamentos = await Agendamento.find().populate('tutor animal'); // Popula os dados do tutor e do animal
        res.send(agendamentos);
    } catch (error) {
        res.status(500).send(error);
    }
};