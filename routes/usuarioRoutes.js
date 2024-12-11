// routes/usuarioRoutes.js
import express from 'express';
import Usuario from '../models/usuarioModel.js'; // Ajuste o caminho conforme necessário
import bcrypt from 'bcrypt';

const router = express.Router();
/* rotas para implementar futuramente

// Rota para exibir a página de gerenciamento de usuários
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.render('listar', { usuarios }); // Renderiza a view 'index.ejs' com a lista de usuários
    } catch (error) {
        res.status(500).send('Erro ao buscar usuários');
    }
});

// Rota para exibir o formulário de criação de usuário
router.get('/usuarios/novo', (req, res) => {
    res.render('createUser '); // Renderiza a view 'createUser .ejs'
});

//-----------Rota para criar um novo usuário
router.post('/usuarios', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.redirect('/'); // Redireciona para a rota que exibe os usuários
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(400).send('Erro ao criar usuário');
    }
});

// Rota para deletar um usuário
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Erro ao deletar usuário');
    }
});
*/

// Rota para exibir a tela de login
router.get('/login', (req, res) => {
    console.log('Rota /login foi chamada');
    res.render('login'); // Renderiza a view 'login.ejs'
});

// Rota para processar o login
router.post('/login', (req, res) => {
    const { name, senha } = req.body;

    // Simulação de autenticação (substituir por lógica real)
    if (name === 'Atendente' && senha === 'nucleovet78') {
        // Redirecionar para a página de cadastro ao fazer login
        res.redirect('/tutor-e-animais/novo');
    } else {
        // Redirecionar de volta ao login com uma mensagem de erro
        res.send('<script>alert("Credenciais inválidas!"); window.history.back();</script>');
    }
});

export default router;